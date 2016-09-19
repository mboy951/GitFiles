/*jshint multistr:true */

var text = "Omi is the greatest. Omi is not egotistic. You can call Omi."

var myName = "Omi"

var hits = []

for(var i = 0; i <= text.length; i ++)
{
    if(text[i] === "O")
    {
        for(var x = i; x <= i + myName.length; x++)
        {
            hits.push(x);
        }
    }
}
alert(hits);
