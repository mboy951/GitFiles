var rps = function(choice)
{
    var computerChoice = Math.random()
    if (choice === "rock")
    {
        if(computerChoice < 0.33)
        {
            alert( "It's a tie!")
        }
        else if(computerChoice < 0.66)
        {
            alert( "You win!")
        }
        else
        {
            alert( "You lose!")
        }
    }
    else if(choice === "paper")
    {
       if(computerChoice < 0.33)
        {
            alert( "It's a tie!")
        }
        else if(computerChoice < 0.66)
        {
            alert( "You win!")
        }
        else
        {
            alert( "You lose!")
        }
    }
    else
    {
        if(computerChoice < 0.33)
        {
            alert( "It's a tie!")
        }
        else if(computerChoice < 0.66)
        {
            alert( "You win!")
        }
        else
        {
            alert( "You lose!")
        }
    }
};

rps(prompt("choice: "));
