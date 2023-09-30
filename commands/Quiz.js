// Import necessary libraries and modules
const { cmd, getRandomInt } = require('../lib');

// Define quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Berlin", "C. Paris"],
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Earth", "B. Mars", "C. Venus"],
        correctAnswer: "B"
    },
    // Add more questions here
];

// Initialize variables to keep track of the quiz state
let currentQuestionIndex = 0;
let userScore = 0;

// Create a command for starting the quiz
cmd({
    pattern: "startquiz",
    desc: "Start a quiz game.",
    category: "games",
    filename: __filename,
}, async (Void, citel) => {
    currentQuestionIndex = 0;
    userScore = 0;
    sendQuestion(citel);
});

// Function to send the next question
function sendQuestion(citel) {
    if (currentQuestionIndex < quizQuestions.length) {
        const questionObj = quizQuestions[currentQuestionIndex];
        const questionMessage = `${questionObj.question}\n${questionObj.options.join("\n")}`;
        citel.reply(questionMessage);
    } else {
        citel.reply(`Quiz completed! Your score: ${userScore}/${quizQuestions.length}`);
    }
}

// Create a command for answering quiz questions
cmd({
    pattern: /^answer (.+)/i,
    desc: "Answer a quiz question.",
    category: "games",
    filename: __filename,
}, async (Void, citel, text) => {
    const userAnswer = text.trim().toUpperCase();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (currentQuestion && userAnswer === currentQuestion.correctAnswer) {
        userScore++;
    }
    
    currentQuestionIndex++;
    sendQuestion(citel);
});
