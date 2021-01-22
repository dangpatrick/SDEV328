/*
    Name: Patrick Dang
    Date: 1/21/2021
    File Name: function.js
 */
document.getElementById("button").onclick = validate;

function validate()
{
    //Create flag variable
    let valid = true;

    //Clear errors
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++)
    {
        errors[i].style.visibility = "hidden";
    }

    //Check Input
    let userInput = document.getElementById("numbers").value;
    if (userInput === "")
    {
        let errNum = document.getElementById("errNum");
        errNum.style.visibility = "visible";
        valid = false;
    }

    if (userInput < 0)
    {
        let errNum = document.getElementById("errNumNeg");
        errNum.style.visibility = "visible";
        valid = false;
    }

    if (Number.isInteger(parseInt(userInput)) === false)
    {
        let errNum = document.getElementById("errNum");
        errNum.style.visibility = "visible";
        valid = false;
    }

    if (valid === true)
    {
        document.write("<p>");

        for(let i = 1; i <= userInput; i++)
        {
            if ((i % 5 === 0) && (i % 3 === 0))//5 and 3
            {
                document.write("Hee Haw! ");
                document.write("<br>");
            }

            else if (i % 3 === 0)//just 3
            {
                document.write("Hee! ");
                document.write("<br>");
            }

            else if (i % 5 === 0)//just 5
            {
                document.write("Haw! ");
                document.write("<br>");
            }

            else
            {
                document.write(i);
                document.write("<br>");
            }
        }
        document.write("</p>");
    }
}
