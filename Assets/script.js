var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById ('question-container')
var questionElement = document.getElementById('question')
var answersButtonsElement = document.getElementById('answer-buttons')
var shuffledQuestions
var currentQuestionIndex

startButton.addEventListener('click', startGame)

// define a timer function that is a countdown then later ends and takes it to the form screen//

// This should initiate the quiz and pull up the questions
function startGame() {
    console.log ('start game')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    SetNextQuestion()
    // insert timer function
}
// defining the function to shufle the questions (only got 1 rn) 
function SetNextQuestion() {
   showQuestion(shuffledQuestions[currentQuestionIndex]) 
}
// This should replace the text 'questions' on line 13 of my html
function showQuestion(question){
    questionElement.innerText = question.question

}
function selectAnswer() {
    
}
// Defining my questions 
var questions = [
    {
        question: 'What is 2 + 2 ',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
        ]
    }
]

