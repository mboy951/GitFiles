// Check if the user is ready to play!
var ready = prompt("Are you ready to play? (Yes or No)")
if (ready === "yes")
{
    confirm("Are you sure?")
    var age = confirm("Are you older than 13 years of age?")
if(age === false)
{
    console.log("get outta here")
}
else
{
    console.log("Play on :D")
        console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
    console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")
    var userAnswer = prompt("Do you wanna race Beiber on stage?")
    if (userAnswer === "Yes")
    {
        console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
    }
    else
    {
        console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
    }
    var feedback = prompt("how was it gee? (out of 10)")
    if(parseInt(feedback) > 8)
    {
        console.log("aw thanks nigga")
    }
    else
    {console.log("I'll keep practicing coding and racing")}
}


}
else
{
    console.log("poop")
}
