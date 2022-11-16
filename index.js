// Your Code Here
let userName = window.prompt ('Please enter your name:')
    console.log(userName, ", welcome to my trivia game!")
    let userScore = 0
    let playAgain = true

function playGame() {   
    for (let i = 0; i < questions.length; i++) {
            let question = questions [i]
            let userAnswer = window.prompt(question.text, "Enter the Capitalized Letter of your Selection")
            console.log("question #", i + 1)    
            console.log("The answer is:", userAnswer)

                    if (userAnswer === question.correctAnswer) {
                        console.log('Correct')
                        userScore = userScore +10  
                        } else {
                            console.log('false')
                        }


    }
    window.alert ('Your score is: ' + userScore)
    if (userScore < 70) {
        window.alert ("loser! You scored less than 70 points. You should try again")
        } else {
            window.alert ("Winner! Winner! Chicken dinner!  You scored above 70.  You passed.")
        }  
    

}

while (playAgain === true) {
    playGame()
            let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')

                if (userChoice === 'yes') {
                        playAgain = true
                    } else {
                        playAgain = false
                        window.alert ('Thanks for playing the game!')
                    }


}
