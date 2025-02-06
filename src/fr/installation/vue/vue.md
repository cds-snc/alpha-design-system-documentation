---
title: Install for Vue (TRANSLATE)
layout: 'layouts/base.njk'
eleventyNavigation:
  key: vueFR
  title: Vue
  locale: fr
  parent: installationFR
  order: 5
  description: Use these instructions to install GCDS components if you're using Vue. (TRANSLATE)
  thumbnail: /images/common/installation/banner-vue.svg
  alt: TO DO
  state: published
permalink: /fr/installation/vue/
translationKey: 'vue'
date: 'git Last Modified'
---

# Install GC Design System for Vue (TRANSLATE)

Si vous utilisez Vue, suivez ces instructions pour installer les composants SDGC.

## Installation à l'aide de npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

```js
npm install @cdssnc/gcds-components-vue
```

Dans votre fichier <code>main.js</code>, importez le plugiciel des composants Système de design GC et utilisez-le de la façon suivante :

```js
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

Ajoutez les styles généraux à votre application. Vous pouvez les ajouter de plusieurs façons. Vous pouvez soit les importer dans votre fichier <code>main.js</code> à côté de votre <code>style.css</code> :

```js
import '@cdssnc/gcds-components-vue/gcds.css';
import './style.css';
```

ou les insérer dans votre <code>App.vue</code> à l'aide de la balise de style html.

```html
<style src='@cdssnc/gcds-components-vue/gcds.css'>
/* global styles */
</style>
```

{% include "partials/installation-next-steps.njk" %}
