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

// Get the how to play modal, the how to play button and the button to close the modal. 
let modal = document.getElementById("howToPlayModal");
let btn = document.getElementsByClassName("how-to-play-button")[0];
let span = document.getElementsByClassName("close-modal-button")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on close button (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}