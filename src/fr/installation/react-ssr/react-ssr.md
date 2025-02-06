---
title: Install for React SSR (TRANSLATE)
layout: 'layouts/base.njk'
eleventyNavigation:
  key: reactSSRFR
  title: React SSR
  locale: fr
  parent: installationFR
  order: 2
  description: Use these instructions to install GCDS components if you're using React with SSR (e.g. NextJS). (TRANSLATE)
  tag: À l'essai
  thumbnail: /images/common/installation/banner-react.svg
  alt: TO DO
  state: published
permalink: /fr/installation/react-ssr/
translationKey: 'reactSSR'
date: 'git Last Modified'
---

# Install GC Design System for React with SSR (TRANSLATE)

Use these instructions to install GCDS components if you're using React with SSR. (TRANSLATE)

## Installation à l'aide de npm

Naviguez jusqu'au dossier racine de votre projet et exécutez :

```js
npm install @cdssnc/gcds-components-react-ssr
```

Pour utiliser des composants personnalisés dans un environnement côté serveur, vous devez importer le script suivant dans le fichier racine ou principal de votre projet.

```js
import('@cdssnc/gcds-components-react-ssr/server');
```

Pour charger le CSS requis pour Système de design GC, importez le fichier CSS suivant à partir du paquet <code>@cdssnc/gcds-components-ssr</code>.

```js
import '@cdssnc/gcds-components-react-ssr/gcds.css'
```

## Composants

Les composants React du paquet <code>@cdssnc/gcds-components-ssr</code> doivent être utilisés dans les composants client de React pour permettre au DOM fantôme déclaratif de fonctionner.

Pour utiliser les composants React côté serveur, vous devez : Les utiliser uniquement dans des composants client. À l'heure actuelle, ce paquet utilise des fonctions réservées au côté client pour faciliter le rendu de la version DOM fantôme déclaratif (DSD) du composant. Les utiliser uniquement dans des composants fonctionnels. Les composants fournis utilisent des Hooks qui ne peuvent être utilisés qu'à l'intérieur de composants fonctionnels.

### Exemple avec <code>gcds-input</code>

Exemple d'utilisation du composant <code>gcds-input</code> dans un composant fonctionnel React.

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

### Utilisation du <code>GcdsWrapper</code>

Il est recommandé d'utiliser le composant <code>GcdsWrapper</code> dans chaque composant React qui utilise un composant de Système de design GC, car ils doivent être des composants client. L'utilisation de <code>GcdsWrapper</code> à partir de la racine de votre projet pourrait supprimer certaines fonctionnalités serveur de l'infrastructure que vous avez choisie, car il nécessite des composants client.

## Polyfills

Comme le DOM fantôme déclaratif (DSD) est relativement nouveau, il est maintenant compatible avec la plupart des navigateurs principaux, mais <gcds-link href="https://caniuse.com/declarative-shadow-dom" external>certaines versions plus anciennes de navigateur pourraient ne pas l'être</gcds-link>. Nous vous recommandons d'inclure un polyfill pour DSD dans votre application, par exemple <code>@webcomponents/template-shadowroot"</code>.

## Différences entre ce paquet et le paquet React

Utilisez le paquet React si vous n'utilisez pas une infrastructure permettant le rendu côté serveur comme NextJS. Le paquet <code>@cdssnc/gcds-components-react-ssr</code> a été spécialement conçu pour prendre en charge ce type d'infrastructure et est toujours dans une version expérimentale ou canari. Il tire parti d'une version corrigée de <code>@stencil/core</code> et d'un composant <code>GcdsWrapper</code> pour restituer les composants Web côté serveur.

## Dépannage

### Problèmes liés au chargeur

Si vous avez des problèmes avec le chargeur, vous devrez peut-être ajouter ce qui suit à votre <code>next.config.js</code>.

```js
transpilePackages: ["@cdssnc/gcds-components-react-ssr", "@stencil/core"],
```

Merci de votre patience pendant que nous apportons des améliorations au produit. Si vous rencontrez des problèmes, vous pouvez en informer l'équipe en créant <gcds-link href="{{ links.githubCompsIssues }}" external>un ticket sur Github</gcds-link>.
