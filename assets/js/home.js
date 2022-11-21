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
        if (window.location.href.includes("luciotorelli.github")) {
            window.location.href = "/parrot-quiz/introduction.html";
        } else {
            window.location.href = "/introduction.html";
        }

    }
}

function preGameMessage() {
    document.getElementsByClassName("message-2")[0].innerHTML = `Nice to meet you, ${localStorage.getItem("nickname")}! Please be aware that you won't get any prizes out of this quiz apart from crumbs and bird poop everywhere. If you are in the first place, I may give you an ear nibble too. Click "I 
    promise to never clip wings!" to start the quiz whenever you are ready.`;
}

function gameStarted() {
    if (window.location.href.includes("luciotorelli.github")) {
        window.location.href = "/parrot-quiz/game.html";
    } else {
        window.location.href = "/game.html";
    }

}