import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { o as observerConfig, a as assignLanguage } from './utils.js';

const I18N = {
  en: {
    step: 'Step',
    of: 'of',
  },
  fr: {
    step: 'Étape',
    of: 'sur',
  },
};

const gcdsStepperCss = ":host .gcds-stepper{color:var(--gcds-stepper-text);font:var(--gcds-stepper-font);margin:var(--gcds-stepper-margin)}";

const GcdsStepper$1 = /*@__PURE__*/ proxyCustomElement(class GcdsStepper extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.currentStep = undefined;
    this.totalSteps = undefined;
    this.lang = undefined;
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
  }
  render() {
    const { currentStep, lang, totalSteps } = this;
    return (h(Host, null, h("h6", { class: "gcds-stepper" }, `${I18N[lang].step} ${currentStep} ${I18N[lang].of} ${totalSteps}`)));
  }
  get el() { return this; }
  static get style() { return gcdsStepperCss; }
}, [1, "gcds-stepper", {
    "currentStep": [2, "current-step"],
    "totalSteps": [2, "total-steps"],
    "lang": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-stepper"];
  components.forEach(tagName => { switch (tagName) {
    case "gcds-stepper":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GcdsStepper$1);
      }
      break;
  } });
}

const GcdsStepper = GcdsStepper$1;
const defineCustomElement = defineCustomElement$1;

export { GcdsStepper, defineCustomElement };

//# sourceMappingURL=gcds-stepper.js.map