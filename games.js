const quizData = [
  {
    question: "It’s 9:15 a.m. on a Monday morning. You’re working at a small company when your phone suddenly buzzes. You receive a voice message from a number you don’t recognize. The voice sounds exactly like your manager:<br><br><span>“Hey, I’m stuck in a meeting and can’t use my phone properly. I need you to urgently buy $500 worth of digital gift cards for a client. Don’t call me because I’m in the meeting. Just send me the codes when you have them.”</span><br><br>The voice sounds convincing, and your manager is actually in a meeting today. What would you do?",
    options: ["Buy the gift cards immediately because the voice sounds like your manager.", "Buy $100 first and wait to see what happens.", "Contact your manager through the company’s official communication system to verify the request.", "Send the gift-card codes but ask your “manager” to confirm afterward."],
    answer: "Contact your manager through the company’s official communication system to verify the request."
  },
  {
    question: "You’re sitting at home when you receive a text message:<br><br><span>DELIVERY ALERT: Your package could not be delivered. A redelivery fee of 25,000₫ is required. Pay within 30 minutes or your package will be returned.</span><br><br>There is a link underneath the message. You tap it and see a website with the logo, colors, and layout of a major delivery company. The problem is that you don't remember ordering anything. What would you do next?",
    options: ["Pay the 25,000₫ because the amount is small.", "Click through the website and enter your card details to check the package.", "Close the website and independently check your orders through the delivery company's official app or website.", "Reply to the text and send your address so they can confirm the package."],
    answer: "Close the website and independently check your orders through the delivery company's official app or website."
  },
  {
    question: "You’re scrolling through your messages when your friend sends you a link.<br><br><span>Friend: “Bro, you have to try this. My cousin made $2,000 this week using this AI trading platform. I already made $300. You can start with just $100!”</span><br><br>You click the link and see a professional-looking investment platform. A live chat window shows people posting screenshots of huge profits. A countdown appears:<br><br><span>“ONLY 17 MINUTES LEFT TO RECEIVE THE NEW INVESTOR BONUS!”</span><br><br>You have $100 available and are considering trying it. What should you do?",
    options: ["Independently verify the company, platform, and investment claims before sending any money.", "Invest immediately before the bonus expires.", "Invest $50 instead of $100 to reduce the risk.", "Ask your friend to send you another screenshot of their profits."],
    answer: "Independently verify the company, platform, and investment claims before sending any money."
  },
  {
    question: "You’ve been looking for a remote job and finally receive a message from a recruiter. After a short interview through a messaging app, the recruiter tells you:<br><br><span>“Congratulations! You’ve been selected.”</span><br><br>You’re excited. However, the recruiter says you need to pay a $150 equipment and training deposit before they can send you your employment contract. They promise the money will be refunded with your first paycheck. You really need the job. What would you do?",
    options: ["Pay the $150 because you have already been offered the job.", "Send your bank details so they can deduct the deposit from your first paycheck.", "Ask them to reduce the deposit to $50.", "Research the company independently and verify the job offer through official company contact information before paying anything."],
    answer: "Research the company independently and verify the job offer through official company contact information before paying anything."
  }

  
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const quizElement = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answerSubmitted = false;




function showQuestion() {

  const question = quizData[currentQuestion];

  questionElement.innerHTML = question.question;

  optionsElement.innerHTML = "";

  selectedAnswer = null;
  answerSubmitted = false;

  submitButton.textContent = "Submit";

  question.options.forEach(option => {

    const button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", () => {

      
      if (answerSubmitted) {
        return;
      }

      
      document
        .querySelectorAll("#options button")
        .forEach(button => {
          button.classList.remove("selected");
        });

      // Select this answer
      button.classList.add("selected");

      selectedAnswer = option;

    });

    optionsElement.appendChild(button);

  });
}




submitButton.addEventListener("click", () => {

 

  if (answerSubmitted) {

    currentQuestion++;

    if (currentQuestion < quizData.length) {

      showQuestion();

    } else {

      showResult();

    }

    return;
  }




  if (selectedAnswer === null) {

    alert("Please select an answer first!");

    return;
  }


  const correctAnswer =
    quizData[currentQuestion].answer;


  const buttons =
    document.querySelectorAll("#options button");


 
  buttons.forEach(button => {

    button.disabled = true;


    
    if (button.textContent === correctAnswer) {

      button.classList.add("correct");

    }


    
    if (
      button.textContent === selectedAnswer &&
      selectedAnswer !== correctAnswer
    ) {

      button.classList.add("wrong");

    }

  });


  
  if (selectedAnswer === correctAnswer) {

    score++;

  }


 
  answerSubmitted = true;



  if (currentQuestion === quizData.length - 1) {

    submitButton.textContent = "See Results";

  } else {

    submitButton.textContent = "Next Question";

  }

});




function showResult() {

  
  questionElement.style.display = "none";
  optionsElement.style.display = "none";

  submitButton.style.display = "none";


  
  const result = document.createElement("div");

  result.id = "result";

  result.innerHTML = `

    <h1 id="score">
      Your score:<br>
      <span>${score}/${quizData.length}</span>
    </h1>

    <button id="restart">Try Again</button>
  `;

  quizElement.appendChild(result);


  
  document
    .getElementById("restart")
    .addEventListener("click", restartQuiz);

}




function restartQuiz() {


  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  answerSubmitted = false;


  
  const result = document.getElementById("result");

  if (result) {
    result.remove();
  }


 
  questionElement.style.display = "block";
  optionsElement.style.display = "grid";
  submitButton.style.display = "block";


  
  showQuestion();

}




showQuestion();