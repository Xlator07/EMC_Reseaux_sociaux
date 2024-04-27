const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit-btn');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const progressBubblesContainer = document.querySelector('.progress-bubbles');

const questions = [
  {
    question: "Quel est le facteur principal qui a contribué à l'explosion de la surinformation ?",
    choices: ["L'invention de l'imprimerie", "Le développement d'Internet et des réseaux sociaux", "L'augmentation du nombre de lecteurs de journaux", "L'invention du téléphone"],
    correctAnswer: "Le développement d'Internet et des réseaux sociaux"
  },
  {
    question: "Quelle est la conséquence de la surinformation sur notre vie quotidienne ?",
    choices: ["Elle nous rend plus informés et plus connectés.", "Elle peut nous rendre dépendants de l'information et nous couper de la réalité.", "Elle n'a aucun impact significatif sur notre vie quotidienne.", "Elle peut nous aider à gagner du temps en trouvant l'information plus vite"],
    correctAnswer: "Elle peut nous rendre dépendants de l'information et nous couper de la réalité."
  },
  {
    question: "Comment la surinformation peut-elle nous induire en erreur ?",
    choices: ["Parce que les informations sont souvent contradictoires et qu'il est difficile de savoir lesquelles sont vraies.", "Parce qu'il y a trop d'informations à traiter et qu'il est difficile de les vérifier toutes.", "Toutes les réponses sont correctes.", "Parce que nous sommes naturellement enclins à croire les informations qui confirment nos opinions existantes."],
    correctAnswer: "Toutes les réponses sont correctes."
  },
  {
    question: "Que peut-on faire pour lutter contre les effets négatifs de la surinformation ?",
    choices: ["Consommer uniquement des informations provenant de sources fiables.", "Prendre le temps de vérifier les informations avant de les partager.", "Développer son esprit critique et apprendre à identifier les biais dans l'information.", "Toutes les réponses sont correctes."],
    correctAnswer: "Toutes les réponses sont correctes."
  },
  {
    question: "Comment les réseaux sociaux contribuent-ils à la création de bulles de filtre ?",
    choices: ["En diffusant des informations neutres et objectives.", "En proposant des contenus personnalisés en fonction des préférences des utilisateurs.", "En limitant le nombre de sources d'information accessibles aux utilisateurs.", "Aucune des réponses n'est correcte."],
    correctAnswer: "En proposant des contenus personnalisés en fonction des préférences des utilisateurs."
  },
  {
    question: "Quelles sont les conséquences des bulles de filtre sur le domaine personnel ?",
    choices: ["Elles augmentent l'ouverture d'esprit.", "Elles diminuent l'esprit critique.", "Elles favorisent le dialogue et le débat.", "Aucune des réponses n'est correcte."],
    correctAnswer: "Elles diminuent l'esprit critique."
  },
  {
    question: "Dans le domaine social, les bulles de filtre peuvent entraîner :",
    choices: ["1: Une augmentation de la cohésion sociale.", "2: Des tensions sociales.", "3: Un désintérêt pour les questions d'intérêt général.", "2) et 3) sont correctes."],
    correctAnswer: "2) et 3) sont correctes."
  },
  {
    question: "En politique, les bulles de filtre peuvent menacer la démocratie en :",
    choices: ["1: Favorisant la participation citoyenne.", "2: Entravant le dialogue et le débat.", "3: Renforçant les clivages et les divisions.", "2) et 3) sont correctes."],
    correctAnswer: "2) et 3) sont correctes."
  },
  {
    question: "Comment lutter contre les bulles de filtre et le biais de confirmation ?",
    choices: ["Se désabonner de tous les réseaux sociaux.", "Ne lire que des sources d'information avec lesquelles on est d'accord.", "S'exposer à des informations et des opinions différentes des siennes.", "Aucune des réponses n'est correcte."],
    correctAnswer: "S'exposer à des informations et des opinions différentes des siennes."
  },
  {
    question: "Quelle est l'importance de la diversité des points de vue dans une société démocratique ?",
    choices: ["Elle permet de prendre des décisions plus éclairées.", "Elle favorise la tolérance et le respect mutuel.", "Elle permet de résoudre des problèmes complexes.", "Toutes les réponses sont correctes."],
    correctAnswer: "Toutes les réponses sont correctes."
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display current question and choices
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  
  choicesElement.innerHTML = '';
  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.classList.add('choice');
    button.addEventListener('click', () => selectChoice(button, choice));
    choicesElement.appendChild(button);
  });
}

// Function to select choice
function selectChoice(button, choice) {
  // Remove previous selection
  const selectedButtons = document.querySelectorAll('.choice.selected');
  selectedButtons.forEach((btn) => {
    btn.classList.remove('selected');
  });
  
  // Mark current choice as selected
  button.classList.add('selected');
}

// Function to check if the selected answer is correct
function checkAnswer() {
  const selectedButton = document.querySelector('.choice.selected');
  if (!selectedButton) {
    alert('Please select an answer before submitting.');
    return;
  }
  
  const selectedChoice = selectedButton.textContent;
  const currentQuestion = questions[currentQuestionIndex];
  
  if (selectedChoice === currentQuestion.correctAnswer) {
    score++;
    progressBubblesContainer.children[currentQuestionIndex].classList.add('correct');
  } else {
    progressBubblesContainer.children[currentQuestionIndex].classList.add('incorrect');
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

// Function to display score
function displayScore() {
  feedbackElement.textContent = `Le quizz est finit ton score est de ${score} sur ${questions.length}.`;
}

// Event listener for submit button
submitButton.addEventListener('click', checkAnswer);

// Display the first question
displayQuestion();

// Create progress bubbles
questions.forEach(() => {
  const bubble = document.createElement('div');
  bubble.classList.add('progress-bubble');
  progressBubblesContainer.appendChild(bubble);
});
