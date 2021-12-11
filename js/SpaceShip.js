export class Spaceship {

    constructor(element) {
        this.element = element;
    }

    init() {
        this.#setPosition();
    }

    #setPosition() {
        this.element.style.bottom = '0px';
        this.element.style.left = `${
            window.innerWidth / 2 -
            this.element.offsetLeft -
            this.element.offsetWidth / 2
        }px`;
    }

    
}