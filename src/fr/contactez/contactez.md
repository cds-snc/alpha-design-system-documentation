---
title: Contactez-nous
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusFR
  title: Contactez-nous
  locale: fr
  order: 3
  hideMain: false
translationKey: 'contactus'
contactForm: fr
date: 'git Last Modified'
---

# Contacter Système de design GC

## Formulaire de soutien GitHub

Avec votre compte GitHub, utilisez notre <gcds-link external href="{{ links.githubCompsIssues }}">formulaire de soutien</gcds-link> pour signaler des bogues et obtenir un soutien technique. Vous aurez accès aux problèmes (issues) passés et verrez les progrès accomplis.

<hr class="my-600" />

## Envoyer des commentaires, demander de l’aide ou s’inscrire

Nous soutenons les fonctionnaires qui utilisent le Système de design GC. Nous ne sommes pas en mesure de répondre aux questions provenant des membres du public.

Utilisez ce formulaire pour fournir de la rétroaction, pour poser des questions, pour obtenir de l’aide avec le Système de design GC, pour vous inscrire à notre infolettre et pour demander une démo.

Pour toute autre demande, allez à la page [Coordonnées du Gouvernement du Canada](https://www.canada.ca/fr/contact.html) pour trouver le ministère ou l'organisme qui peut vous aider.

<form class="my-600 contact-us-form" name="contactFR" method="post" style="min-height: 32rem;" action="/api/submission">
  <input type="hidden" name="form-name" value="contactFR" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

<gcds-input type="text" name="name" input-id="name" label="Nom complet" size="30" autocomplete="name" required></gcds-input>
<gcds-input type="email" name="email" input-id="email" label="Adresse courriel" size="50" autocomplete="email" required></gcds-input>
<gcds-textarea name="message" label="Fournissez vos commentaires ou posez une question si vous avez besoin d’aide" textarea-id="message" hint="Veuillez ne pas inclure de renseignement protégé ou personnel."></gcds-textarea>

  <gcds-fieldset fieldset-id="learnMore" legend="Apprenez-en plus sur Système de design GC" hint="Choisissez autant d'options que vous le souhaitez.">
    <gcds-checkbox checkbox-id="learnMoreMailingList" label="Ajoutez-moi à votre liste d'envoi." value="learn-more-mailing-list" name="learn-more-mailing-list"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreDemo" label="Contactez-moi pour une démo." value="learn-more-demo" name="learn-more-demo"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreResearch" label="Contactez-moi pour les études sur l'utilisabilité." value="learn-more-research" name="learn-more-research"></gcds-checkbox>
  </gcds-fieldset>

  <gcds-fieldset fieldset-id="familiarityGCDS" legend="Indiquez votre expérience avec Système de design GC" hint="Sélectionnez 1 option." required>
    <gcds-radio-group name="familiarityGCDS" options='{{ contactus[locale].options | stringify | encode-html }}'>
    </gcds-radio-group>
  </gcds-fieldset>

  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>

  <gcds-button button-role="primary" type="submit">
    Envoyer
  </gcds-button>
</form>
