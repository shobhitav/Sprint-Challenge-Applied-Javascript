class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.leftButtonElement = document.querySelector(".left-button");
        this.rightButtonElement = document.querySelector(".right-button");
        this.imageElements = this.carouselElement.querySelectorAll("img");
        this.currentIndex = 0;
        this.imageElements[this.currentIndex].style.display = "block";
        this.leftButtonElement.addEventListener('click', () => this.handleLeftButtonClick());
        this.rightButtonElement.addEventListener('click', () => this.handleRightButtonClick());
    }

    handleLeftButtonClick() {
        //infinite loop
        this.currentIndex = this.currentIndex == 0 ? this.imageElements.length - 1 : this.currentIndex - 1;

        //stops on first image
        //if (this.currentIndex > 0) this.currentIndex = this.currentIndex - 1;

        for (let i = 0; i < this.imageElements.length; i++) {
            this.imageElements[i].style.display = "none"; 
        }
        this.imageElements[this.currentIndex].style.display = "block";         
    }

    handleRightButtonClick() {
        //infinite loop
        this.currentIndex = this.currentIndex == (this.imageElements.length - 1) ? 0 : this.currentIndex + 1;

        //stops on last image
        //if (this.currentIndex < (this.imageElements.length - 1)) this.currentIndex = this.currentIndex + 1;

        for (let i = 0; i < this.imageElements.length; i++) {
            this.imageElements[i].style.display = "none"; 
        }
        this.imageElements[this.currentIndex].style.display = "block";         
    }
}

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const carouselElement = document.querySelector(".carousel");
new Carousel(carouselElement);

