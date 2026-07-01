// Constants 

// Index Page
const player1Name = document.querySelector('#player1-name')
const player2Name = document.querySelector('#player2-name')
const difficultyBtn = document.querySelectorAll('.difficulty-button')
const startBtn = document.querySelector('#start-btn')

// Game Page
const quitGameBtn = document.querySelector('#quit-btn')
const showResultsBtn = document.querySelector('#results-btn')
const backHome = document.querySelector('#back-home-btn')
const showTimer = document.querySelector('#timer')
const qeustion = document.querySelector('#question')
const optAll = document.querySelectorAll('.opt')
const op1 = document.querySelector('#option1-btn')
const op2 = document.querySelector('#option2-btn')
const op3 = document.querySelector('#option3-btn')
const op4 = document.querySelector('#option4-btn')
const playerTurnElement = document.querySelector('#player-turn')

// Result Page 
const backbtnElement = document.querySelector('#back-home-btn')
const winnerNameElement = document.querySelector('#winner-name')
const p1ScoreElement = document.querySelector('#player1-score')
const p2ScoreElement = document.querySelector('#player2-score')
const qeustionReviewElement = document.querySelector('#questions-answers')


// Variables
let turn = 1
let p1Score = 0
let p2Score = 0
let tie = false
let winnerName = null
let time = 60
let questionIndex = 0
let difficultyLevel = null

//Local Storage
const player1NameSaved = localStorage.getItem('player1Name')
const player2NameSaved = localStorage.getItem('player2Name')
const p1ScoreSaved = localStorage.getItem('p1Score')
const p2ScoreSaved = localStorage.getItem('p2Score')
const tieSaved = localStorage.getItem('tie')
const winnerNameSaved = localStorage.getItem('winnerName')
const difficultyLevelSaved = localStorage.getItem('difficultyLevel')


//Arrays 
const easyQuestion = [
    {
        question: 'Which tag creates a <_> paragraph in HTML?',
        option1: '<div>',
        option2: '<p>',
        option3: '<span>',
        option4: '<h1>',
        rightAnswer: '<p>'
    },
    {
        question: 'Complete: <___ rel="stylesheet" href="style.css">',
        option1: '<script>',
        option2: '<style>',
        option3: '<link>',
        option4: '<css>',
        rightAnswer: '<link>'
    },
    {
        question: 'color: ___; — what goes here to make text red?',
        option1: 'font-color: red',
        option2: 'red',
        option3: 'text-red',
        option4: 'background: red',
        rightAnswer: 'red'
    },
    {
        question: '___ { color: blue; } — select by id="title"',
        option1: '.title',
        option2: '#title',
        option3: 'title',
        option4: '*title',
        rightAnswer: '#title'
    },
    {
        question: '___ x = 5; — declare a constant',
        option1: 'var',
        option2: 'let',
        option3: 'const',
        option4: 'constant',
        rightAnswer: 'const'
    }
]

const medQuestion = [
    {
        question: '<button ___>Click</button> — disable the button',
        option1: 'inactive',
        option2: 'disabled',
        option3: 'enabled="false"',
        option4: 'off',
        rightAnswer: 'disabled'
    },
    {
        question: 'display: ___; — make a flex container',
        option1: 'block',
        option2: 'flex',
        option3: 'grid',
        option4: 'inline',
        rightAnswer: 'flex'
    },
    {
        question: 'flex-direction: ___; — stack items vertically',
        option1: 'horizontal',
        option2: 'row',
        option3: 'column',
        option4: 'vertical',
        rightAnswer: 'column'
    },
    {
        question: "document.getElementById('btn').___('click', function)",
        option1: 'addEvent',
        option2: 'on',
        option3: 'addEventListener',
        option4: 'listen',
        rightAnswer: 'addEventListener'
    },
    {
        question: 'for (let i = 0; i ___ 5; i++) { } — loop 5 times',
        option1: '==',
        option2: '<',
        option3: '>',
        option4: '!=',
        rightAnswer: '<'
    }
]

const hardQuestion = [
    {
        question: '<script ___ src="app.js"> — run after HTML loads',
        option1: 'async',
        option2: 'defer',
        option3: 'late',
        option4: 'onload',
        rightAnswer: 'defer'
    },
    {
        question: 'box-sizing: ___; — include padding in width',
        option1: 'content-box',
        option2: 'border-box',
        option3: 'padding-box',
        option4: 'full-box',
        rightAnswer: 'border-box'
    },
    {
        question: 'justify-content: ___; — space between flex items',
        option1: 'flex-start',
        option2: 'align-items',
        option3: 'center',
        option4: 'space-between',
        rightAnswer: 'space-between'
    },
    {
        question: 'setInterval(fn, ___) — run every 1 second',
        option1: '1',
        option2: '100',
        option3: '1000',
        option4: '60',
        rightAnswer: '1000'
    },
    {
        question: 'array.___(function(item) { return item > 5; }) — keep only items greater than 5',
        option1: 'map',
        option2: 'filter',
        option3: 'forEach',
        option4: 'reduce',
        rightAnswer: 'filter'
    }
]


// Functions 

// Checks if the Player Names are Entered and if the Difficulty is Selected 
function checkForPAndD() {
    if (player1Name.value != '' && player2Name.value != '' && difficultyLevel != null) {
        startBtn.disabled = false
    }
}

// Check For Difficulty Selected
function difficultyLevelSelection(event) {
    if (event.target.textContent === 'Easy') {
        difficultyLevel = 'Easy'
    }
    else if (event.target.textContent === 'Medium') {
        difficultyLevel = 'Medium'
    }
    else {
        difficultyLevel = 'Hard'
    }
    checkForPAndD()
}

// Go the Game Page and Saves the Player Names
function goToGame() {
    localStorage.setItem('player1Name', player1Name.value)
    localStorage.setItem('player2Name', player2Name.value)
    localStorage.setItem('difficultyLevel', difficultyLevel)

    window.location.href = "./html/gamePage.html"
}

//Get the Difficulty of the Qeustions
function getQeustionsDifficulty() {
    if (difficultyLevelSaved === 'Easy') {
        return easyQuestion
    }
    else if (difficultyLevelSaved === 'Medium') {
        return medQuestion
    }
    else {
        return hardQuestion
    }
}

// Shows Qeustions in Game Page 
function showQeustions() {
    const qeustionsToShow = getQeustionsDifficulty()
    if (turn === 1) {
        playerTurnElement.textContent = `It's ${player1NameSaved}'s turn`
    }
    else {
        playerTurnElement.textContent = `It's ${player2NameSaved}'s turn`
    }
    qeustion.textContent = qeustionsToShow[questionIndex].question
    op1.textContent = qeustionsToShow[questionIndex].option1
    op2.textContent = qeustionsToShow[questionIndex].option2
    op3.textContent = qeustionsToShow[questionIndex].option3
    op4.textContent = qeustionsToShow[questionIndex].option4
}

// Switch Turns 
function switchTurn() {
    if (turn === 1) {
        turn = 2
    }
}

// Checks if the Player turn in Done 
function checkEndOfTurn() {
    const qeustionsToShow = getQeustionsDifficulty()
    if (questionIndex === qeustionsToShow.length && turn === 1 || time === 0 && turn === 1) {
        questionIndex = 0
        time = 60
        switchTurn()
    }
    else if (questionIndex === qeustionsToShow.length && turn === 2 || time === 0 && turn === 2) {
        checkForWinner()
    }
}

// Check Who is the Winner or if it's a Tie
function checkForWinner() {
    if (p1Score === p2Score) {
        tie = true
    }
    else if (p1Score > p2Score) {
        winnerName = player1NameSaved
    }
    else { winnerName = player2NameSaved }
}

// Check if the Clicked Option is right 
function handleOptionsClick(event) {
    const qeustionsToShow = getQeustionsDifficulty()
    if (event.target.textContent === qeustionsToShow[questionIndex].rightAnswer) {
        if (turn === 1) {
            p1Score++
        }
        else {
            p2Score++
        }
    }
    questionIndex++
    checkEndOfTurn()
    checkIfFinshed()
    if (winnerName == null && tie == false) {
        showQeustions()
    }
}

// Checks if the Game is Finshed and Show the Result Button
function checkIfFinshed() {
    if (winnerName != null || tie != false) {
        showResultsBtn.hidden = false
        localStorage.setItem('p1Score', p1Score)
        localStorage.setItem('p2Score', p2Score)
        localStorage.setItem('winnerName', winnerName)
        localStorage.setItem('tie', tie)
    }
}

// Show the Saved Results Information in the Result Page
function showSavedResults() {
    console.log(winnerNameSaved)
    if (!winnerNameSaved || winnerNameSaved !== 'null') {
        winnerNameElement.textContent = `Congrats ${winnerNameSaved}!!`
    }
    else if (winnerNameSaved === 'null') {
        winnerNameElement.textContent = 'It\'s a Tie !'
    }

    p1ScoreElement.textContent = `${player1NameSaved}'s Score is ${p1ScoreSaved}`
    p2ScoreElement.textContent = `${player2NameSaved}'s Score is ${p2ScoreSaved}`
}

// Show the Questions to Review in the Result Page
function displayQuestions() {
    const questions = getQeustionsDifficulty()

    questions.forEach((question) => {
        const newElement = document.createElement('p')
        console.log(question)

        newElement.textContent = `Question: ${question.question} \nAnswer: ${question.rightAnswer}`
        newElement.style.fontSize = '15px'
        newElement.style.fontFamily = '"Fira Code", monospace'
        newElement.style.color = '#58a6ff'
        newElement.style.marginBottom = '13px'
        newElement.style.padding = '5px'
        newElement.style.whiteSpace = 'pre-line'
        qeustionReviewElement.appendChild(newElement)
    })
}


// Functions Call
if (showTimer) {
    setInterval(() => {
        if (time > 0) {
            time--
            showTimer.textContent = time
        }
        else {
            if (turn == 1) {
                checkEndOfTurn()
                showQeustions()
            }
        }

    }, 1000)
}

if (qeustion) {
    showQeustions()
}

if (p1ScoreElement && p2ScoreElement) {
    showSavedResults()
}

if (qeustionReviewElement) {
    displayQuestions()
}

// Event Listeners
optAll.forEach(element => element.addEventListener('click', handleOptionsClick))

if (player1Name && player2Name) {
    player1Name.addEventListener('input', checkForPAndD)
    player2Name.addEventListener('input', checkForPAndD)
}
difficultyBtn.forEach(element => element.addEventListener('click', difficultyLevelSelection))
if (startBtn) {
    startBtn.addEventListener('click', goToGame)
}
if (quitGameBtn) {
    quitGameBtn.addEventListener('click', (event) => window.location.href = "../index.html")
}

if (showResultsBtn) {
    showResultsBtn.addEventListener('click', (event) => window.location.href = "./resultsPage.html")
}

if (backbtnElement) {
    backbtnElement.addEventListener('click', (event) => window.location.href = "../index.html")
}