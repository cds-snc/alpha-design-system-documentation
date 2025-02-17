---
title: S'impliquer
translationKey: getinvolved
layout: 'layouts/base.njk'
eleventyNavigation:
  key: getinvolvedFR
  title: S'impliquer
  locale: fr
  order: 3
  hideMain: true
templateEngineOverride: njk,md
---

# S'impliquer

Un système de design ne connaît jamais de fin. Nous nous engageons à construire avec les personnes qui utilisent nos produits. Voici nos travaux en cours et ceux qui s’en viennent.

Nous testons actuellement la version alpha de Système de design GC, ce qui correspond à la première version utilisable d’un produit. Nous faisons évoluer cette version en fonction des besoins courants au sein du GC et de ceux des gens que nous servons tous et toutes.

## Découvrez Système de design GC

<div class="d-grid lg:grid-cols-3 mb-400 gap-400">
  <gcds-card
    card-title="Recevez nos communications"
    href="{{ links.contact }}"
    description="Abonnez-vous à notre infolettre pour manquer aucune communication de Système de design GC concernant les mises à jour, les lancements ou encore les évènements spéciaux."
  ></gcds-card>
  <gcds-card
    card-title="Participez à une demo"
    href="{{ links.registerDemo }}"
    description="Assistez à une présentation du prototypage et du développement d’expériences Web à l’aide du système de design et participez à une séance de questions-réponses."
  ></gcds-card>
</div>

<hr/>

<gcds-heading tag="h2" margin-top="225">Contribuez à nos prochaines priorités</gcds-heading>

Vous pouvez contribuer à l’avenir de Système de design GC. Nous recherchons activement des contributions pour les éléments suivants.

<div>
  <ul class="mb-300">
    <li>**Des tableaux de données** pour organiser et afficher une grande quantité de données dans des rangées et des colonnes.</li>
    <li>**Des balises** pour étiqueter, catégoriser et organiser des éléments à l’aide de mots-clés descriptifs. </li>
  </ul>
</div>

Nous nous intéressons également aux problèmes concernant les interactions avec les utilisateurs et utilisatrice ou aux solutions qui peuvent s’appliquer aux différents services du GC.

Soumettez vos contributions à nos prochaines priorités directement dans GitHub, en créant <gcds-link href="{{ links.githubGetStarted }}" external>créant un compte</gcds-link>.

Fournissez l'un des éléments suivants pour chaque composant ou modèle de page :

- **Exemples de designs** : captures d'écran, prototypes, liens vers des services en ligne.
- **Résultats de recherche** : recherches préliminaires, exemples de cas d'utilisation ou tests d'utilisabilité.
- **Code** : code de prototype ou de production, ou implémentations du produit.

<gcds-button button-role="secondary" button-type="link" href="{{ links.githubCompsPriority }}" external>Contribuer sur GitHub</gcds-button>
<gcds-button button-role="secondary" button-type="link" href="{{ links.contact }}" external>Contactez-nous</gcds-button>

<hr/>

<gcds-heading tag="h2" margin-top="225">Autres nouveautés à venir</gcds-heading>

Voici ce que nous allons bientôt publier. Plus de renseignements sur notre <gcds-link href="{{ links.roadmap }}" >feuille de route</gcds-link>.

<div>
  <gcds-heading tag="h3" margin-bottom="0">Mise à jour à l'en-tête</gcds-heading>
  <ul class="mb-300">
    <li>Nous apportons des mises à jour au composant « En-tête » pour l’harmoniser avec l’en-tête général de Canada.ca.</li>
    <li><strong>Sortie prévue :</strong> automne 2024</li>
  </ul>
</div>

<div>
  <gcds-heading tag="h3" margin-bottom="0">Mise à jour au pied de page</gcds-heading>
  <ul class="mb-300">
    <li>Nous apportons des mises à jour au composant « Pied de page » pour l’harmoniser avec le pied de page général de Canada.ca.</li>
    <li><strong>Sortie prévue :</strong> automne 2024</li>
  </ul>
</div>

<div>
  <gcds-heading tag="h4" margin-bottom="0">Mise à jour au bouton</gcds-heading>
  <ul class="mb-300">
    <li>Nous apportons des modifications au composant « Bouton » afin d’ajouter un nouveau rôle et une nouvelle taille de bouton. </li>
    <li><strong>Sortie prévue :</strong> automne 2024</li>
  </ul>
</div>

{% include "partials/givefeedback.njk" %}
