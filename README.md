# MEMORY-GAME
## Match six equations with their answers, in under 1 minute

This is the website for a game where 12 cards, and each card is randomly assigned one of a pair of random equations and their respective answers. By opening two cards at a time, the user will for each game try to locate 6 equations and the answer that is correct for each equation. For example, if one card has the equation 5 x 5, the corresponding answer-card will have the value of 25. The two cards must be opened together, in order to count as a match. The user opens two and two cards, trying to find and open the correct pairs.

To adde to the games difficulty, there is a timelimit of 1 minute to find and open all the pairs, and there is also a limit regarding how many cards you may open without finding a pair (see user-instructions by clicking on the questionmark-button in the top right of the website.) 


![Picture of different view-port-displays]()

Click here to view the website

## User Experience (UX)

### User stories:

### First time visitor goals
.....

### Returning visitor goals
.....

### Frequent user goals
Log in to keep track of past scores, and chosen color-scheme.

.....

### Site owner goals
That people enjoy playing, and 
.........



## Design

### Colour scheme:
The colour-scheme is randomized, so that the user may choose a setting that pleases them or that fits their mood when playing. The colours are picked at random from all the possible colours in the RGB-system, and the user may press the button as may times as they wish, until a pleasing colour emerges. Or they may stay with the default blu-tones that are there when the website is loaded or refreshed.  


### Typography:
The font Permanent Marker has a juvenile and almost grafitti-like aspect to it, and it is well suited for the colourful and sometimes psychedelic colour-combinations that form when we use the random-colour-button. It also seems to have a fast and "in motion"-feeling, that works well with the speed needed to complete the tast at hand in less that 1 minute. 

![Picture of fonts samples](assets/images/readme-images/Fonts-permanent-parker-and-montserrat.JPG)

### Imagery:

Currently there are no images added to the game, only colours.


## Wireframes

![Picture of wireframe, new game (start)](assets/images/readme-images/Wireframe-new-game.JPG)

![Picture of wireframe, first match found](assets/images/readme-images/Wireframe-first-match.JPG)



## Features

- ### Random colours
Press the painters-button to add new colours randomly to all the "game-cards" and to the background-color of the website. Keep clicking, until you find a combination you like! :)
![Picture of button for random colours](assets/images/readme-images/random-color-button.JPG)

- ### Instructions
Instructions for how to play are added in a modal, in order to keep the webpage itself clean and less distractive (than it would have been with instructions).



#### Future features:
- A game that is fully functional and that works.
- Option to play as guest, or to log in with user, to keep track of scores, see other users best scores, and keep chosen colour-schemes.
- A timer that counts down as you solve the tasks, and when the counter reaches 0, its game over.
- A beeper that makes a noise every second for the last 10 seconds of each game (with option to turn sound off).
- Happy-sound when a good match is made.
- Possibility to choose between several different game-question-types. Different math-questions matching questions with correct answer (either addition, subtraction, miltiplication or divison), mathing chemical formulas with correct name, matching two parts of a famous quote, and much more.



## Issues overcome

### Instructions for playing
Instructions for playing the game have been added as a modal, overlaying the whole page. This option has been chosen, in order to be able to explain the game, without having a lot of tekst on the page. The modal is triggered by clicking the question-mark-button on the top right.

### Media-query
Added a media-query to to scale main headline (h1) well beth for smaller and larger devicer. 

### Several right answers
What if two equations on the board have same answer? The check-answer must do the calculation, and not just look for pairs, otherwise a right answer may be rejected because it is not the right pair.



## Technology used
### Programming languages:
- HTML
- CSS
- Bootstrap
- jQuery

### Frameworks, libraries and programs:
- Bootstrap
- Google Fonts
- Font-awsome



## Testing

### Validation:
#### HTML validation
Html-content checked with https://validator.w3.org/nu/#textarea

![Picture of HTML verification](assets/images/readme-images/html-validator.JPG)

#### CSS validation
CSS tested with W3C CSS Validator Service. 
After having corrected a few small errors, everything is as it should be.

![Picture of CSS verification](assets/images/readme-images/css-validator.JPG)

JS validation


### Testing for user stories in UX-section:

### Further testing:
#### Test on different screen sizes:
Expected: X when Y
Testing: do Y
Result: The site did not respond due to ..."A" or: the site acted as expected and did X
Fix: Did Z to the code because of problem..."A"

#### Test on different browsers:
Expected: X when Y
Testing: do Y
Result: The site did not respond due to ..."A" or: the site acted as expected and did X
Fix: Did Z to the code because of problem..."A"

<br>

## Fixed bugs:
### Problems with alignment in game-area:
There was a problem with the horisontal alignment of the game-cards in the game-area, they were not in center.

![Picture of alignment-issue](assets/images/readme-images/alignment-issue-game-area.JPG)

I added classes container-fluid to full-page-divs, and container to game-area-div, and took away margins. This made the alignment somewhat better on large viewports, and much better on mobile and medium devices, but still not centered.

I fixed the horizontal alignment-issue on larger screens by using bootstrap-rows and columns on my game-card-divs, but though this layout worked fine on larger screens, it was still not good on smaller screens. 

Therefore I decided to start in the other direction, and make 3 columns in smaller devices, and add the fourth column in on medium and larger devices, using “d-none”-class on the ones that should not be seen in small devices. This works fine on mobile, but not perfect yet on larger screens (the last column is smaller).

![Picture of alignment-issue](assets/images/readme-images/alignment-issue-game-area-fourth-row-smaller.JPG)

The issue was finally solved with class="col-3 col-lg-2” for the three first boxes in each row, and class="d-none d-lg-block” for the fourth box.

![Picture of alignment-issue fixed](assets/images/readme-images/alignment-issue-game-area-fixed.JPG)


### Problem with colour-picker
The random colour-button stopped working for a while, but it turned out to be because of empty functions in script.js that I had made as I planned the structure of how the finished JavaScript would be. One extra, open parentheses stopped the file from working. 



## Unfixed bugs:
### Website height
The website is supposed to be the height of the viewport, with no need for scrolling, but I have difficulty managing that while keeping nav and footer fixed at top and bottom. As it is there is a little scroll available, but it is not necessary to scroll the page to see it all, so it does not seem to hinder the game. I have been tinckering with this a bit, and it seems to work now on most devices, but I am not certain it is truly gone.

### The game itself is not set up yet, only planned
It will take a bit of research to figure out how to randomly assign pairs of random equations and their respective answers to the "game-cards", 




## Deployment
This project was developed using Visual Studio Code, committed to git and pushed to GitHub using git-extensions in Visual Studio Code.

### Steps to deploy this page to GitHub Pages from GitHub repository:
1. Log into GitHub.
2. Find the project "Memory-game" from the list of repositories and open it.
3. Go to the “Settings”-option.
4. Scroll down to the section called “Pages” in the menu on the left side, and click it to open the Github-pages page.
5. Under "Source", select the correct branch (in this case, “main”), and click on the Save-button.

6. The page will refresh, and the message on top says:
“Your site is ready to be published at: https://gurimarie....love-maths/.”
Use this link to access the deployed website.


### Making a local clone:
1. Follow this link to the [projects Github repository](https://github.com/Gurimarie/Memory-game)).
2. Under the repository name, click the green "Code"-button, and choose "https" and click on the "Download Zip"-option.
3. When the zip is downloaded, open the folder, and move the unzipped folder to where you wish to store it on your computer.
4. Open your Visual Studio Code (or other programming-software), click File, Open Folder, and choose the unzipped folder you just downloaded from where you saved it to.
 
### Forking the GitHub repository:
1. Log into GitHub.
2. Find the project "Memory-game" from the list of repositories and open it.
3.	In the top-right corner of the page, click Fork.
![Picture of the fork-button](assets/images/readme-images/fork-repository.JPG)
4. Then navigate to your fork of the Memory-game"repository, and download it by clicking on the "Code"-button like in the instruction for making a local clone, above. Choose "https" and click on the "Download Zip"-option.
3. When the zip is downloaded, open the folder, and move the unzipped folder to where you wish to store it on your computer.
4. Open your Visual Studio Code (or other programming-software), click File, Open Folder, and choose the unzipped folder you just downloaded from where you saved it to.


## Credits

### Code:
- Random-color-function from AndreFelipeCL, found at "https://stackoverflow.com/questions/20553036/random-color-in-jquery"
- README-structure heavily insipred by https://github.com/PaulFrankling/discover-north-yorks.
- Code Institute courses for everything
- https://getbootstrap.com/docs/4.1/components/ for modal and info and examples of different grid-options and visibility.

### Content:

### Media used:

### Acknowledgements:





