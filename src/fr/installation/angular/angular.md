---
title: Install for Angular (TRANSLATE)
layout: 'layouts/base.njk'
eleventyNavigation:
  key: angularFR
  title: Angular
  locale: fr
  parent: installationFR
  order: 4
  description: Use these instructions to install GCDS components if you're using Angular. (TRANSLATE)
  thumbnail: /images/common/installation/banner-angular.svg
  alt: TO DO
  state: published
permalink: /fr/installation/angular/
translationKey: 'angular'
date: 'git Last Modified'
---

# Install GC Design System for Angular (TRANSLATE)

Si vous utilisez Angular, suivez ces instructions pour installer les composants SDGC.

## Installation à l'aide de npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

Insérez le code suivant dans le fichier <code>app.module.ts</code> de votre application :

```js
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    GcdsComponentsModule
  ],
  providers: [],
  bootstrap: [...]
})

export class AppModule { }
```

Insérez le code suivant dans le fichier <code>styles.scss</code> de votre application :

```js
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

{% include "partials/installation-next-steps.njk" %}
