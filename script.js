

const quizData = [{
    question: "Q. Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
}, {
    question: " Q. What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
}, {
    question: "Q. What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
}, {
    question: "Q. What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
}, ];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
        
        }
    }
});


// get the container element
const container = document.getElementById('rest');

// add event listeners for the mousemove and mouseout events
container.addEventListener('mousemove', restrictMouse);
container.addEventListener('mouseout', resetMouse);

// function to restrict the mouse cursor
function restrictMouse(e) {
  // get the container's dimensions
  const rect = container.getBoundingClientRect();
  const left = rect.left;
  const top = rect.top;
  const width = rect.width;
  const height = rect.height;

  // get the mouse coordinates relative to the container
  let x = e.clientX - left;
  let y = e.clientY - top;

  // restrict the mouse coordinates if they are outside the container
  if (x < 0) {
    x = 0;
  } else if (x > width) {
    x = width;
  }
  if (y < 0) {
    y = 0;
  } else if (y > height) {
    y = height;
  }

  // set the mouse cursor position
  container.style.cursor = 'none';
  container.style.setProperty('--mouse-x', x + 'px');
  container.style.setProperty('--mouse-y', y + 'px');
}

// function to reset the mouse cursor when it leaves the container
function resetMouse() {
  container.style.cursor = 'default';
  container.style.setProperty('--mouse-x', '50%');
  container.style.setProperty('--mouse-y', '50%');
}
