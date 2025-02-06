---
title: Install for NodeJS (TRANSLATE)
layout: 'layouts/base.njk'
eleventyNavigation:
  key: nodejsFR
  title: NodeJS
  locale: fr
  parent: installationFR
  order: 3
  description: Use these instructions to install GCDS components if you're using npm but are not using a specific framework. (TRANSLATE)
  thumbnail: /images/common/installation/banner-nodejs.svg
  alt: TO DO
  state: published
permalink: /fr/installation/nodejs/
translationKey: 'nodejs'
date: 'git Last Modified'
---

# Install GC Design System for NodeJS (TRANSLATE)

Si vous utilisez npm (node package manager) sans infrastructure, suivez ces instructions pour installer les composants SDGC.

## Installation à l'aide de npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

```js
npm install @cdssnc/gcds-components
```

Insérez le code suivant dans l'élément <code>head</code> de votre site :

```html
<!-- Icons Font Awesome (pour avoir accès aux icônes, installer Font Awesome) -->
<link rel="stylesheet" href="{{ links.fontAwesome }}" crossorigin="anonymous">

<!-- GC Design System -->
<link rel="stylesheet" href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css">
<script type="module" src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.js"></script>
```

{% include "partials/installation-next-steps.njk" %}
