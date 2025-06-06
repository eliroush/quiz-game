const progressEl = document.getElementById("quiz-progress");
let currentData = [];            // The set to use during this game
const totalQuick = 10;           // You can set this to any number you want
// Extract quiz name from URL: ?quiz=plants
const params = new URLSearchParams(window.location.search);
const quizName = params.get("quiz");
document.body.classList.add(`${quizName}-theme`);

const quizTitles = {
  plants: "Plants – Quiz",
  columbia: "Columbia, SC – Quiz",
  keylimepie: "Key Lime Pie Quiz",
  strawberry: "Strawberry Shortcake Quiz",
  burgers: "Grilling & Burgers Quiz",
  famousbeaches: "Famous Beaches Quiz"
  // Add more here as needed
};

const quizTitleEl = document.getElementById("quiz-title");
if (quizTitles[quizName] && quizTitleEl) {
  quizTitleEl.textContent = quizTitles[quizName];
}

// Dynamically load the quiz data file
const script = document.createElement("script");
script.src = `quizzes/${quizName}.js`;
script.onload = () => {
  const fullData = [...quizData]; // now quizData is loaded from external file
  startQuizSelect(fullData);
};
document.head.appendChild(script);


let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  questionEl.classList.add("fade-in");
  optionsEl.classList.add("fade-in");

  // Remove the animation class after it plays so it can replay next time
  setTimeout(() => {
    questionEl.classList.remove("fade-in");
    optionsEl.classList.remove("fade-in");
  }, 500);

  const current = currentData[currentQuestion];

  // Clear previous content
  questionEl.innerHTML = ""; // ← clear text + images
  optionsEl.innerHTML = "";

  // Remove previous image (if any)
  const existingImage = document.getElementById("question-image");
  if (existingImage) {
    existingImage.remove();
  }

  // Add image if this question includes one
  if (current.image) {
    const img = document.createElement("img");
    img.src = current.image;
    img.alt = "Question image";
    img.id = "question-image";
    img.className = "question-image";
    questionEl.appendChild(img);
  }

  // Add the question text below the image
  const textNode = document.createElement("div");
  textNode.textContent = current.question;
  questionEl.appendChild(textNode);

  document.getElementById("quiz-top-anchor").scrollIntoView({ behavior: "smooth", block: "start" });

  // Add the options
  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectAnswer(option, current.answer, li);
    optionsEl.appendChild(li);
  });

  progressEl.textContent = `Question ${currentQuestion + 1} of ${currentData.length}`;
}

function selectAnswer(selected, correct, element) {
    const allOptions = document.querySelectorAll("#quiz-options li");
    allOptions.forEach(li => {
      li.style.pointerEvents = "none";
      if (li.textContent === correct) {
        li.classList.add("correct-answer"); // highlight correct answer
      }
    });
  
    if (selected === correct) {
      score++;
      element.classList.add("correct-answer");
    } else {
      element.classList.add("incorrect-answer");
      
      // ✅ Only add to incorrectAnswers if the user was wrong
      incorrectAnswers.push({
        question: currentData[currentQuestion].question,
        correctAnswer: correct,
        userAnswer: selected
      });
    }

     // Show description if available
     const current = currentData[currentQuestion];

     if (current.description) {
       const desc = document.createElement("div");
       desc.className = "answer-description";
       desc.textContent = current.description;
     
       // 🆕 Add image if provided
       if (current.descriptionImage) {
         const img = document.createElement("img");
         img.src = current.descriptionImage;
         img.alt = "Description image";
         img.className = "description-image";
         desc.appendChild(img);
       }
     
       optionsEl.appendChild(desc); // Only append once all content is added
     }
     
     // Enable the next button regardless of description
     nextBtn.disabled = false;
     
     // Scroll to next button on mobile
     nextBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    }
 

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < currentData.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
});

function showResult() {
    let feedback = '';
    if (incorrectAnswers.length > 0) {
      feedback += `<h3>Review</h3><ul class="no-bullets">`;
      incorrectAnswers.forEach(item => {
        feedback += `<li><strong>Q:</strong> ${item.question}<br>
        <strong>Your Answer:</strong> ${item.userAnswer}<br>
        <strong>Correct:</strong> ${item.correctAnswer}</li><br>`;
      });
      feedback += "</ul>";
    }
  
    const resultHTML = `
    <div class="fade-in">
      <h2>Quiz Complete!</h2>
      <p>Your Score: ${score}/${currentData.length}</p>
      ${feedback}
      <div class="end-buttons">
        <button onclick="location.reload()" class="play-again-button">Play Again</button>
        <a href="index.html" class="home-button">Play More Quizzes</a>
      </div>
    </div>
  `;

  document.getElementById("quiz-container").innerHTML = resultHTML;

  // Scroll to top of quiz container
  document.getElementById("quiz-top-anchor").scrollIntoView({ behavior: "smooth", block: "start" });
}
  
  
  // 8. Start the quiz
  function startQuizSelect(fullData) {
    function startQuiz(mode) {
      document.getElementById("quiz-mode-select").style.display = "none";
      document.getElementById("quiz-container").style.display = "block";
      document.getElementById("quiz-title").style.display = "none";
      // Prevent duplicate mini-titles
      const existingMini = document.querySelector(".mini-title");
      if (existingMini) existingMini.remove();

      const miniTitle = document.createElement("div");
      miniTitle.className = "mini-title";
      miniTitle.textContent = quizTitles[quizName];  // reuse the existing object
      document.getElementById("quiz-container").prepend(miniTitle);
  
      currentQuestion = 0;
      score = 0;
      incorrectAnswers = [];
  
      if (mode === "quick") {
        currentData = [...fullData]
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.min(totalQuick, fullData.length));
      } else {
        currentData = [...fullData].sort(() => 0.5 - Math.random());
      }
  
      nextBtn.disabled = true;
      loadQuestion();
    }
  
    // Attach button events after quiz data is ready
    document.querySelector("button[onclick=\"startQuiz('quick')\"]").onclick = () => startQuiz("quick");
    document.querySelector("button[onclick=\"startQuiz('full')\"]").onclick = () => startQuiz("full");
  }
