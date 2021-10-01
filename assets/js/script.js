class audioController {
    constructor() {
        this.flipSound = new Audio('assets/audio/84322__splashdust__flipcard.wav');
        this.matchSound = new Audio('assets/audio/362445__tuudurt__positive-response');
        this.victorySound = new Audio('assets/audio/456966__funwithsound__success-fanfare-trumpets');
        this.gameOverSound = new Audio('assets/audio/159408__noirenex__life-lost-game-over');
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.flipSound.play();
    }
    victory() {
        this.victorySound.play();
    }
    gameOver() {
        this.gameOverSound.play();
    }
}

$(document).ready(function() {
    $("#color-shaker").click(function() {
        // Credit: Random-color-function from AndreFelipeCL, found at "https://stackoverflow.com/questions/20553036/random-color-in-jquery"
        $(".game-card").each(function(index) {
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
        });
        $("body").each(function() {
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
        });

    });

    // Credit: PortEXE, How To Code A Card Game In Plain JavaScript - Spooky Halloween Edition, 
    //YouTube (https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=2044s)

    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('game-card')); //"card" in youtube-tutorial

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            //game.startGame()
        });
        cards.forEach(card => { //card or game-card?
            card.addEventListener('click', () => {
                //game.flipCard(card);
            })
        })
    });





    // Card options
    const cardArray = [
        '6 + 3', '9',
        '20 - 5', '15',
        '15 + 6', '21',
        '27 - 9', '18',
        '13 + 5', '18',
        '33 - 6', '27'
    ]
});