---
title: Install for NodeJS
layout: 'layouts/base.njk'
eleventyNavigation:
  key: nodejsEN
  title: NodeJS
  locale: en
  parent: installationEN
  order: 3
  description: Use these instructions to install GCDS components if you're using npm but are not using a specific framework.
  thumbnail: /images/common/installation/banner-nodejs.svg
  alt: TO DO
  state: published
permalink: /en/installation/nodejs/
translationKey: 'nodejs'
date: 'git Last Modified'
---

# Install GC Design System for NodeJS

Use these instructions to install GCDS components if you're using npm (node package manager) with no framework.

## Install with npm

Navigate to the root folder of your project and run:

```js
npm install @cdssnc/gcds-components
```

Place the following code in the <code>head</code> element of your site:

```html
<!-- Icons Font Awesome (to access icons, import Font Awesome) -->
<link rel="stylesheet" href="{{ links.fontAwesome }}" crossorigin="anonymous">

<!-- GC Design System -->
<link rel="stylesheet" href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css">
<script type="module" src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.js"></script>
```

{% include "partials/installation-next-steps.njk" %}
