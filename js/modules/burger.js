const burger = {
  activeElementsList: [],
  lockElementsList: [],

  setBurgerElements: function () {
    this.activeElementsList = document.querySelectorAll(
      ".icon-menu, .menu__body, .header__menu"
    );
    this.lockElementsList = document.querySelectorAll("body, .page");
  },
  onClick: function () {
    for (const $el of burger.activeElementsList) {
      $el.classList.toggle("_active");
    }
    for (const $el of burger.lockElementsList) {
      $el.classList.toggle("lock");
    }
  },
};

export default burger;
