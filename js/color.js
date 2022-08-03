/*
    All Right Reserved MAYANK 
    Website 0 Rang
    Script "Dtat 1"
*/
try
{
    let header = document.getElementsByTagName("header");

    let btn = document.getElementById("btn");

    let label = document.getElementsByClassName("label");

    var hexdecimal, color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    btn.onclick = function()
    {
        hexdecimal = "#";

        for (var i = 0;i < 6;i++)
        {
            hexdecimal += color[setColor()];
        }
        header[0].style.backgroundColor = hexdecimal;

        this.innerText = hexdecimal;

        label[0].innerText = "Background : "+header[0].style.backgroundColor;
    }
    function setColor()
    {
        return Math.floor(Math.random() * color.length);
    }
}
catch (error)
{
	alert("Error : Data 1 service is busy");	
}