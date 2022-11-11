
// Wait for the DOM to finish loading then add click event listener to the nickname submitted buttons.
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let nicknameButton = document.getElementById("submit-nickname-button");
    
    nicknameButton.addEventListener("click", nicknameSubmitted);
})

window.onload = function() {
    document.getElementById("nickname").focus();
}

document.getElementsByClassName("message-2")[0].onload = preGameMessage();

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

    
