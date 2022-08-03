/*
    All Right Reserved MAYANK 
    Website 0 Rang
    Script "Dtat 2"
*/
try
{
	// hexadeciaml_data code 
	var hexadecimal_data=[
		'34495e','1abc9c','2ecc71','3498db',
		'2c3e50','16a085','27ae60','2980b9',
		'9b59b6','f1c40f','e67e22','e74c3c',
		'8e44ad','f39c12','d35400','c0392b',
		'ffffff','efefef','ecf0f1','7f8fa6',
		'353b48','273c75','55efc4','74b9ff',
		'2f3640','192a56','00b894','0984e3',
		'a29bfe','feca57','ff7f50','ff7675',
		'6c5ce7','ff9f43','ff6348','d63031',
		'222f3e','1e272e','303952','485460'
	];
	// target mother frame
	let parent =  document.getElementById('frame2');
	// display data
	for(let i = 0; i < hexadecimal_data.length; i++)
	{
		let element = document.createElement('input');

		parent.append(element);

		element.classList.add('colour1');

        element.setAttribute('type','text');
		
		element.value = "#"+hexadecimal_data[i]+"";
		
		element.style.background = "#"+hexadecimal_data[i]+"";

		element.style.padding = "1.5rem";

		element.style.resize = "none";

		element.style.borderRadius = "0";

		element.onclick = function()
		{
			element.select();
			document.execCommand("Copy");
			element.requestFullscreen();

			setTimeout(() => { document.exitFullscreen();}, 1000);
		}
	}
}
catch (error)
{
	alert("Error : Data 2 service is busy");	
}