/*
    All Right Reserved MAYANK 
    Website 0 Rang
    Script "Dtat 3"
*/
try
{
    var colorname_data=[
        'black','darkslategray','slategray','lightslategray','dimgray',
        'gray','darkgray','silver','lightgray','gainsboro','lavender',
        'lavenderblush','floralwhite','snow','white','ghostwhite','seashell',
        'antiquewhite','mintcream','aliceblue','azure','honeydew','linen',
        'papayawhip','mistyrose','thistle','pink','lightpink','deeppink',
        'fuchsia','magenta','mediumvioletred','hotpink','plum','violet','orchid',
        'mediumorchid','darkorchid','darkviolet','darkmagenta','purple','indigo',
        'blueviolet','mediumpurple','rebeccapurple','slateblue','mediumslateblue',
        'darkslateblue','midnightblue','blue','mediumblue','darkblue','navy',
        'royalblue','cornflowerblue','lightsteelblue','steelblue','dodgerblue',
        'deepskyblue','darkturquoise','turquoise','cyan','aqua','aquamarine',
        'lightcyan','paleturquoise','powderblue','lightblue','skyblue',
        'lightskyblue','cadetblue','mediumturquoise','lightseagreen','darkcyan',
        'teal','darkseagreen','mediumaquamarine','mediumspringgreen','springgreen',
        'lightgreen','palegreen','green','darkgreen','forestgreen','seagreen',
        'mediumseagreen','limegreen','yellowgreen','greenyellow','lawngreen',
        'chartreuse','lime','olivedrab','darkolivegreen','olive','darkgoldenrod',
        'goldenrod','yellow','gold','orange','darkorange','orangered','chocolate',
        'indianred','palevioletred','salmon','darksalmon','lightsalmon','coral',
        'tomato','red','crimson','darkred','maroon','firebrick','brown','rosybrown',
        'sienna','saddlebrown','peru','sandybrown','burlywood','tan','wheat',
        'navajowhite','bisque','moccasin','peachpuff','cornsilk','ivory',
        'blanchedalmond','darkkhaki','khaki','palegoldenrod','lightgoldenrodyellow',
        'lemonchiffon','lightyellow','beige'
    ];

    // target mother frame
	let parent =  document.getElementById('frame3');
	// display data
	for(let i = 0; i < colorname_data.length; i++)
	{
		let element = document.createElement('input');

		parent.append(element);

        element.setAttribute('type','text');

		element.classList.add('colour2');

		element.value = ""+colorname_data[i]+"";
		
		element.style.background = ""+colorname_data[i]+"";
		
		// element.style.color = "transparent";

		element.style.padding = "1rem";

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
    alert("ERROR : colorname JS file problem");
}