class audioController {
    constructor() {
        this.flipSound = new Audio('assets/audio/84322__splashdust__flipcard.wav');
        this.matchSound = new Audio('assets/audio/362445__tuudurt__positive-response.wav');
        this.victorySound = new Audio('assets/audio/456966__funwithsound__success-fanfare-trumpets.mp3');
        this.gameOverSound = new Audio('assets/audio/159408__noirenex__life-lost-game-over.wav');
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

class mixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timer');
        this.ticker = document.getElementById('current-score');
        this.audioController = new audioController();
    }

    startGame() {
        this.cardToCheck = null;
        this.currentScore = 100;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.currentScore;
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        })
    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            setTimeout(() => {
                this.currentScore--;
                this.ticker.innerText = this.currentScore;
                // Add 'visible'-class to show card-content
                card.classList.add('visible');
            }, 300);
            //if statement (check for match)
            if (this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }

    //This must be 'check math-match' instead of string-match
    checkForCardMatch(card) {
        if (this.getCardContent(card) == this.getCardContent(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        this.currentScore++;
        if (this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }

    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);

    }

    getCardContent(card) {
        // return card.getElementsByClassName('card-value')[0].src;
        return this.innerText;
    }

    // Should not start until first card-click
    startCountDown() {
        return setInterval(() => {
            // Count down by 1 (--) every sec (1000)
            this.timeRemaining--;
            // Update timer
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }

    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }

    victory() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }

    shuffleCards() {
        // Fisher-Yates algorithm for shuffeling https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        // Used for when the cards (images) are static and just moves around. Not what I intend to do.
        // But may be useful in randomly assigning tihe equations to each card.
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            // The following regards changing order of css-grid. Not applicable for me.
            // The randomIndex should be applied to the cards.
            //this.cardsArray[randomIndex].style.order = i;
            //this.cardsArray[i].style.order = randomIndex;
        }
    }
    canFlipCard(card) {
        // If all instances that makes the card unflippable are false, then...
        return !this.busy && !this.matchedCards.includes(card) && !this.cardToCheck
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
    // In Halloween-tutorial cards have fixed class-values that are never changed (just shuffeled)
    let cards = Array.from(document.getElementsByClassName('game-card')); //"card" in youtube-tutorial
    let game = new mixOrMatch(10, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
        cards.forEach(card => { //card or game-card?
            card.addEventListener('click', () => {
                game.flipCard(card);
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