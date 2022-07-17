import { model } from "./model.js";

export const controller = {
  onClickHandler: function (eventObj) {
    model.changeLanguage(eventObj.target);
  },
};
