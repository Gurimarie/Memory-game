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


    $("#new-game").click(function() {
            //reset timer to default
            //reset score to default
            //Run update highest score
        }


        $(".game-card").click(function() {}
            //if first click - wait.
            //if second click - openCards-function.



            function openCards() {}

            //if first time/no other cards have been opened this game;
            //run assignValuesToCards-function
            //Open cards, how???
            //start timer.

            //else //Open cards, how???

            //deduct 10 pionts from score,           
            //run checkAnswer-function.

            function checkAnswer() {}
            //do equation on both cards
            //if (resultA === resultB)
            //run function correctAnswer

            //else 
            //close cards (after certain amount of time, not long. 2 sec?)


            function assignValuesToCards() {}

            function correctAnswer() {
                //add 20 points to scrollBehavior 
                //make small, happy-noise

            }

            function update highest score() {
                //if (lastScore > highestScore)
                //update score with lastScore.

            }



        })
});