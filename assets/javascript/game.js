let teamOneShootButton = document.querySelector ("#teamone-shoot-button")
let teamOneNumShots = document.querySelector ("#teamone-numshots")
let teamOneNumGoals = document.querySelector ("#teamone-numgoals")


teamOneShootButton.addEventListener ("click", function() {
    let currentShots = teamOneNumShots.innerHTML
    let newShots = parseInt (currentShots) + 1
    teamOneNumShots.innerHTML = newShots

    let goals = 2
    let currentGoals = teamOneNumGoals.innerHTML
    let newGoals = parseInt(currentGoals) + 1
    if (Math.floor(Math.random() * 11) >= goals) {
        teamOneNumGoals.innerHTML = newGoals
    }
})

let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoNumShots = document.querySelector("#teamtwo-numshots")
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")

teamTwoShootButton.addEventListener ("click", function() {
    let currentShots = teamTwoNumShots.innerHTML
    let newShots = parseInt(currentShots) +1
    teamTwoNumShots.innerHTML = newShots

    let goal = 5
    let currentGoals = teamTwoNumGoals.innerHTML
    let newGoals = parseInt(currentGoals) +1
    teamTwoNumGoals.innerHTML = newGoals

    if (Math.floor(Math.random() *11) >= goal) {
        teamTwoNumGoals.innerHTML = newGoals 
    }
})

let resetButton = document.querySelector ("#reset-button")
let numberOfResets = document.querySelector ("#num-resets")

resetButton.addEventListener ("click", function() {
    let currentResets = numberOfResets.innerHTML
    let newResets = parseInt(currentResets) + 1
    numberOfResets.innerHTML = newResets

    teamOneNumShots.innerHTML = 0
    teamTwoNumShots.innerHTML = 0
    teamOneNumGoals.innerHTML = 0
    teamTwoNumGoals.innerHTML = 0
})

