import { Host, h, } from "@stencil/core";
import { assignLanguage, inheritAttributes, observerConfig, } from "../../utils/utils";
import { defaultValidator, getValidator, requiredValidator, } from "../../validators";
export class GcdsSelect {
  constructor() {
    this._validator = defaultValidator;
    this.onFocus = e => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      this.gcdsFocus.emit();
    };
    this.onBlur = e => {
      if (this.focusHandler) {
        this.focusHandler(e);
      }
      else {
        if (this.validateOn == 'blur') {
          this.validate();
        }
      }
      this.gcdsBlur.emit();
    };
    this.handleChange = e => {
      if (this.changeHandler) {
        this.changeHandler(e);
      }
      else {
        const val = e.target && e.target.value;
        this.value = val;
      }
      this.gcdsSelectChange.emit(this.value);
    };
    this.selectId = undefined;
    this.label = undefined;
    this.required = false;
    this.disabled = false;
    this.defaultValue = undefined;
    this.value = undefined;
    this.errorMessage = undefined;
    this.hint = undefined;
    this.validator = undefined;
    this.validateOn = undefined;
    this.changeHandler = undefined;
    this.focusHandler = undefined;
    this.blurHandler = undefined;
    this.hasError = undefined;
    this.inheritedAttributes = {};
    this.lang = undefined;
  }
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = '';
    }
    else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
    else if (this.errorMessage == '') {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = 'blur';
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.selectId}`,
        message: `${this.label} - ${this.errorMessage}`,
      });
    }
    else {
      this.errorMessage = '';
      this.gcdsValid.emit({ id: `#${this.selectId}` });
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest('form')) {
      if (this.validateOn && this.validateOn != 'other') {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
      }
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
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    // Assign required validator if needed
    requiredValidator(this.el, 'select');
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }
  render() {
    const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError, } = this;
    const attrsSelect = Object.assign({ disabled,
      required,
      value }, inheritedAttributes);
    const attrsLabel = {
      label,
      required,
    };
    if (hint || errorMessage) {
      const hintID = hint ? `hint-${selectId} ` : '';
      const errorID = errorMessage ? `error-message-${selectId} ` : '';
      attrsSelect['aria-describedby'] = `${hintID}${errorID}${attrsSelect['aria-describedby']
        ? `${attrsSelect['aria-describedby']}`
        : ''}`;
    }
    return (h(Host, null, h("div", { class: `gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}` }, h("gcds-label", Object.assign({}, attrsLabel, { "label-for": selectId, lang: lang })), hint ? h("gcds-hint", { hint: hint, "hint-id": selectId }) : null, errorMessage ? (h("gcds-error-message", { messageId: selectId, message: errorMessage })) : null, h("select", Object.assign({}, attrsSelect, { id: selectId, name: selectId, onBlur: e => this.onBlur(e), onFocus: e => this.onFocus(e), onChange: e => this.handleChange(e), "aria-invalid": hasError ? 'true' : 'false', ref: element => (this.shadowElement = element) }), defaultValue ? (h("option", { value: "", disabled: true, selected: true }, defaultValue)) : null, h("slot", null)))));
  }
  static get is() { return "gcds-select"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["gcds-select.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["gcds-select.css"]
    };
  }
  static get properties() {
    return {
      "selectId": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Id attribute for a select element."
        },
        "attribute": "select-id",
        "reflect": true
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
          "text": "Form field label."
        },
        "attribute": "label",
        "reflect": true
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies if a form field is required or not."
        },
        "attribute": "required",
        "reflect": true,
        "defaultValue": "false"
      },
      "disabled": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies if a select element is disabled or not."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "defaultValue": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The default value is an optional value that gets displayed before the user selects an option."
        },
        "attribute": "default-value",
        "reflect": true
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Value for a select element."
        },
        "attribute": "value",
        "reflect": false
      },
      "errorMessage": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Error message for an invalid select element."
        },
        "attribute": "error-message",
        "reflect": true
      },
      "hint": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint displayed below the label."
        },
        "attribute": "hint",
        "reflect": true
      },
      "validator": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Array<\n    string | ValidatorEntry | Validator<string>\n  >",
          "resolved": "(string | ValidatorEntry | Validator<string>)[]",
          "references": {
            "Array": {
              "location": "global",
              "id": "global::Array"
            },
            "ValidatorEntry": {
              "location": "import",
              "path": "../../validators",
              "id": "src/validators/index.ts::ValidatorEntry"
            },
            "Validator": {
              "location": "import",
              "path": "../../validators",
              "id": "src/validators/index.ts::Validator"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Array of validators"
        }
      },
      "validateOn": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'blur' | 'submit' | 'other'",
          "resolved": "\"blur\" | \"other\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set event to call validator"
        },
        "attribute": "validate-on",
        "reflect": false
      },
      "changeHandler": {
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
          "text": "Custom callback function on change event"
        }
      },
      "focusHandler": {
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
          "text": "Custom callback function on focus event"
        }
      },
      "blurHandler": {
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
          "text": "Custom callback function on blur event"
        }
      }
    };
  }
  static get states() {
    return {
      "hasError": {},
      "inheritedAttributes": {},
      "lang": {}
    };
  }
  static get events() {
    return [{
        "method": "gcdsSelectChange",
        "name": "gcdsSelectChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Update value based on user selection."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "gcdsFocus",
        "name": "gcdsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select has focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "gcdsBlur",
        "name": "gcdsBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "gcdsError",
        "name": "gcdsError",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select has a validation error."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }, {
        "method": "gcdsValid",
        "name": "gcdsValid",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select has a validation error."
        },
        "complexType": {
          "original": "object",
          "resolved": "object",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "validate": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Call any active validators",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "validateDisabledSelect"
      }, {
        "propName": "errorMessage",
        "methodName": "validateErrorMessage"
      }, {
        "propName": "validator",
        "methodName": "validateValidator"
      }, {
        "propName": "hasError",
        "methodName": "validateHasError"
      }];
  }
  static get listeners() {
    return [{
        "name": "submit",
        "method": "submitListener",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=gcds-select.js.map
