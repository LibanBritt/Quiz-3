var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById ('question-container')
var questionElement = document.getElementById('question')
var answersButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log ('start game')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    SetNextQuestion()

}
function SetNextQuestion() {
   showQuestion(shuffledQuestions[currentQuestionIndex]) 
}

function showQuestion(question){
    questionElement.innerText = question.question

}
function selectAnswer() {
    
}

var questions = [
    {
        question: 'Who is the greatest athlete?',
        answers: [
            {text: 'Ali', correct: true},
            {text: 'Jordan', correct: false},
        ]
    }
]