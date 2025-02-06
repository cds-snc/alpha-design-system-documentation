---
title: Install for Vue
layout: 'layouts/base.njk'
eleventyNavigation:
  key: vueEN
  title: Vue
  locale: en
  parent: installationEN
  order: 5
  description: Use these instructions to install GCDS components if you're using Vue.
  thumbnail: /images/common/installation/banner-vue.svg
  alt: TO DO
  state: published
permalink: /en/installation/vue/
translationKey: 'vue'
date: 'git Last Modified'
---

# Install GC Design System for Vue

Use these instructions to install GCDS components if you're using Vue.

## Install with npm

Navigate to the root folder of your project and run:

```js
npm install @cdssnc/gcds-components-vue
```

In your <code>main.js</code> file, import the GC Design System components plugin and use it:

```js
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

Add the global styles to your app. There are multiple ways to achieve this. You can import it in your <code>main.js</code> file next to your <code>style.css</code>:

```js
import '@cdssnc/gcds-components-vue/gcds.css';
import './style.css';
```

or in your <code>App.vue</code> using the html style tag.

```html
<style src='@cdssnc/gcds-components-vue/gcds.css'>
/* global styles */
</style>
```

{% include "partials/installation-next-steps.njk" %}
