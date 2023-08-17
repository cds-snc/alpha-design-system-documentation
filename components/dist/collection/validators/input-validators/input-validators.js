let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const requiredField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    "en": "Enter information to continue.",
    "fr": "Saisissez des renseignements pour continuer."
  }
};
export const requiredEmailField = {
  validate: (value) => (value != null && value.trim() != "") && (value.toLowerCase().match(emailPattern) ? true : false),
  errorMessage: {
    "en": "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.",
    "fr": "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca."
  }
};
export const requiredFileInput = {
  validate: (value) => value.length > 0,
  errorMessage: {
    "en": "You must upload a file to continue.",
    "fr": "Vous devez téléverser un fichier pour continuer."
  }
};
export const requiredSelectField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    "en": "Choose an option to continue.",
    "fr": "Choisissez une option pour continuer."
  }
};
