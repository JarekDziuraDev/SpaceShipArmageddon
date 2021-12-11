export class Spaceship {


    #moveModifier = 5;
    #leftArrow = false;
    #rightArrow = false;
    constructor(element) {
        this.element = element;
    }

    init() {
        this.#setPosition();
        this.#setEventListeners();
        this.#controlLoop();
    }

    #setPosition() {
        this.element.style.bottom = '0px';
        this.element.style.left = `${
            window.innerWidth / 2 -
            this.#getPosition()
        }px`;
    }

    #getWidth() {
        return this.element.offsetWidth;
    }

    #getPosition() {
        return this.element.offsetLeft + this.element.offsetWidth / 2;
    }

    #setEventListeners() {
        window.addEventListener('keydown', ({keyCode}) => {
            switch(keyCode) {
                case 37: this.#leftArrow = true;
                    break;
                case 39: this.#rightArrow = true;
                    break;
            }
        })
        window.addEventListener('keyup', ({keyCode}) => {
            switch(keyCode) {
                case 37: this.#leftArrow = false;
                    break;
                case 39: this.#rightArrow = false;
                    break;
            }
        })
    }
    
    #controlLoop = () => {
        this.#whatKey();
        requestAnimationFrame(this.#controlLoop);
    }

    #whatKey() {
        if(this.#leftArrow && this.#getPosition() > this.#getWidth()) {
            this.element.style.left = `${parseInt(this.element.style.left, 10) - this.#moveModifier}px`;
        }

        if(this.#rightArrow && this.#getPosition() < window.innerWidth - this.#getWidth()) {
            this.element.style.left = `${parseInt(this.element.style.left, 10) + this.#moveModifier}px`;
        }
    }
    
}