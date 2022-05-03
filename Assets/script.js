const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answersButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log ('start game')
    startButtonButton.classList.add('hide')
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

const questions = [
    {
        question: 'Who is the greatest athlete?',
        answers: [
            {text: 'Ali', correct: true},
            {text: 'Jordan', correct: false},
        ]
    }
]