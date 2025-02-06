---
title: Install for Angular
layout: 'layouts/base.njk'
eleventyNavigation:
  key: angularEN
  title: Angular
  locale: en
  parent: installationEN
  order: 4
  description: Use these instructions to install GCDS components if you're using Angular.
  thumbnail: /images/common/installation/banner-angular.svg
  alt: TO DO
  state: published
permalink: /en/installation/angular/
translationKey: 'angular'
date: 'git Last Modified'
---

# Install GC Design System for Angular

Use these instructions to install GCDS components if you're using Angular.

## Install with npm

Navigate to the root folder of your project and run:

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

Place the following code in the <code>app.module.ts</code> file of your app:

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

Place the following code in the <code>styles.scss</code> file of your app:

```js
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

{% include "partials/installation-next-steps.njk" %}
