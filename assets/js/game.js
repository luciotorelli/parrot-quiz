/**
 * Get and initiate variables to be used on the functions of this Script.
 */
let currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;

let questionContainerElement = document.getElementById("speech-bubble-3-div");
let questionElement = document.getElementById("question");
let answerOptionsDiv = document.getElementById("answer-options-div");
let questionH1Element = document.getElementById("question-h1");
let parrotPhotoElement = document.getElementsByClassName("maple-photo-3")[0];

let answerButtons = document.getElementsByClassName("answer");
let nextButton = document.getElementById("next-question-button");
let confirmAnswerButton = document.getElementById("confirm-answer-button");
let homeButton = document.getElementById("home-button");

let score = parseInt(localStorage.getItem('score')) || 0;
let wrongAnswers = parseInt(localStorage.getItem('wrongAnswers')) || 0;
let scoreElement = document.getElementById("score");
let wrongAnswersElement = document.getElementById("wrong-answers");

let selectedAnswer = document.getElementsByClassName("answer")[0];


/**
 * On windows load, check gameRunning key on local storage to check if the game is running, if it is, start game, otherwise, show next question.
 */
window.onload = (event) => {
    if (localStorage.getItem("gameRunning") === "true") {
        // Update currentQuestionIndex with key saved on local storage
        currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex'));

        // If score and wrong answers exist on the local storage, replace the elements with it's value, otherwise, set it to 0
        if (localStorage.getItem('score')) {
            scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
        }
        if (localStorage.getItem('wrongAnswers')) {
            wrongAnswersElement.innerText = `Wrong Answers: ${localStorage.getItem('wrongAnswers')}`;
        }

        // If user refreshes page after confirming last question, bring them to the scoreboard, otherwise, set next question.
        if (currentQuestionIndex > 9) {
            showScoreboard(event);
        } else {
            setNextQuestion();
        }

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
    // Update question h1 element to display current question
    questionH1Element.innerHTML = `Question ${currentQuestionIndex+1} out of 10`;
    // Update parrot photo to neutral photo
    parrotPhotoElement.src = 'assets/images/maple-photo-3.webp';
    // Set question speech bubble text to current question
    questionElement.innerText = question.question;
    // Initialize answerButtonIndex for looping between answers
    let answerButtonIndex = 0;
    // Loop through all answers, for each answer update the button text, add an eventlistener that calls selectAnswer function, set the dataset based if the answer is correct.
    question.answers.forEach(answer => {
        answerButtons[answerButtonIndex].innerText = answer.text;
        answerButtons[answerButtonIndex].addEventListener('click', selectAnswer);
        answerButtons[answerButtonIndex].disabled = false;
        if (answer.correct) {
            answerButtons[answerButtonIndex].dataset.correct = answer.correct;
        }
        answerButtonIndex++;
    })
}

/**
 * Function to allow user to select one of the 4 answers. 
 */
function selectAnswer(event) {
    selectedAnswer = event.target;

    // Set all answer buttons style to unselected in case the function is running for the second time on the same question
    for (let i = 0; i < answerButtons.length; i++)
    {
        answerButtons[i].style.borderStyle = "outset";
    }

    // Style the current selected answer to 'clicked' style.
    selectedAnswer.style.borderStyle = "inset";
    // Make confirm answer button available
    confirmAnswerButton.style.opacity = "1";
    confirmAnswerButton.disabled = false;

    // Remove event listener in case user clicks on another answer    
    confirmAnswerButton.removeEventListener('click', confirmAnswer);
    // Call selectAnswer function once the confirmAnswerButton is clicked
    confirmAnswerButton.addEventListener('click', confirmAnswer);

}


// Reset styling of nextButton and home button when clicking on next question
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

    // Disable confirm answer button once clicked
    confirmAnswerButton.style.opacity = "0.5";
    confirmAnswerButton.disabled = true;

    // Call setAnswerStyle function on all answer options
    Array.from(answerOptionsDiv.children).forEach(button => {
        setAnswerStyle(button, button.dataset.correct);
    })
    
    // Replace body background image with a color and replace parrot photo based on the selected answer by adding corresponding class and replace the question text with a fun fact.
    if (correct) {
        document.body.classList.add("correctAnswerBody");
        questionElement.innerText = QUESTIONS[currentQuestionIndex].fun_facts[0].text;
        score++;
        localStorage.setItem('score', score);
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
        parrotPhotoElement.src = 'assets/images/maple-photo-right-answer.webp';
    } else {
        document.body.classList.add("wrongAnswerBody");
        questionElement.innerText = QUESTIONS[currentQuestionIndex].fun_facts[1].text;
        wrongAnswers++;
        localStorage.setItem('wrongAnswers', wrongAnswers);
        wrongAnswersElement.innerText = `Wrong Answers: ${localStorage.getItem('wrongAnswers')}`;
        parrotPhotoElement.src = 'assets/images/maple-photo-wrong-answer.webp';
    }

    // Remove event listener and disable all answer buttons after an option is selected
    for (let i = 0; i < answerButtons.length; i++)
    {
        answerButtons[i].removeEventListener("click", confirmAnswer);
        answerButtons[i].disabled = true;
    }

    // Increase opacity of the selected answer to 1
    selectedAnswer.classList.add("selectedAnswer");

    // Display next question button once an answer is selected until we reach end of QUESTIONS
    nextButton.style.opacity = "1";
    nextButton.disabled = false;
    if (currentQuestionIndex == 9) {
        nextButton.innerHTML = "Show my score!";
    }

    // Get currentQuestionIndex from the local storage, update variable, set it back to the local storage.
    currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex'));
    currentQuestionIndex++; 
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    
}

/**
 * Add event listener to reset buttons and body styling, remove dataset from correct answer, add to current question index and call setNextQuestion function
 */
 nextButton.addEventListener('click', (event) => {

    if (QUESTIONS.length > currentQuestionIndex) {
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
    } else {
        let answers = document.getElementsByClassName("answer");
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].dataset) {
                delete answers[i].dataset.correct;
            }
        }
        showScoreboard(event);
    }

})

/**
 * Style the dom element of all answer options based on the answer input
 */
function setAnswerStyle(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correctAnswerButton");
    } else {
        element.classList.add("wrongAnswerButton");
    }
}

/**
 * Remove class styling from answer buttons
 */ 
function clearStatusClass(element) {
    element.classList.remove('correctAnswerButton');
    element.classList.remove('wrongAnswerButton');
    element.classList.remove('selectedAnswer');
}


/**
 * Function to display scoreboard after last question
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
    // Display scoreboard element
    document.getElementsByClassName("scoreboard-end-game")[0].style.display = "flex";

    endQuizMessage();
    returnScoreboard();

    // Hide question and answer elements, display home button
    homeButton.style.display = "flex";
    document.body.classList.remove("correctAnswerBody");
    document.body.classList.remove("wrongAnswerBody");
    answerOptionsDiv.style.display = "none";
    document.getElementById("current-score").style.display = "none";
    document.getElementById("next-and-select-answer-div").style.display = "none";
}

/**
 * Function to display last message based on user score
 */
function endQuizMessage() {
    const FINAL_SCORE = parseInt(localStorage.getItem('score'));
    if (FINAL_SCORE <= 3) {
        questionElement.innerText = `Thanks for completing the quiz, you scored ${FINAL_SCORE} out of 10 questions. You don't know a lot about parrots but I hope you learned something today!`;
    } else if ( (FINAL_SCORE >= 4) && (FINAL_SCORE <= 9) ) {
        questionElement.innerText = `Thanks for completing the quiz, you scored ${FINAL_SCORE} out of 10 questions. You know quite a lot about parrots. I am impressed!`;
        startConfetti();
    } else {
        questionElement.innerText = `Thanks for completing the quiz, you scored an impressive ${FINAL_SCORE} out of 10 questions! You know more about parrots than most people, well done!`;
        startConfetti();
    }

    questionH1Element.innerHTML = 'Quiz completed!';
}

/**
 * Add eventlistener to home button, reset game state and bring back to home page
 */
homeButton.addEventListener('click', (event) => {
    localStorage.removeItem('gameRunning');
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('wrongAnswers');
    localStorage.removeItem('score');
    localStorage.removeItem('nickname');
    if (window.location.href.includes("luciotorelli.github")) {
        window.location.href = "/parrot-quiz";
    } else {
        window.location.href = "/";
    }
});

