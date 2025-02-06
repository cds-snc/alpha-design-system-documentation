---
title: Install for React (TRANSLATE)
layout: 'layouts/base.njk'
eleventyNavigation:
  key: reactFR
  title: React
  locale: fr
  parent: installationFR
  order: 1
  description: Use these instructions to install GCDS components if you're using React. (TRANSLATE)
  thumbnail: /images/common/installation/banner-react.svg
  alt: TO DO
  state: published
permalink: /fr/installation/react/
translationKey: 'react'
date: 'git Last Modified'
---

# Install GC Design System for React (TRANSLATE)

Si vous utilisez React, suivez ces instructions pour installer les composants SDGC.

## Installation à l'aide de npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-react
```

Insérez le code suivant dans le fichier <code>index.js</code> de votre application :

```js
import '@cdssnc/gcds-components-react/gcds.css'
```

{% include "partials/installation-next-steps.njk" %}
