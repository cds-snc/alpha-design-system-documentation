import { langProp, validatorProps, } from "../../../utils/storybook/component-properties";
export default {
  title: 'Components/Input',
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur'],
    },
  },
  argTypes: Object.assign(Object.assign(Object.assign({
    // Props
    hideLabel: {
      name: 'hide-label',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    }, inputId: {
      name: 'input-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    }, size: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
    }, type: {
      control: { type: 'select' },
      options: ['email', 'number', 'password', 'search', 'text', 'url'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    }, autocomplete: {
      control: { type: 'select' },
      options: ['on', 'off'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    }, disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    }, errorMessage: {
      name: 'error-message',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    }, hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    }, label: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    }, required: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    }, value: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    }
  }, validatorProps), langProp), {
    // Events
    gcdsChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      },
    }, gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      },
    }, gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      },
    }
  }),
};
const Template = args => `
<!-- Web component code (Angular, Vue) -->
<gcds-input
  input-id="${args.inputId}"
  label="${args.label}"
  ${args.type != 'text' ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete != 'off' ? `autocomplete="${args.autocomplete}"` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-input>

<!-- React code -->
<GcdsInput
  inputId="${args.inputId}"
  label="${args.label}"
  ${args.type != 'text' ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete != 'off' ? `autocomplete="${args.autocomplete}"` : null}
  ${args.hideLabel ? ` hideLabel` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsInput>
`.replace(/\s\snull\n/g, '');
const TemplatePlayground = args => `
<gcds-input
  input-id="${args.inputId}"
  label="${args.label}"
  ${args.type != 'text' ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete != 'off' ? `autocomplete="${args.autocomplete}"` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-input>
`;
// ------ Input default ------
export const Default = Template.bind({});
Default.args = {
  inputId: 'example-default',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  size: '',
  value: '',
  lang: 'en',
  autocomplete: 'off',
  hideLabel: false,
  validateOn: 'blur',
};
// ------ Input states ------
export const Disabled = Template.bind({});
Disabled.args = {
  inputId: 'example-disabled',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: true,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
export const Error = Template.bind({});
Error.args = {
  inputId: 'example-error',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  required: true,
  errorMessage: 'Error message or validation message.',
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
export const Required = Template.bind({});
Required.args = {
  inputId: 'example-required',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  required: true,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
// ------ Input types ------
export const Email = Template.bind({});
Email.args = {
  inputId: 'example-email',
  type: 'email',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
export const Number = Template.bind({});
Number.args = {
  inputId: 'example-number',
  type: 'number',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
export const Password = Template.bind({});
Password.args = {
  inputId: 'example-password',
  type: 'password',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
export const Search = Template.bind({});
Search.args = {
  inputId: 'example-search',
  type: 'search',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
export const Text = Template.bind({});
Text.args = {
  inputId: 'example-text',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
export const Url = Template.bind({});
Url.args = {
  inputId: 'example-url',
  type: 'url',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: 'off',
  validateOn: 'blur',
};
// ------ Input events & props ------
export const Props = Template.bind({});
Props.args = {
  inputId: 'example-default',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  size: '',
  value: '',
  lang: 'en',
  autocomplete: 'off',
  hideLabel: false,
  validateOn: 'blur',
};
// ------ Input playground ------
export const Playground = TemplatePlayground.bind({});
Playground.args = {
  inputId: 'input',
  type: 'text',
  label: 'Input label',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  size: '',
  value: '',
  autocomplete: 'off',
  hideLabel: false,
  validateOn: 'blur',
  lang: 'en',
};
//# sourceMappingURL=gcds-input.stories.js.map
