---
title: Contact us
layout: 'layouts/base.njk'
eleventyNavigation:
  key: contactusEN
  title: Contact us
  locale: en
  order: 3
  hideMain: false
translationKey: 'contactus'
contactForm: en
date: 'git Last Modified'
---

# Contact GC Design System

## Support form on GitHub

With an account, use our <gcds-link external href="{{ links.githubCompsIssues }}">GitHub support form</gcds-link> to report bugs and get technical help. You’ll have access to past issues and updates on progress.

<hr class="my-600" />

## Give feedback, request support, or sign up

We support government employees using GC Design System. We cannot answer questions from members of the public.

Use this form to provide feedback or ask questions, get help using GC Design System, or sign up for our mailing list or demo.

For other enquiries, go to the [Government of Canada contacts page](https://www.canada.ca/en/contact.html) to find the department or agency that can help.

<form class="my-600 contact-us-form" name="contactEN" method="post" style="min-height: 32rem;" action="/api/submission">
  <input type="hidden" name="form-name" value="contactEN" />
  <input name="honeypot" type="text" aria-label="bot" hidden/>

<gcds-input type="text" name="name" input-id="name" label="Full name" size="30" autocomplete="name" required></gcds-input>
<gcds-input type="email" name="email" input-id="email" label="Email address" size="50" autocomplete="email" required></gcds-input>
<gcds-textarea name="message" label="Provide your feedback or ask a question if you need help" textarea-id="message" hint="Do not include protected or personal information."></gcds-textarea>

  <gcds-fieldset fieldset-id="learnMore" legend="Learn more about GC Design System" hint="Choose as many options as you'd like.">
    <gcds-checkbox checkbox-id="learnMoreMailingList" label="Sign me up for the mailing list." value="learn-more-mailing-list" name="learn-more-mailing-list"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreDemo" label="Contact me for a demo." value="learn-more-demo" name="learn-more-demo"></gcds-checkbox>
    <gcds-checkbox checkbox-id="learnMoreResearch" label="Contact me for usability research." value="learn-more-mailing-list" name="learn-more-research"></gcds-checkbox>
  </gcds-fieldset>

  <gcds-fieldset fieldset-id="familiarityGCDS" legend="Select your experience with GC Design System to date " hint="Choose 1 option." required>
    <gcds-radio-group name="familiarityGCDS" options='{{ contactus[locale].options | stringify | encode-html}}'>
    </gcds-radio-group>
  </gcds-fieldset>

  <div hidden>
    <gcds-input type="text" name="bot-field" input-id="bot-field" label="bot"></gcds-input>
  </div>

  <gcds-button button-role="primary" type="submit">
    Submit
  </gcds-button>
</form>
