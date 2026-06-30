// Constants 
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



// Variables
let turn = 1
let p1Score = 0
let p2Score = 0
let winner = false
let tie = false
let winnerName
let time = 60
let questionIndex = 0

//local Storage


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
setInterval(() => {
    if (time > 0) {
        time--
        showTimer.textContent = time
    }

}, 1000)





// Event Listener




