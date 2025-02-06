---
title: Install for plain HTML
layout: 'layouts/base.njk'
eleventyNavigation:
  key: htmlEN
  title: HTML (CDN)
  locale: en
  parent: installationEN
  order: 0
  description: Use these instructions to install GCDS components if you're using HTML / no  framework.
  thumbnail: /images/common/installation/banner-html.svg
  alt: TO DO
  state: published
permalink: /en/installation/html/
translationKey: 'html'
date: 'git Last Modified'
script: "/scripts/get-latest-cdn-version.js"
---

# Install GC Design System for plain HTML

Use these instructions to install GCDS components with no framework.

## Add the code

Use the latest version of GC Design System. Version <code><span id='cdn-latest-version'></span></code>, released on <time id='cdn-latest-version-date'></time>, is the most recent. Pinned versions provide stability and predictability because the code will remain consistent and won't change unexpectedly, which can be crucial for maintaining the stability of an application. However, it requires manual updating of the CDN links whenever a newer version of GC Design System is released.

Place the following code in the <code>head</code> element of your project:

```html
<!-- Icons Font Awesome (to access icons, import Font Awesome) -->
<link rel="stylesheet" href="{{ links.fontAwesome }}" crossorigin="anonymous">

<!-- GC Design System -->
<link rel="stylesheet" href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.css">
<script type="module" src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.esm.js"></script>
<script nomodule src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.js"></script>
```

<gcds-text size="small">Note: <code>script type="module"</code> requires a server to load properly. If developing locally, please use <code>script nomodule</code>.</gcds-text>

## Automatic updates using <code>@latest</code>

Use the <code>@latest</code> version of GC Design System to receive automatic updates whenever a new version is released. **While it removes the need to manually update the CDN links, it adds the risk of introducing breaking changes to the codebase as new versions are automatically applied**.

{% include "partials/installation-next-steps.njk" %}
