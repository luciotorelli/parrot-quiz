/**
 * Get and initiate variables to be used on the functions of this Script.
 */
let currentQuestionIndex = localStorage.getItem('currentQuestionIndex') || 0;
let questionContainerElement = document.getElementById("speech-bubble-3-div");
let questionElement = document.getElementById("question");
let answerOptionsDiv = document.getElementById("answer-options-div");
let answerButtons = document.getElementsByClassName("answer");
let nextButton = document.getElementById("next-question-button");
let confirmAnswerButton = document.getElementById("confirm-answer-button");
let homeButton = document.getElementById("home-button");

let scoreElement = document.getElementById("score");
let wrongAnswersElement = document.getElementById("wrong-answers");

let score = 0;
let wrongAnswers = 0;

let selectedAnswer = document.getElementsByClassName("answer")[0];


/**
 * On windows load, create a local storage item and set it to true to check if the game is running and start game.
 */
window.onload = (event) => {
    if (localStorage.getItem("gameRunning") === "true") {
        currentQuestionIndex = localStorage.getItem('currentQuestionIndex');
        setNextQuestion();
    } else {
        localStorage.setItem('gameRunning', "true");
        currentQuestionIndex = 0;
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
        startGame();
    }
};

/**
 * Function to start game, set question index and call setNextQuestion function
 */
function startGame() {
    setNextQuestion();
}

/**
 * Function to reset current question state and show next question based on the current question index
 */
function setNextQuestion() {
    resetState();
    showQuestion(QUESTIONS[currentQuestionIndex]);
}

/**
 * Function to update dom elements for question and answer
 */
function showQuestion(question) {
    // Set question speech bubble text to current question
    questionElement.innerText = question.question;
    // Initialize answerButtonIndex for looping between answers
    let answerButtonIndex = 0;
    // Loop through all answers, for each answer update the button text, add an eventlistener that calls selectAnswer function, set the dataset based if the answer is correct.
    question.answers.forEach(answer => {
        answerButtons[answerButtonIndex].innerText = answer.text;
        answerButtons[answerButtonIndex].addEventListener('click', selectAnswer);
        if (answer.correct) {
            answerButtons[answerButtonIndex].dataset.correct = answer.correct;
        }
        answerButtonIndex++;
    })
}

/**
 * Function to allow user to select answers. 
 */
function selectAnswer(event) {
    selectedAnswer = event.target;

    // Set all answer buttons style to unselected in case the function is running for the second time
    for (let i = 0; i < answerButtons.length; i++)
    {
        answerButtons[i].style.borderStyle = "outset";
    }

    // Style the current selected answer
    selectedAnswer.style.borderStyle = "inset";
    // Make confirm answer button available
    confirmAnswerButton.style.opacity = "1";
    confirmAnswerButton.disabled = false;

    // Remove event listener in case user clicks on another answer    
    confirmAnswerButton.removeEventListener('click', confirmAnswer);
    // Call selectAnswer function once the confirmAnswerButton is clicked
    confirmAnswerButton.addEventListener('click', confirmAnswer);

}


// Reset the state of the dom when clicking on next question
function resetState() {
    nextButton.style.opacity = "0.5";
    nextButton.disabled = true;
    homeButton.style.display = "none";
}

/**
* Select the correct answer based on the dataset.correct value and call the setStatusClass function
*/ 
function confirmAnswer() {
    let correct = selectedAnswer.dataset.correct;

    confirmAnswerButton.style.opacity = "0.5";
    confirmAnswerButton.disabled = true;

    // Call setAnswerStyle function on all answer options
    Array.from(answerOptionsDiv.children).forEach(button => {
        setAnswerStyle(button, button.dataset.correct);
    })
    
    // Remove body background image, replace with the color based on the selected answer by adding corresponding class and replace the question text with a fun fact.
    if (correct) {
        document.body.classList.add("correctAnswerBody");
        questionElement.innerText = QUESTIONS[currentQuestionIndex].fun_facts[0].text;
        score++;
        localStorage.setItem('score', score);
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    } else {
        document.body.classList.add("wrongAnswerBody");
        questionElement.innerText = QUESTIONS[currentQuestionIndex].fun_facts[1].text;
        wrongAnswers++;
        localStorage.setItem('wrongAnswers', wrongAnswers);
        wrongAnswersElement.innerText = `Wrong Answers: ${localStorage.getItem('wrongAnswers')}`;
    }

    //Remove event listener from all answer buttons after an option is selected
    for (let i = 0; i < answerButtons.length; i++)
    {
        answerButtons[i].removeEventListener("click", confirmAnswer);
    }

    // Increase opacity of the selected answer to 1
    selectedAnswer.classList.add("selectedAnswer");

    // Display next question button once an answer is selected until we reach end of QUESTIONS
    nextButton.style.opacity = "1";
    nextButton.disabled = false;

    currentQuestionIndex = localStorage.getItem("currentQuestionIndex");
    currentQuestionIndex++; 

    if (currentQuestionIndex == 9) {
        nextButton.innerHTML = "Show my score!";
    }

    localStorage.setItem('currentQuestionIndex', currentQuestionIndex)
}

/**
 * Add event listener to reset buttons and body styling, remove dataset from correct answer, add to current question index and call setNextQuestion function
 */
 nextButton.addEventListener('click', (event) => {

    if (QUESTIONS.length > currentQuestionIndex + 1) {
        // Set all answer buttons style to unselected after clicking next question
        for (let i = 0; i < answerButtons.length; i++)
        {
            answerButtons[i].style.borderStyle = "outset";
        }

        document.body.classList.remove("correctAnswerBody");
        document.body.classList.remove("wrongAnswerBody");
        let answers = document.getElementsByClassName("answer");
        for (var i = 0; i < answers.length; i++) {
            answers[i].classList.remove('correctAnswerButton');
            answers[i].classList.remove('wrongAnswerButton');
            if (answers[i].dataset) {
                delete answers[i].dataset.correct;
            }
        }
        setNextQuestion();
    } else if (currentQuestionIndex == 9) {
        let answers = document.getElementsByClassName("answer");
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].dataset) {
                delete answers[i].dataset.correct;
            }
        }
        showScoreboard(event);
    }

})

// Style the dom element of all answer options based on the answer input
function setAnswerStyle(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correctAnswerButton");
    } else {
        element.classList.add("wrongAnswerButton");
    }
}

function clearStatusClass(element) {
    element.classList.remove('correctAnswerButton');
    element.classList.remove('wrongAnswerButton');
    element.classList.remove('selectedAnswer');
}


/**
 * Function to display score board after last question
 */
function showScoreboard(event) {
    const NICKNAME = localStorage.getItem('nickname');
    const FINAL_SCORE = localStorage.getItem('score');
    const FINAL_WRONG_ANSWERS = localStorage.getItem('wrongAnswers');

    // Get the scoreboard array, if not created, create one. 
    const SCOREBOARD = JSON.parse(localStorage.getItem("scoreboard")) || [];

    event.preventDefault();
    // Create SCORE array with value from NICKNAME and FINAL_SCORE
    const SCORE = {
        score: FINAL_SCORE,
        name: NICKNAME
    };

    // Push SCORE array into SCOREBOARD
    SCOREBOARD.push(SCORE);
    // Sort SCOREBOARD based on the higher scores
    SCOREBOARD.sort( (a,b) => b.score - a.score);
    // Remove any entry past 5 latest top scores
    SCOREBOARD.splice(5);
    // Save SCOREBOARD into local storage
    localStorage.setItem('scoreboard', JSON.stringify(SCOREBOARD));

    document.getElementsByClassName("scoreboard-end-game")[0].style.display = "flex";

    returnScoreboard();

    homeButton.style.display = "flex";
    document.body.classList.remove("correctAnswerBody");
    document.body.classList.remove("wrongAnswerBody");
    answerOptionsDiv.style.display = "none";
    document.getElementById("current-score").style.display = "none";
    document.getElementById("next-and-select-answer-div").style.display = "none";
}

homeButton.addEventListener('click', (event) => {
    localStorage.removeItem('gameStarted');
    localStorage.removeItem('wrongAnswers');
    localStorage.removeItem('score');
    localStorage.removeItem('nickname');
    window.location = "/";
});