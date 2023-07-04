const quizData = [
    {
      question: "What is the capital city of JavaScript?",
      options: [
         "Java",
         "Python",
         "Node.js",
         "None of the above"
      ],
      answer: 4
    }, 
    
    {
        question: "What does HTML stand for?",
        options: [
           "Hyper Text Markup Language",
           "Home Tool Markup Language",
           "Hyperlinks and Text Markup Language",
           "None of the above"
        ],
        answer: 1
      },
      {
        question: "Which programming language is known as the 'father of the web'?",
        options: [
           "Python",
           "JavaScript",
           "C",
           "HTML"
        ],
        answer: 2
      },
      {
        question: "What is the output of the following code?\n\n```javascript\nconsole.log(2 + '2');\n```",
        options: [
           "4",
           "22",
           "Error",
           "undefined"
        ],
        answer: 2
      },
      {
        question: "Which keyword is used to define a variable in JavaScript?",
        options: [
           "let",
           "variable",
           "var",
           "int"
        ],
        answer: 3
      },
      {
        question: "What is the result of the following expression?\n\n```javascript\n5 + '5' - 2\n```",
        options: [
           "7",
           "3",
           "10",
           "NaN"
        ],
        answer: 2
      },
      {
        question: "Which method is used to add elements at the end of an array in JavaScript?",
        options: [
           "push()",
           "pop()",
           "shift()",
           "unshift()"
        ],
        answer: 1
    },
      {
        question: "What does CSS stand for?",
        options: [
           "Computer Style Sheets",
           "Cascading Style Sheets",
           "Colorful Style Sheets",
           "Creative Style Sheets"
        ],
        answer: 2
      },
      {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
           "//",
           "/*",
           "<!--",
           "%%"
        ],
        answer: 1
      },
      {
        question: "What is the correct way to select an HTML element with the id 'example' using JavaScript?",
        options: [
           "getElement('example')",
           "document.getElementById('example')",
           "getElementById('example')",
           "document.getElement('example')"
      ],
        answer: 2
      }
  ];
  
  
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const congratulationsPopup = document.getElementById("congratulations-popup");
  const scoreElement = document.getElementById("score");
  const totalElement = document.getElementById("total");
  const contactButton = document.getElementById("contact-button");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  loadQuestion();
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const optionButton = document.createElement("button");
      optionButton.innerText = currentQuestion.options[i];
      optionButton.classList.add("option");
      optionButton.addEventListener("click", checkAnswer);
      optionsElement.appendChild(optionButton);
    }
  }
  
  function checkAnswer(e) {
    const selectedOption = e.target;
    const currentQuestion = quizData[currentQuestionIndex];
  
    const selectedAnswer = Array.from(optionsElement.children).indexOf(selectedOption) + 1;
  
    if (selectedAnswer === currentQuestion.answer) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("wrong");
    }
  
    disableOptions();
  
    if (currentQuestionIndex === quizData.length - 1) {
      submitButton.innerText = "Finish";
    }
  
    currentQuestionIndex++;
    submitButton.disabled = false;
    submitButton.addEventListener("click", nextQuestion);
  }
  
  function disableOptions() {
    const optionButtons = Array.from(optionsElement.children);
    optionButtons.forEach((button) => {
      button.disabled = true;
      if (!button.classList.contains("correct")) {
        button.classList.add("disabled");
      }
    });
  }
  
  function nextQuestion() {
    submitButton.removeEventListener("click", nextQuestion);
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      submitButton.disabled = true;
      removeOptionClasses();
    } else {
      showCongratulationsPopup();
    }
  }
  
  function removeOptionClasses() {
    const optionButtons = Array.from(optionsElement.children);
    optionButtons.forEach((button) => {
      button.classList.remove("correct", "wrong", "disabled");
    });
  }
  
  function showCongratulationsPopup() {
    questionContainer.style.display = "none";
    congratulationsPopup.style.display = "flex";
    scoreElement.textContent = score;
    totalElement.textContent = quizData.length;
  }
  
  contactButton.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in";
    console.log("Contact button clicked!");
  });
  