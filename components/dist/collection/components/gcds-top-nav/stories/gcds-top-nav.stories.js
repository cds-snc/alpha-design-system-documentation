import { langProp } from '../../../utils/storybook/component-properties';
export default {
  title: 'Components/Top navigation',
  argTypes: Object.assign(Object.assign({
    // Props
    label: {
      name: 'label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    }, alignment: {
      control: { type: 'radio' },
      options: ['right', 'left', 'center'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' }
      },
    }
  }, langProp), {
    // Slots
    home: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    }
  }),
};
const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-top-nav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  ${args.home ?
  `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link>
    `
  : null}
  <gcds-nav-link href="#">Installation</gcds-nav-link>
  <gcds-nav-group  open-trigger="Contact" menu-label="Contact">
    <gcds-nav-link href="#">Form</gcds-nav-link>
    <gcds-nav-link href="#">GitHub</gcds-nav-link>
    <gcds-nav-link href="#">Slack</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#">Foundations</gcds-nav-link>
  <gcds-nav-link href="#">Components</gcds-nav-link>
</gcds-top-nav>

<!-- React code -->
<GcdsTopNav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  ${args.home ?
  `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink>
    `
  : null}
  <GcdsNavLink href="#">Installation</GcdsNavLink>
  <GcdsNavGroup  openTrigger="Contact" menuLabel="Contact">
    <GcdsNavLink href="#">Form</GcdsNavLink>
    <GcdsNavLink href="#">GitHub</GcdsNavLink>
    <GcdsNavLink href="#">Slack</GcdsNavLink>
  </GcdsNavGroup>
  <GcdsNavLink href="#">Foundations</GcdsNavLink>
  <GcdsNavLink href="#">Components</GcdsNavLink>
</GcdsTopNav>
`).replace(/\s\snull\n/g, '');
export const Default = Template.bind({});
Default.args = {
  label: 'Top navigation',
  alignment: 'right',
  home: '',
  lang: 'en'
};
