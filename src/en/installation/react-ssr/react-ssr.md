---
title: Install for React SSR
layout: 'layouts/base.njk'
eleventyNavigation:
  key: reactSSREN
  title: React SSR
  locale: en
  parent: installationEN
  order: 2
  description: Use these instructions to install GCDS components if you're using React with SSR (e.g. NextJS).
  tag: Experimental
  thumbnail: /images/common/installation/banner-react.svg
  alt: TO DO
  state: published
permalink: /en/installation/react-ssr/
translationKey: 'reactSSR'
date: 'git Last Modified'
---

# Install GC Design System for React with SSR

Use these instructions to install GCDS components if you're using React with SSR.

## Install with npm

Navigate to the root folder of your project and run:

```js
npm install @cdssnc/gcds-components-react-ssr
```

To use custom components in a server-side environment, you will need to import this script in the root or main file of your project.

```js
import('@cdssnc/gcds-components-react-ssr/server');
```

To load the CSS required for GC Design System, import the following CSS file from the <code>@cdssnc/gcds-components-ssr</code> package.

```js
import '@cdssnc/gcds-components-react-ssr/gcds.css'
```

## Components

The React components from the <code>@cdssnc/gcds-components-ssr</code> package need to be used within React client components to allow the declarative shadow-dom to function.

To use the React SSR components, they should only be used within client components. At the moment, this package relies on client-only functions to render the DSD (Declarative Shadow DOM) version of the component. Use within function components only. The provided components use hooks which can only be used within function components.

### Example of using <code>gcds-input</code>

An example of using the <code>gcds-input</code> component in a React functional component.

```js
'use client';

import { GcdsInput } from '@cdssnc/gcds-components-react-ssr';
import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client';
import { FC } from 'react';

export const Input: FC = () => (
  <GcdsWrapper>
    <GcdsInput
      inputId="gcds-input"
      label="GC Design System input"
      name="gcds-input"
    ></GcdsInput>
  </GcdsWrapper>
);
```

### Using the <code>GcdsWrapper</code>

It is recommended to use the <code>GcdsWrapper</code> component in each React component that makes use of a GC Design System component as they are required to be client components. Using <code>GcdsWrapper</code> from the root of your project could remove some server features from your chosen framework as it requires client components.

## Polyfills

As Declarative Shadow Dom (DSD) is fairly new and is now supported by all major browsers, <gcds-link href="https://caniuse.com/declarative-shadow-dom" external>older versions may not support DSD</gcds-link>. We recommend also including a polyfill for DSD in your app such as <code>@webcomponents/template-shadowroot"</code>.

## Differences between this package and the react package

Use the React package if you are not using a framework that uses SSR like NextJS. The <code>@cdssnc/gcds-components-react-ssr</code> package was specifically designed to provide support for these frameworks and is still in an experimental or canary release. This package takes advantage of a patched version of <code>@stencil/core</code> and a <code>GcdsWrapper</code> component to render the web components server side.

## Troubleshooting

### Loader issues

If you are running into issues with the loader, you may need to add the following to your <code>next.config.js</code>.

```js
transpilePackages: ["@cdssnc/gcds-components-react-ssr", "@stencil/core"],
```

Thank you for your patience as we work and iterate on the product. If you encounter any issues, you can let the team know by creating an <gcds-link href="{{ links.githubCompsIssues }}" external>issue on Github</gcds-link>.
