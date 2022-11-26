<img id="logo" src="assets/images/logo.png"
     alt=""
     width="200px" />

<h2><a href="https://luciotorelli.github.io/parrot-quiz/index.html" target="_blank">Live Website here</a></h2>


Parrot Quiz
---

Parrot Quiz is an interactive multiple question game to test your knowledge about our feathered friends, it is hosted by a parrot named Maple.

## Table of Contents


1.  [Overview](https://github.com/luciotorelli/parrot-quiz#logo)
2.  [User Stories](https://github.com/luciotorelli/parrot-quiz#user-stories)
3.  [Site Owner Goals](https://github.com/luciotorelli/parrot-quiz#site-owner-goals)
4.  [Wireframe](https://github.com/luciotorelli/parrot-quiz#wireframe)
5.  [Color Scheme and Typography](https://github.com/luciotorelli/parrot-quiz#color-scheme-and-typography)
6.  [Features](https://github.com/luciotorelli/parrot-quiz#features)
    - [Features](https://github.com/luciotorelli/parrot-quiz#features-1)
    - [Future Features](https://github.com/luciotorelli/parrot-quiz#future-features)
7.  [Technologies used](https://github.com/luciotorelli/parrot-quiz#technologies-used)
8.  [Testing](https://github.com/luciotorelli/parrot-quiz#testing)
    - [8.1 Code validation](https://github.com/luciotorelli/parrot-quiz#testing)
    - [8.2 Test cases (User Feedback - Screenshots)](https://github.com/luciotorelli/parrot-quiz#testing)
    - 8.3 Fixed Bugs
    - 8.4 Open Bugs
    - 8.5 Supported Screens and Browsers

9.  Deployment
    - 9.1 Gitpod
    - 9.2 Github pages
10. Credits
    - 10.1 Special Thanks!
    - 10.2 Resources used



---

## User Stories

- As a new user I would like to understand the theme of the quiz/game in the very first access.
- As a returning user I would like to easily access the scoreboard.
- As a user in the middle of a game I would like to check my score and wrong answers.
- As a user answering a question I would like to receive feedback in the form of text or color of my guess.

---

## Site Owner Goals:

- Create a website for testing the user's knowledge on parrots.
- The website is interactive, fun and easy to navigate.
- The website is responsive and adaptable for Mobile, Desktop and in-between screens.
- The website/game purpose is easily identifiable on the very first visit.


---

## Wireframe

<details>
   <summary>Desktop</summary>
   
-  <details>
         <summary>Homepage</summary>
            <img src="wireframe/desktop-homepage.png" alt="Wireframing for desktop home page" width="800px" />
      </details>

- <details>
     <summary>Nickname submitted</summary>
        <img src="wireframe/desktop-nickname-submitted.png" alt="Wireframing for desktop nickname submitted page" width="800px" />
  </details>

- <details>
     <summary>Question</summary>
        <img src="wireframe/desktop-question.png" alt="Wireframing for desktop question page" width="800px" />
  </details>

- <details>
     <summary>Scoreboard</summary>
        <img src="wireframe/desktop-scoreboard.png" alt="Wireframing for desktop scoreboard page" width="800px" />
  </details>  

</details>

<details>
   <summary>Mobile</summary>
      
-  <details>
         <summary>Homepage</summary>
            <img src="wireframe/mobile-homepage.png" alt="Wireframing for mobile home page" width="800px" />
      </details>

- <details>
     <summary>Nickname submitted</summary>
        <img src="wireframe/mobile-nickname-submitted.png" alt="Wireframing for mobile nickname submitted page" width="800px" />
  </details>

- <details>
     <summary>Question</summary>
        <img src="wireframe/mobile-question.png" alt="Wireframing for mobile question page" width="800px" />
  </details>

- <details>
     <summary>Scoreboard</summary>
        <img src="wireframe/mobile-scoreboard.png" alt="Wireframing for mobile scoreboard page" width="800px" />
  </details>
</details>
  

---

## Color Scheme and Typography



1. ### Color Scheme


<img src="color-scheme/color-scheme.png" alt="Wireframing for mobile scoreboard page" width="800px" />


1. ### Typography

[Google Fonts - Nunito](https://fonts.google.com/specimen/Nunito)

---

## Features

<details>
   <summary>Features</summary>
      1.  Landing Page - The landing page  provides the clear purpose of the website, a field to input your nickname (maximum 10 characteres) and depending on the size screen a modal button for how to play and scoreboard or a window on each side of the main body with the same information.
      <img src="readme-assets/home.png" alt="Home page" width="1000px" />
      2.  The first modal tells the player how to play with an option to close it by clicking outside of the screen, pressing the Escape key or via the X button.
      <img src="readme-assets/home-how-to-play.png" alt="How to play modal" width="1000px" />
      3.  The second modal shows the scoreboard with Top 5 players with an option to close it by clicking outside of the screen, pressing the Escape key or via the X button.
      <img src="readme-assets/home-scoreboard.png" alt="Scoreboard modal" width="1000px" />
      4.  There is a third modal that will only be called in case the user attempts to submit nickname with the input field blank.
      <img src="readme-assets/nickname-error.png" alt="Nickname error modal" width="1000px" />
      5.  The introduction page will utilize the nickname submitted to provide a personalized greeting to the user, display the same scoreboard and how to play modals as well as a button to initiate the game.
      <img src="readme-assets/introduction.png" alt="Introduction Page" width="1000px" />
      6.  The header of the quiz will display the current question number, the scores and wrong answers as well as the question on a speech bubble. 
      <img src="readme-assets/quiz-header.png" alt="Quiz Header" width="1000px" />
      7.  The quiz will have 4 options for the user to select, a disabled submit answer and next answer buttons that will be enabled in order of submission.  
      <img src="readme-assets/quiz-buttons.png" alt="Quiz Buttons" width="1000px" />
      8. Once the user selects an option, the selected option will have a 'clicked' effect and the submit answer button will be enabled. At this point the user is able to change their mind and select other options without affecting their score. 
      <img src="readme-assets/selected-answer.png" alt="Selected Answer" width="1000px" />
      9. Once the user submits their answer, the submit answer button will be disabled and the next button will be enabled. There will be multiple features to inform the user if their answer were correct or not. For the right answer the parrot image will be replaced with a 'hands up' image, the body background and the selected button will be green. The question text will be replaced with a feedback regarding the right question.
      <img src="readme-assets/right-answer.png" alt="Wrong Answer" width="1000px" />
      10. If the user selects the wrong answer, the body and the clicked button will turn red while the correct answer will have a higher opacity with the background green and an 'unclicked' effect. The parrot image will be replaced for a 'face palm' image. The next button will be enabled. The question text will be replaced with a feedback regarding the wrong answer.   
      <img src="readme-assets/wrong-answer.png" alt="Wrong Answer" width="1000px" />
      11. Upon clicking on the next button, all styling in regards to the wrong or right answers are reset and a new question with it's answer options are loaded. The parrot image becames the 'neutral' again.    
      <img src="readme-assets/quiz-2.png" alt="Quiz question two" width="1000px" />
      12. The state of the game is saved to the local storage and will bring the user back to where they paused the quiz in case of a page refresh or forward/backward key press. It also makes harder for cheating on the game as the score is only stored once the answer is submitted.
      <img src="readme-assets/local-storage.png" alt="Local Storage" width="1000px" />
      13. Once the user reaches the last question, the next button will bring them to the end of quiz page with a message based on their score, a scoreboard of the top 5 players and a button to reset the quiz. If the user scores 4 or more, there will be a confetti rain effect on the screen. There are a total of 3 answers based on scores;
         <br />
         - 1-3 points: "Thanks for completing the quiz {NAME}, you scored {SCORE} out of 10 questions. You don't know a lot about parrots but I hope you learned something today!"
         <br />
         - 4-9 points: "Thanks for completing the quiz {NAME}, you scored {SCORE} out of 10 questions. You know quite a lot about parrots. I am impressed!"
         <br />
         - 10 points: "Thanks for completing the quiz {NAME}, you scored an impressive {SCORE} out of 10 questions! You know more about parrots than most people, well done!"
         <br />
      Clicking Restart will bring the user back to the homepage and will clear every field on local storage apart from the scoreboard.
      <img src="readme-assets/end-of-quiz.png" alt="End of Quiz" width="1000px" />      

</details>

<details>
   <summary>Future Features</summary>

   1. Animation on some parts of the quiz such as the parrot profile image would create a more interactive experience.
   2. Store the scoreboard on a Google Spreadsheet so the Top 5 players would be displayed for every user instead of on the same device. (Requires backend implementation).
   3. An image related to each question to be displayed on the quiz. (Difficult due to the quiz theme and image royalties). 
</details>

---

## Technologies used

- [HTML 5](https://en.wikipedia.org/wiki/HTML5) - The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
- [CSS3](https://www.w3schools.com/css/) - Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
- [JavaScript](https://www.w3schools.com/js/) - JavaScript, often abbreviated as (JS), is a programming language that is one of the core technologies of the World Wide Web
- [Github and Git](https://docs.github.com/en/get-started/using-git/about-git) - GitHub, Inc., is an Internet hosting service for software development and version control using Git.

---

## Testing

<details>
   <summary>8.1 Code validation</summary>
   <ul>
      <li>The code for all HTML files was tested against <a href="https://validator.w3.org/">W3C Markup validation service.</a></li>
      <li>The code for the CSS file was tested against <a href="https://jigsaw.w3.org/css-validator/">W3C CSS validation service.</a></li>
      <li>The code for the JavaScript file was tested against <a href="https://jshint.com/">JShint</a></li>      
      <li>All files were tested during development using the <a href="https://github.com/streetsidesoftware/vscode-spell-checker">Spelling checker for Visual Studio Code extension.</a> </li>
      <li><a href="https://developer.chrome.com/docs/devtools/">ChromeDev tools</a> built in console, application and lighthouse report were used to test the performance, state of game and load speed of the website.</li>
      <img src="readme-assets/lighthouse.png" alt="Lighthouse test" width="400px" />      
   </ul>
</details>

<details>
   <summary>8.2 Test cases</summary>

   * A first time user was able to quickly understand the purpose of the website/game and how to navigate it. 
   <img src="readme-assets/user-test-homepage.jpeg" alt="User test homepage" width="800px" />
   * An IOS user provided feedback in regards to the text on some buttons were displayed in blue, this was later fixed on <a href="https://github.com/luciotorelli/parrot-quiz/commit/c77433201c1e3cc9c3644be5b52c0b810273951c">commit c77433201c1e3cc9c3644be5b52c0b810273951c.</a> 
   <img src="readme-assets/user-test-blue-text.jpeg" alt="User test homepage" width="800px" />
   * When the quiz is initiated the user was able to quickly understand how to select and submit their answer and select a next question.
   <img src="readme-assets/user-test-quiz.png" alt="User test quiz" width="800px" />
   * All 15 users that tested the project were able to reach the last screen on different devices, browsers and screen sizes.
   <img src="readme-assets/user-test-end-quiz.png" alt="User test quiz" width="800px" />   

</details>

---


## Deployment


---

## Credits

### Special Thanks!

