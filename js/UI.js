export class UI {
    UISelector = {
        spaceship: '[data-spaceship]',
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    getElements(selector) {
        return document.querySelectorAll(selector);
    }
}