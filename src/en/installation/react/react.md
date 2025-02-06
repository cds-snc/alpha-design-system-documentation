---
title: Install for React
layout: 'layouts/base.njk'
eleventyNavigation:
  key: reactEN
  title: React
  locale: en
  parent: installationEN
  order: 1
  description: Use these instructions to install GCDS components if you're using React.
  thumbnail: /images/common/installation/banner-react.svg
  alt: TO DO
  state: published
permalink: /en/installation/react/
translationKey: 'react'
date: 'git Last Modified'
---

# Install GC Design System for React

Use these instructions to install GCDS components if you're using React.

## Install with npm

Navigate to the root folder of your project and run:

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-react
```

Place the following code in the <code>index.js</code> file of your app:

```js
import '@cdssnc/gcds-components-react/gcds.css'
```

{% include "partials/installation-next-steps.njk" %}
