
/**
 * Add event Listener to DOMContentLoaded that calls onLoad function
 */
document.addEventListener("DOMContentLoaded", onLoad());


// Wait for the DOM to finish loading then add click event listener to the nickname submitted buttons.
// Get the button elements and add event listeners to them
function onLoad() {
    let nicknameButton = document.getElementById("submit-nickname-button");
    let startGameButton = document.getElementById("start-game-button");

    if (nicknameButton) {
        nicknameButton.addEventListener("click", nicknameSubmitted);
    }
    if (startGameButton) {
        startGameButton.addEventListener("click", gameStarted);
    }

    /**
     * Load the preGameMessage to display message 2 after user input their nickname if the element is present on the DOM
     */
    if (document.getElementsByClassName("message-2")[0]) {
        document.getElementsByClassName("message-2")[0].onload = preGameMessage();
    }

    /**
     * Focus on Nickname input once the element is present on the DOM
     */
    if (document.getElementById("nickname")) {
        document.getElementById("nickname").focus();
    }

    returnScoreboard();

}

/**
 * Function to check if nickname input has been filled in, save nickname to local storage and redirect to the next page. Otherwise, displays modal with nickname error. 
 */
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

/**
 * Function to display a pre game message to the player using their nickname
 */
function preGameMessage() {
    document.getElementsByClassName("message-2")[0].innerHTML = `Nice to meet you, ${localStorage.getItem("nickname")}! Please be aware that you won't win any prizes apart from crumbs and bird poop everywhere. If you are in first place, I may give you an ear nibble too. Click "I 
    promise to never clip wings!" to start the quiz whenever you are ready.`;
}

/**
 * Function redirect to the game page
 */
function gameStarted() {
    if (window.location.href.includes("luciotorelli.github")) {
        window.location.href = "/parrot-quiz/game.html";
    } else {
        window.location.href = "/game.html";
    }

}