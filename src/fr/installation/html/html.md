---
title: Install for plain HTML (TRANSLATE)
layout: 'layouts/base.njk'
eleventyNavigation:
  key: htmlFR
  title: HTML (CDN)
  locale: fr
  parent: installationFR
  order: 0
  description: Use these instructions to install GCDS components if you're using HTML / no  framework. (TRANSLATE)
  thumbnail: /images/common/installation/banner-html.svg
  alt: TO DO
  state: published
permalink: /fr/installation/html/
translationKey: 'html'
date: 'git Last Modified'
script: "/scripts/get-latest-cdn-version.js"
---

# Install GC Design System for plain HTML (TRANSLATE)

Pour installer les composants SDGC sans infrastructure, suivez ces instructions.

## Ajoutez le code

Utilisez la version la plus récente de Système de design GC. La version <code><span id='cdn-latest-version'></span></code>, publiée le <time id='cdn-latest-version-date'></time>, est la plus récente. Les versions épinglées offrent stabilité et prévisibilité parce que le code ne changera pas de manière inattendue, ce qui peut être crucial pour maintenir la stabilité d'une application. Toutefois, il faut mettre à jour manuellement les liens CDN chaque fois qu'une version plus récente de Système de design GC est publiée.

Insérez le code suivant dans l'élément <code>head</code> de votre projet :

```html
<!-- Icons Font Awesome (pour avoir accès aux icônes, installer Font Awesome) -->
<link rel="stylesheet" href="{{ links.fontAwesome }}" crossorigin="anonymous">

<!-- GC Design System -->
<link rel="stylesheet" href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.css">
<script type="module" src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.esm.js"></script>
<script nomodule src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.js"></script>
```

<gcds-text size="small">Remarque : <code>script type="module"</code> nécessite un serveur pour le chargement. Pour le développement local, veuillez utiliser <code>script nomodule</code>.</gcds-text>

## Mises à jour automatiques grâce à <code>@latest</code>

Utilisez la version <code>@latest</code> de Système de design GC pour recevoir des mises à jour automatiques chaque fois qu'une nouvelle version est publiée. <strong>Bien que cette approche vous évite la mise à jour manuelle des liens CDN, elle court le risque d'introduire des modifications qui entraînent une rupture de compatibilité avec le code base à mesure que les nouvelles versions sont automatiquement appliquées</strong>.

{% include "partials/installation-next-steps.njk" %}
