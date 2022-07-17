import { model } from "./model.js";

export const view = {
  displayLangChanges: function (btnsToMark, btnsToUnmark) {
    this.markLanguage(btnsToMark);
    this.unmarkLanguage(btnsToUnmark);
  },
  markLanguage: function (elementsList) {
    for (const $el of elementsList) {
      $el.classList.add(model.selectedLanguageClassName);
    }
  },
  unmarkLanguage: function (elementsList) {
    for (const $el of elementsList) {
      $el.classList.remove(model.selectedLanguageClassName);
    }
  },
  displayTranslation: function (elementsList) {
    for (const $el of elementsList) {
      $el.innerHTML = model.findTranslation($el.id);
    }
  },
};
