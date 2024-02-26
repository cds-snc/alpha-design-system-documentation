import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gcdsHintCss = ".sc-gcds-hint-h .gcds-hint.sc-gcds-hint{font:var(--gcds-hint-font);margin:var(--gcds-hint-margin)}";
const GcdsHintStyle0 = gcdsHintCss;

const GcdsHint = /*@__PURE__*/ proxyCustomElement(class GcdsHint extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.hint = undefined;
        this.hintId = undefined;
    }
    render() {
        const { hint, hintId } = this;
        return (h(Host, { id: `hint-${hintId}` }, h("p", { class: "gcds-hint" }, hint)));
    }
    get el() { return this; }
    static get style() { return GcdsHintStyle0; }
}, [2, "gcds-hint", {
        "hint": [1],
        "hintId": [1, "hint-id"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["gcds-hint"];
    components.forEach(tagName => { switch (tagName) {
        case "gcds-hint":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GcdsHint);
            }
            break;
    } });
}

export { GcdsHint as G, defineCustomElement as d };

//# sourceMappingURL=gcds-hint2.js.map