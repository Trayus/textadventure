var outputarea;
var inputarea;
var commands = new Array();
var player;
var world;

var Initialize = function()
{
	outputarea = document.getElementById('outputarea');
	inputarea = document.getElementById('inputarea'); 
	
	player = new Ship();
	world = new World();
}

var OnUpdate = function()
{
	var text = inputarea.value;
	
	if (text.indexOf("\n") > -1)
	{
		console.log("detected: " + text);
		
		ParseCommand(text);
		
		inputarea.value = "";
	}
}

var ParseCommand = function(text)
{
	for (var i = 0; i < commands.length; i++)
	{
		try
		{
			if (commands[i].test(text))
			{
				outputarea.innerHTML += Clean(commands[i].run());
			}
		}
		catch(err)
		{
			console.log("command broke: ");
			console.log(com);
		}
	}
	outputarea.scrollTop = outputarea.scrollHeight;
}

var Clean = function(text)
{
	while(text.indexOf("\n") > -1)
		text = text.replace("\n", "<br />");
	
	return text;
}