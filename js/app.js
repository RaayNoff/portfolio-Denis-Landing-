import * as functions from "./modules/functions.js";
import { model } from "./modules/MVC/model.js";
import { controller } from "./modules/MVC/controller.js";
import burger from "./modules/burger.js";

functions.isWebp();

window.onload = () => {
  model.getTranslationResponse();
  model.setTranslatableElements();
  burger.setBurgerElements();

  const btnsParents = document.querySelectorAll(".page__lang");
  for (const $el of btnsParents) {
    $el.addEventListener("click", controller.onClickHandler);
  }

  const iconMenu = document.querySelector(".icon-menu");
  iconMenu.addEventListener("click", burger.onClick);
};
