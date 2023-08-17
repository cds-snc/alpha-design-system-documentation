import { langProp } from '../../../utils/storybook/component-properties';
export default {
  title: 'Components/Error summary',
  argTypes: Object.assign({
    // Props
    listen: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
    }, errorLinks: {
      name: 'error-links',
      control: 'text',
      description: '{ "error-href": "error message" }',
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' }
      },
    }, heading: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    }
  }, langProp),
};
const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-error-summary
  ${args.listen && !args.errorLinks ? `listen` : null}
  ${args.errorLinks ? `error-links='${args.errorLinks}'` : null}
  ${args.heading ? `heading="${args.heading}"` : null}
>
</gcds-error-summary>

<!-- React code -->
<GcdsErrorSummary
  ${args.listen && !args.errorLinks ? `listen` : null}
  ${args.errorLinks ? `errorLinks='${args.errorLinks}'` : null}
  ${args.heading ? `heading="${args.heading}"` : null}
>
</GcdsErrorSummary>
`).replace(/\s\snull\n/g, '');
export const Default = Template.bind({});
Default.args = {
  listen: true,
  errorLinks: `{
    "error-href-1": "Error message",
    "error-href-2": "Error message",
    "error-href-3": "Error message"
  }`,
  heading: '',
  lang: 'en'
};
