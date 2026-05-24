const inputEl = document.getElementById("inputValue")
const secretEl = document.getElementById("readOnly")
const messageEl = document.getElementById("combNumber")

const startBtn = document.getElementById("start")
const submitBtn = document.getElementById("submit")
const pointEl = document.getElementById('count')

let randomNumber = Math.floor(Math.random()*100) + 1
let gameIsLive = false

startBtn.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random()*100) + 1
    gameIsLive = true
    secretEl.value = randomNumber
    messageEl.textContent = "Game has started, kindly enter your guess"
    pointEl.textContent = 0
})

submitBtn.addEventListener('click', function(){
    const guess = Number(inputEl.value)
    const secret = Number(secretEl.value)   

    if (!gameIsLive) {
           messageEl.textContent = "Please start the game first!"
           return
    }else if(inputEl.value === ''){
        messageEl.textContent = "Kindly enter a valid input"

    }else if(guess === secret){
        messageEl.textContent = "Congrats player, you nailed it!!"
        pointEl.textContent = Number(pointEl.textContent) + 3
        gameIsLive = false
    }else{
        if(guess > secret){
            messageEl.textContent = "Your guess is too high, try again!"
        }else{
            messageEl.textContent = "Your guess is too low, try again!"
        }
        pointEl.textContent = Number(pointEl.textContent) + 1
    }
    inputEl.value = ''
})

