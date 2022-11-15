
/**
 * Get variables to be used on the functions of this Script.
 */
let currentQuestionIndex;
let questionContainerElement = document.getElementsByClassName("speech-bubble-3-div")[0];
let questionElement = document.getElementsByClassName("question")[0];
let answerOptions = document.getElementsByClassName("answer-options")[0];
let answerButtons = document.getElementsByClassName("answer");
let nextButton = document.getElementsByClassName("next-question-button")[0];

/**
 * Add event listener to reset buttons and body styling, remove dataset from correct answer, add to current question index and call setNextQuestion function
 */
nextButton.addEventListener('click', () => {
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
    currentQuestionIndex++;
    setNextQuestion();
})

/**
 * On windows load, create a local storage item and set it to true to check if the game is running and start game.
 */
window.onload = (event) => {
    if (localStorage.getItem("gameStarted") === "true") {
        startGame();
    }
};

/**
 * Function to start game, set question index and call setNextQuestion function
 */
function startGame() {
    console.log("Started Game");
    currentQuestionIndex = 0;
    setNextQuestion();
}

/**
 * Function to show question based on the current question index
 */
function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
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

// Reset the state of the dom when clicking on next question
function resetState() {
    nextButton.style.display = "none";
}

/**
* Select the correct answer based on the dataset.correct value and call the setStatusClass function
*/ 
function selectAnswer(e) {
    let selectedAnswer = e.target;
    let correct = selectedAnswer.dataset.correct;

    // Call setAnswerStyle function on all answer options
    Array.from(answerOptions.children).forEach(button => {
        setAnswerStyle(button, button.dataset.correct);
    })
    
    // Remove body background image and replace with the color based on the selected answer by adding corresponding class.
    if (correct) {
        document.body.classList.add("correctAnswerBody");
    } else {
        document.body.classList.add("wrongAnswerBody");
    }

    // Increase opacity of the selected answer to 1
    selectedAnswer.classList.add("selectedAnswer");

    // Display next question button once an answer is selected until we reach end of questions
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.style.display = "inline";
    }

}

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


// Array with objects of questions and answers
const questions = [
    {
        question: 'How many species of parrots are there in the world? ',
        answers: [
            { text: '27', correct: false },
            { text: '350', correct: true },
            { text: '522', correct: false },
            { text: '103', correct: false }
        ]
    },
    {
        question: 'Which parrot owns the record for most known words?',
        answers: [
            { text: 'Mango the Sun Conure, 568 words', correct: false },
            { text: 'Alex the african grey parrot, 112 words', correct: false },
            { text: 'Puck the Budgie, 1728 words', correct: true },
            { text: 'Blu the Spix\'s macaw, 1234 words', correct: false }
        ]
    },
    {
        question: 'How many toes does a parrot have?',
        answers: [
            { text: 'Three - Two facing forward, one facing backward', correct: false },
            { text: 'Four - Two facing forward, Two facing backward', correct: true },
            { text: 'Five - Three facing forward, two facing backward', correct: false },
            { text: 'Three - One facing forward, two facing backward', correct: false }
        ]
    },
    {
        question: 'Bud an African Grey parrot appeared on the news for;',
        answers: [
            { text: 'Helping to solve a murder case by repeating the victim\'s last words', correct: true },
            { text: 'Stealing a reporter\'s microphone during live news', correct: false },
            { text: 'Helping repopulate the species in it\'s natural enviroment', correct: false },
            { text: 'Imitating a TikTok dance just like his owner', correct: false }
        ]
    },
    {
        question: 'What is the main difference between old world (Africa and Asia) vs new world (North and South America) parrots?',
        answers: [
            { text: 'Old world parrots have been domesticated first, therefore, they are more likely to learn how to speak like humans', correct: false },
            { text: 'Old world parrots body produces dust to keep their feathers clean whereas New world parrots produces oil', correct: true },
            { text: 'New world parrots are less colorful than old world parrots', correct: false },
            { text: 'New world parrots are more friendly towards humans than old world parrots', correct: false }
        ]
    },
    {
        question: 'What\'s unusual about the Owl parrot of New Zealand?',
        answers: [
            { text: 'It produces oil to keep it\'s feathers clean', correct: false },
            { text: 'One male can have 10 or more partners', correct: false },
            { text: 'It is able to remember more than 100 words', correct: false },
            { text: 'It is unable to fly so it uses it\'s claws to climb trees', correct: true }
        ]
    },
    {
        question: 'What\'s the most common behaviour of pet parrots during mating season?',
        answers: [
            { text: 'They become more playful and friendly', correct: false },
            { text: 'They start digging holes to create nests', correct: false },
            { text: 'They become more aggressive and territorial', correct: true },
            { text: 'They preen more often to keep their feathers pretty for their partners', correct: false }
        ]
    },
    {
        question: 'Why did Alex the African Grey parrot become famous?',
        answers: [
            { text: 'He was owned by Stevie Wonder', correct: false },
            { text: 'He participated in a 30 years long study that showed parrots don\'t only repeat words but can use them with context', correct: true },
            { text: 'He saved the life of his family by calling 911 during a break-in to their holiday house in the USA', correct: false },
            { text: 'He is in the Guinness book of records for being the oldest parrot, having died at the age of 101', correct: false }
        ]
    },
    {
        question: 'A human bite has a force of around 150psi, an average dog of 250psi. The strongest bite of a parrot belongs to the Green Wing Macaw that can be:',
        answers: [
            { text: '150psi-250psi', correct: false },
            { text: '200psi-350psi', correct: false },
            { text: '350-1000psi', correct: false },
            { text: '500-2000psi', correct: true }
        ]
    },
    {
        question: 'What is one of the main differences between parrots and other birds?',
        answers: [
            { text: 'Parrots can talk like humans', correct: false },
            { text: 'Parrots can use one foot like a hand while balancing on the other', correct: true },
            { text: 'Parrots can befriend humans and become great pets', correct: false },
            { text: 'Parrots are domesticated', correct: false }
        ]
    }
]