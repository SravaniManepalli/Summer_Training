var secretNumber = Math.floor(Math.random() * 100) + 1;
i=1
while (i<=5)
    
{    
    if(i==1)
    alert("You have only 5 attempts to guess the number correctly. Use your guesses wisely!")
    user_guess=parseInt(prompt(`Chance ${i}, Guess the secret number` ))
    if(user_guess==secretNumber)
        alert(`Congratulations,You have guessed the correct number in chance ${i}!!`)
    else if(user_guess!=secretNumber && i==5)
    alert(`Game over! The correct number was ${secretNumber}.`)
    else if(user_guess>secretNumber)
        alert(`The number is high.Guess a lower number than ${user_guess}.`)
    else
                alert(`The number is low.Guess a greater number than ${user_guess}.`)
    i++

}
