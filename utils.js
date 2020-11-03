/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(src) {
        this.sound = new Audio(src)
    }

    playSound = () => {
        this.sound.currentTime = 0;
        this.sound.play()
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode) {
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(this.keyCode);
        this.setButtonColorInHTML();
        this.setTransitionEnd();
    }

    setTransitionEnd = () => {
        this.element.addEventListener('transitionend', ()=> {
            this.deselect();
        })
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0 0 17px 0 ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        document.getElementById(this.keyCode).style.backgroundColor = "transparent";
        this.element.style.boxShadow = 'none';
    }
}