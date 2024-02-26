import { langProp } from "../../../utils/storybook/component-properties";
export default {
    title: 'Components/Top navigation',
    argTypes: Object.assign(Object.assign({
        // Props
        label: {
            name: 'label',
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '-' },
            },
            type: {
                required: true,
            },
        }, alignment: {
            control: { type: 'select' },
            options: ['right', 'left', 'center'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'right' },
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
            },
        }
    }),
};
const Template = args => `
<!-- Web component code (Angular, Vue) -->
<gcds-top-nav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.home
    ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `
    : null}
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
</gcds-top-nav>

<!-- React code -->
<GcdsTopNav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.home
    ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> `
    : null}
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
  </GcdsNavGroup>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
</GcdsTopNav>
`.replace(/\s\snull\n/g, '');
const TemplatePlayground = args => `
<!-- Web component code (Angular, Vue) -->
<gcds-top-nav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.home
    ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `
    : null}
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
</gcds-top-nav>
`.replace(/\s\snull\n/g, '');
export const Default = Template.bind({});
Default.args = {
    label: 'Top navigation',
    alignment: 'right',
    home: 'Home nav link',
    lang: 'en',
};
export const Props = Template.bind({});
Props.args = {
    label: 'Top navigation',
    alignment: 'right',
    home: 'Home nav link',
    lang: 'en',
};
export const Home = Template.bind({});
Home.args = {
    label: 'Top navigation',
    alignment: 'right',
    home: 'Home nav link',
    lang: 'en',
};
export const Right = Template.bind({});
Right.args = {
    label: 'Top navigation',
    alignment: 'right',
    home: '',
    lang: 'en',
};
export const Center = Template.bind({});
Center.args = {
    label: 'Top navigation',
    alignment: 'center',
    home: '',
    lang: 'en',
};
export const Left = Template.bind({});
Left.args = {
    label: 'Top navigation',
    alignment: 'left',
    home: '',
    lang: 'en',
};
export const Playground = TemplatePlayground.bind({});
Playground.args = {
    label: 'Top navigation',
    alignment: 'right',
    home: 'Home nav link',
    lang: 'en',
};
//# sourceMappingURL=gcds-top-nav.stories.js.map
