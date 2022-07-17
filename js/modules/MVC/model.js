import { view } from "./view.js";

export const model = {
  selectedLanguage: "ENG",
  ruClassName: "lang__ru",
  engClassName: "lang__eng",
  selectedLanguageClassName: "selected__language",
  requestURL: `${document.location.protocol}//${document.location.host}${document.location.pathname}files/translation.json`,
  translation: new Object(),
  translatableElements: new Array(),

  getLanguage: function () {
    return this.selectedLanguage;
  },
  setLanguage: function (language) {
    this.selectedLanguage = language;
  },

  changeLanguage: function (eventTarget) {
    if (eventTarget === null) throw new Error("Target event is null");
    if (!eventTarget.hasAttribute("href")) return;

    let btnsToUnmark;
    let btnsToMark;

    const eventTargetClasses = eventTarget.classList.toString();

    if (eventTargetClasses.includes(this.engClassName)) {
      this.setLanguage("ENG");
      btnsToMark = document.querySelectorAll(`.${this.engClassName}`);
      btnsToUnmark = document.querySelectorAll(`.${this.ruClassName}`);
    } else if (eventTargetClasses.includes(this.ruClassName)) {
      this.setLanguage("RU");
      btnsToMark = document.querySelectorAll(`.${this.ruClassName}`);
      btnsToUnmark = document.querySelectorAll(`.${this.engClassName}`);
    }

    view.displayLangChanges(btnsToMark, btnsToUnmark);
    view.displayTranslation(this.translatableElements);
  },
  findTranslation: function (elementId) {
    return this.translation[this.getLanguage()][elementId];
  },
  getTranslationResponse: async function () {
    const response = await fetch(this.requestURL);
    this.translation = await response.json();
  },
  setTranslatableElements: function () {
    this.translatableElements = document.querySelectorAll(".lng-element");
  },
};
