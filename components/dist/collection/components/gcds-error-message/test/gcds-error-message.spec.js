import { newSpecPage } from "@stencil/core/testing";
import { GcdsErrorMessage } from "../gcds-error-message";
describe('gcds-error-message', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [GcdsErrorMessage],
            html: '<gcds-error-message message-id="input-renders">This field is required</gcds-error-message>',
        });
        expect(root).toEqualHtml(`
      <gcds-error-message message-id="input-renders" id="error-message-input-renders" class="gcds-error-message-wrapper">
        <mock:shadow-root>
          <gcds-text class="error-message" role="alert" margin-bottom="0">
            <slot></slot>
          </gcds-text>
        </mock:shadow-root>
        This field is required
      </gcds-error-message>
    `);
    });
});
//# sourceMappingURL=gcds-error-message.spec.js.map
