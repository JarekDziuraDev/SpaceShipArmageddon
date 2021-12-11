import { Spaceship } from "./SpaceShip.js";
import { UI } from "./UI.js";

class Game extends UI {
    #htmlElements = {
        spaceship: this.getElement(this.UISelector.spaceship),
    }
    #spaceship = new Spaceship(this.#htmlElements.spaceship);
    init() {
        this.#spaceship.init();
    }
    
}

window.onload = function() {
    const game = new Game();

    
    game.init();
}