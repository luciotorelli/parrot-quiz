/**
 * Create variables for how to play, nickname and scoreboard; modal, buttons and the close button elements. 
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
if (closeNickNameErrorModal) { 
    closeNickNameErrorModal.onclick = function () {
        nickNameErrorModal.style.display = "none";
    }
}

/**
 * When the user clicks anywhere outside of the how to play modal, scoreboard or nick name error modal, close it.
 */
window.onclick = function (event) {
    if (event.target == howToPlayModal && window.innerWidth < 1024) {
        howToPlayModal.style.display = "none";
    } else if (event.target == scoreboardModal && window.innerWidth < 1024) {
        scoreboardModal.style.display = "none";
    } else if (event.target == nickNameErrorModal) {
        nickNameErrorModal.style.display = "none";
    }
}

/**
 * When the user presses the ESC key, close the how to play modal, scoreboard or nick name error modal if screen smaller than 1024 pixels and focus on Nickname input.
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && window.innerWidth < 1024) {
        howToPlayModal.style.display = "none";
        scoreboardModal.style.display = "none";
        if (nickNameErrorModal) {
            nickNameErrorModal.style.display = "none";
        }
        if (document.getElementById("nickname")) {
            document.getElementById("nickname").focus();
        }
    }
});

/**
 * Function to display modals in case user resizes screen, closes modal and resizes it back
 */
 window.addEventListener('resize', function(event) {
    if (window.innerWidth >= 1024) {
        howToPlayModal.style.display = "flex";
        scoreboardModal.style.display = "flex";
    } else {
        howToPlayModal.style.display = "none";
        scoreboardModal.style.display = "none";
    }
}, true);