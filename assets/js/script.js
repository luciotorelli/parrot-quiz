// Wait for the DOM to finish loading then add click event listener to the nickname submitted buttons.
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let nicknameButton = document.getElementById("submit-nickname-button");

    nicknameButton.addEventListener("click", nicknameSubmitted);
})

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
        alert("Nickname empty, please type in something!");
    } else {
        localStorage.setItem('nickname', document.getElementById("nickname").value);
        window.location = "/nickname-submitted.html";
    }
}

function preGameMessage() {
    document.getElementsByClassName("message-2")[0].innerHTML = `Nice to meet you, ${localStorage.getItem("nickname")}! Please be aware that you won't get any prizes out of this quiz apart from crumbs and bird poop everywhere. If you are in the first place, I may give you an ear nibble too. Click "I 
    promise to never clip wings!" to start the quiz whenever you are ready.`;
}

/**
 * Get the how to play and scoreboard; modal, buttons and the close button. 
 */ 
let howToPlayModal = document.getElementById("howToPlayModal");
let howToPlayButton = document.getElementsByClassName("how-to-play-button")[0];

let scoreboardModal = document.getElementById("scoreboardModal");
let scoreboardButton = document.getElementsByClassName("scoreboard-button")[0];

let closeHowToPlayModal = document.getElementsByClassName("close-modal-button")[0];
let closeScoreboardModal = document.getElementsByClassName("close-modal-button")[1];

/**
 * When the user clicks on how to play or scoreboard button, open the equivalent modal
 */ 
const modalCheck = e => {
    if (e.target.id === "how-to-play-button") {
        howToPlayModal.style.display = "block";
    } else if (e.target.id === "scoreboard-button") {
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
 * When the user clicks anywhere outside of the how to play modal or scoreboard modal, close it
 */
window.onclick = function (event) {
    if (event.target == howToPlayModal) {
        howToPlayModal.style.display = "none";
    } else if (event.target == scoreboardModal) {
        scoreboardModal.style.display = "none";
    }
}
