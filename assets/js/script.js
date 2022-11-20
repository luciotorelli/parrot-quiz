// Wait for the DOM to finish loading then add click event listener to the nickname submitted buttons.
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let nicknameButton = document.getElementById("submit-nickname-button");
    let startGameButton = document.getElementById("start-game-button");
    
    if (nicknameButton) {
        nicknameButton.addEventListener("click", nicknameSubmitted);
    }
    if (startGameButton) {
        startGameButton.addEventListener("click", gameStarted);
    }

    returnScoreboard();

})

/**
 * Get the how to play and scoreboard; modal, buttons and the close button. 
 */ 
 let howToPlayModal = document.getElementById("howToPlayModal");
 let howToPlayButton = document.getElementsByClassName("how-to-play-button")[0];
 
 let scoreboardModal = document.getElementById("scoreboard-modal");
 let scoreboardButton = document.getElementsByClassName("scoreboard-button")[0];
 
 let nickNameErrorModal = document.getElementById("nickname-error-modal");
 
 let closeHowToPlayModal = document.getElementsByClassName("close-modal-button")[0];
 let closeScoreboardModal = document.getElementsByClassName("close-modal-button")[1];
 let closeNickNameErrorModal = document.getElementsByClassName("close-modal-button")[2];

/**
 * Focus on Nickname input if the element is present on the DOM
 */

if (document.getElementById("nickname")) {
    document.getElementById("nickname").focus();
}

/**
 * Load the preGameMessage to display message 2 after user input their nickname if the element is present on the DOM
 */
if (document.getElementsByClassName("message-2")[0]) {
    document.getElementsByClassName("message-2")[0].onload = preGameMessage();
}

function nicknameSubmitted() {
    if (document.getElementById("nickname").value === "") {
        nickNameErrorModal.style.display = "block";
    } else {
        localStorage.setItem('nickname', document.getElementById("nickname").value);
        window.location = "../nickname-submitted.html";
    }
}

function preGameMessage() {
    document.getElementsByClassName("message-2")[0].innerHTML = `Nice to meet you, ${localStorage.getItem("nickname")}! Please be aware that you won't get any prizes out of this quiz apart from crumbs and bird poop everywhere. If you are in the first place, I may give you an ear nibble too. Click "I 
    promise to never clip wings!" to start the quiz whenever you are ready.`;
}

/**
 * When the user clicks on how to play or scoreboard button, open the equivalent modal
 */ 
let modalCheck = event => {
    if (event.target.id === "how-to-play-button") {
        howToPlayModal.style.display = "block";
    } else if (event.target.id === "scoreboard-button") {
        scoreboardModal.style.display = "block";
    }
}

/**
 * Add eventlistener click to how to play and scoreboard buttons
 */ 
howToPlayButton.addEventListener("click", modalCheck);
scoreboardButton.addEventListener("click", modalCheck);

/**
 * When the user clicks on how to play close button (x), close the modal
 */ 

closeHowToPlayModal.onclick = function () {
    howToPlayModal.style.display = "none";
}

/**
 * When the user clicks on scoreboard close button (x), close the modal
 */ 
closeScoreboardModal.onclick = function () {
    scoreboardModal.style.display = "none";
}

/**
 * When the user clicks on nick name error close button (x), close the modal
 */ 
 closeNickNameErrorModal.onclick = function () {
    nickNameErrorModal.style.display = "none";
}


/**
 * When the user clicks anywhere outside of the how to play modal, scoreboard or nick name error modal, close it
 */
window.onclick = function (event) {
    if (event.target == howToPlayModal) {
        howToPlayModal.style.display = "none";
    } else if (event.target == scoreboardModal) {
        scoreboardModal.style.display = "none";
    } else if (event.target == nickNameErrorModal) {
        nickNameErrorModal.style.display = "none";
    }
}

/**
 * When the user presses the ESC key, close the how to play modal, scoreboard or nick name error modal and focus on Nickname input.
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        howToPlayModal.style.display = "none";
        scoreboardModal.style.display = "none";
        nickNameErrorModal.style.display = "none";
        document.getElementById("nickname").focus();
    }
});

function gameStarted() {
    window.location = "../question.html";
}