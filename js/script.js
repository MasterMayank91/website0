/*
	Website 0 "Indardanus"
*/
try
{
	let preloader = document.getElementById("preloader");

	let comment = document.getElementById("comment");

	let main = document.getElementsByTagName("main");

	let header = document.getElementsByTagName("header");

	let button = document.getElementsByTagName("button");

    let input = document.querySelectorAll("input").value;

	main[0].style.display = "none";

	comment.style.display = "none";

	setTimeout(() => {

		preloader.style.display = "none";

		main[0].style.display = "grid";

	}, 0);

	button[0].onclick = function()
	{	
		if(confirm("May You Like Website YES/NO"))
		{
			window.alert("Thanks, DEAR :)");
		}
		else
		{
			window.alert("YOU ARE BREAK MY HEART :(");
		}
	}
	button[2].onclick = function()
	{
		comment.style.display = "grid";

		header[0].style.display = "none";
	}
}
catch(error)
{
	alert("Error : "+error.message);
}