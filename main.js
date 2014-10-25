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
	world.populate();	
	player.location = world.startNode;
	
	PrintFirstRunText();
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
	var i;
	for (i = 0; i < commands.length; i++)
	{
		try
		{
			if (commands[i].test(text))
			{
				world.preCheck(text);
				outputarea.innerHTML += Clean(commands[i].run(text));
				world.postCheck(text);
				
				break;
			}
		}
		catch(err)
		{
			console.log("command broke: ");
			console.log(com);
		}
	}
	
	if (i == commands.length)
	{
		outputarea.innerHTML += Clean("Please enter a valid command.");
	}
	
	outputarea.scrollTop = outputarea.scrollHeight;
}

var Clean = function(text)
{
	while(text.indexOf("\n") > -1)
		text = text.replace("\n", "<br />");
	
	return text;
}

var PrintFirstRunText = function()
{
	PrintLog("Welcome, AI!\n");
	PrintLog("Your mission is to do something...\n");
	GeneralScanResult();
}

var PrintLog = function(text)
{
	outputarea.innerHTML += Clean(text);
} 

var GeneralScanResult = function()
{
	PrintLog("You are in " + player.location.description + ".\nIn the distance you see ");
	for (var i = 0; i < player.location.links.length; i++)
	{
		PrintLog(player.location.links[i].description);
		if (i + 1 != player.location.links.length)
			PrintLog(", ");
	}
	PrintLog(".\n");
}