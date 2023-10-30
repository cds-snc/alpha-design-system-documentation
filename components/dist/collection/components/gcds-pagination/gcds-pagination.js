import { Host, h, } from "@stencil/core";
import { assignLanguage, observerConfig } from "../../utils/utils";
import I18N from "./i18n/i18n";
import { constructHref, constructClasses } from "./utils/render";
export class GcdsPagination {
  constructor() {
    this.listitems = [];
    this.mobilePrevNext = [];
    this.onPageChange = e => {
      if (this.pageChangeHandler) {
        this.pageChangeHandler(e);
      }
      this.gcdsPageChange.emit();
    };
    this.display = 'list';
    this.label = undefined;
    this.previousHref = undefined;
    this.previousLabel = undefined;
    this.nextHref = undefined;
    this.nextLabel = undefined;
    this.totalPages = undefined;
    this.currentPage = undefined;
    this.url = undefined;
    this.pageChangeHandler = undefined;
    this.currentStep = undefined;
    this.lang = undefined;
  }
  watchCurrentPage(newValue) {
    this.currentStep = newValue;
  }
  /**
   * Convert url prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  urlChanged(newUrl) {
    if (typeof newUrl == 'string') {
      this.urlObject = JSON.parse(newUrl);
    }
    else if (typeof newUrl == 'object') {
      this.urlObject = newUrl;
    }
  }
  watchLang() {
    if (this.display == 'list') {
      this.configureListPagination();
    }
  }
  /**
   * Function to constuct <li> and <a> tags for display="list" pagination
   */
  configurePaginationStep(page, end, mobile) {
    const linkAttrs = {
      'onClick': e => this.onPageChange(e),
      'href': this.urlObject
        ? constructHref(this.urlObject, page, end)
        : 'javascript:void(0)',
      'aria-label': !end
        ? I18N[this.lang].pageNumberOf
          .replace('{#}', page)
          .replace('{total}', this.totalPages)
          .replace('{label}', this.label)
        : end == 'next'
          ? `${I18N[this.lang].nextPage}: ${I18N[this.lang].pageNumberOf
            .replace('{#}', ++page)
            .replace('{total}', this.totalPages)
            .replace('{label}', this.label)}`
          : `${I18N[this.lang].previousPage}: ${I18N[this.lang].pageNumberOf
            .replace('{#}', --page)
            .replace('{total}', this.totalPages)
            .replace('{label}', this.label)}`,
    };
    if (page == this.currentPage && !end) {
      linkAttrs['aria-current'] = 'page';
    }
    if (end) {
      return (h("li", null, end === 'next' ? (h("a", Object.assign({}, linkAttrs, { class: !mobile
          ? 'gcds-pagination-end-button'
          : 'gcds-pagination-end-button-mobile' }), I18N[this.lang].next, h("gcds-icon", { "margin-left": "200", name: "arrow-right" }))) : (h("a", Object.assign({}, linkAttrs, { class: !mobile
          ? 'gcds-pagination-end-button'
          : 'gcds-pagination-end-button-mobile' }), h("gcds-icon", { "margin-right": "200", name: "arrow-left" }), mobile
        ? I18N[this.lang].previousMobile
        : I18N[this.lang].previous))));
    }
    else {
      return (h("li", { class: page != 1 && page != this.totalPages
          ? constructClasses(page, this.currentPage, this.totalPages)
          : '' }, h("a", Object.assign({}, linkAttrs), page)));
    }
  }
  /**
   * Function to render the right steps for display="list" pagination
   */
  configureListPagination() {
    this.listitems = [];
    this.mobilePrevNext = [];
    if (this.currentPage != 1) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, 'previous'));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, 'previous', true));
    }
    // Flags to see if ellipses already rendered
    let previousEllipses = false;
    let nextEllipses = false;
    for (let i = 1; i <= this.totalPages; i++) {
      // Left side mobile ellipses
      if (i == 2 &&
        this.currentPage < 6 &&
        this.currentPage > 3 &&
        this.totalPages > 9) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      else if (i == 2 &&
        this.totalPages < 10 &&
        this.totalPages > 5 &&
        this.currentPage > 3) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      if (i == this.currentPage ||
        i == 1 ||
        i == this.totalPages ||
        (i >= this.currentPage - 2 && i <= this.currentPage + 2) ||
        this.totalPages < 10) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if ((this.currentPage <= 5 && i <= 7) ||
        (this.currentPage >= this.totalPages - 4 && i >= this.totalPages - 6)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if ((this.currentPage == 5 && i == 2) ||
        (this.currentPage == this.totalPages - 4 && i == this.totalPages - 1)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      else if (!previousEllipses && i < this.currentPage - 2) {
        this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        previousEllipses = true;
      }
      else if (!nextEllipses &&
        i > this.currentPage + 2 &&
        i < this.totalPages) {
        this.listitems.push(h("li", { "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
        nextEllipses = true;
      }
      // Right side mobile ellipses
      if (i == this.totalPages - 1 &&
        this.currentPage > this.totalPages - 5 &&
        this.currentPage < this.totalPages - 2 &&
        this.totalPages > 9) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
      else if (i == this.totalPages - 1 &&
        this.totalPages < 10 &&
        this.totalPages > 5 &&
        this.currentPage < this.totalPages - 2) {
        this.listitems.push(h("li", { class: `gcds-pagination-list-mobile-ellipses`, "aria-hidden": "true" }, h("span", { class: "gcds-pagination-list-ellipses" }, "...")));
      }
    }
    if (this.currentPage != this.totalPages) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, 'next'));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentPage, 'next', true));
    }
  }
  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
    this.updateLang();
    if (this.url && typeof this.url == 'string') {
      this.urlObject = JSON.parse(this.url);
    }
    else if (this.url && typeof this.url == 'object') {
      this.urlObject = this.url;
    }
    if (this.display == 'list') {
      this.configureListPagination();
    }
  }
  componentDidUpdate() {
    if (this.display == 'list') {
      this.configureListPagination();
    }
  }
  render() {
    const { display, label, previousHref, previousLabel, nextHref, nextLabel, lang, } = this;
    return (h(Host, { role: "navigation", "aria-label": label }, display === 'list' ? (h("div", null, h("ul", { class: "gcds-pagination-list" }, this.listitems), h("ul", { class: "gcds-pagination-list-mobile-prevnext" }, this.mobilePrevNext))) : (h("ul", { class: "gcds-pagination-simple" }, previousHref && (h("li", { class: "gcds-pagination-simple-previous" }, h("a", { href: previousHref, "aria-label": `${I18N[lang].previousPage}${previousLabel ? `: ${previousLabel}` : ''}`, onClick: e => this.onPageChange(e) }, h("gcds-icon", { "margin-right": "200", name: "arrow-left" }), h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].previous), h("span", null, previousLabel)))), nextHref && (h("li", { class: "gcds-pagination-simple-next" }, h("a", { href: nextHref, "aria-label": `${I18N[lang].nextPage}${nextLabel ? `: ${nextLabel}` : ''}`, onClick: e => this.onPageChange(e) }, h("div", { class: "gcds-pagination-simple-text" }, I18N[lang].next), h("span", null, nextLabel), h("gcds-icon", { "margin-left": "200", name: "arrow-right" }))))))));
  }
  static get is() { return "gcds-pagination"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-pagination.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-pagination.css"]
    };
  }
  static get properties() {
    return {
      "display": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'list' | 'simple'",
          "resolved": "\"list\" | \"simple\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Navigation element label"
        },
        "attribute": "display",
        "reflect": false,
        "defaultValue": "'list'"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Navigation element label"
        },
        "attribute": "label",
        "reflect": false
      },
      "previousHref": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Simple display - href for previous link"
        },
        "attribute": "previous-href",
        "reflect": false
      },
      "previousLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Simple display - label for previous link"
        },
        "attribute": "previous-label",
        "reflect": true
      },
      "nextHref": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Simple display - href for next link"
        },
        "attribute": "next-href",
        "reflect": false
      },
      "nextLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Simple display - lable for next link"
        },
        "attribute": "next-label",
        "reflect": true
      },
      "totalPages": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "List display - Total number of pages"
        },
        "attribute": "total-pages",
        "reflect": false
      },
      "currentPage": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "List display - Current page number"
        },
        "attribute": "current-page",
        "reflect": true
      },
      "url": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | object",
          "resolved": "object | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "List display - URL object to create query strings and fragment on links"
        },
        "attribute": "url",
        "reflect": false
      },
      "pageChangeHandler": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global",
              "id": "global::Function"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Function to fire when pageChange event is called"
        }
      }
    };
  }
  static get states() {
    return {
      "currentStep": {},
      "lang": {}
    };
  }
  static get events() {
    return [{
        "method": "gcdsPageChange",
        "name": "gcdsPageChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Update value based on user input."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "currentPage",
        "methodName": "watchCurrentPage"
      }, {
        "propName": "url",
        "methodName": "urlChanged"
      }, {
        "propName": "lang",
        "methodName": "watchLang"
      }];
  }
}
//# sourceMappingURL=gcds-pagination.js.map
