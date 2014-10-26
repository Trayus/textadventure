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
	PrintLog("\n> " + text);

	var i;
	for (i = 0; i < commands.length; i++)
	{
		// try
		// {
			text = text.toLowerCase();
			if (commands[i].test(text))
			{
				world.preCheck(text);
				commands[i].run(text);
				world.postCheck(text);
				
				break;
			}
		// }
		// catch(err)
		// {
		// 	console.log("command broke: ");
		// 	console.log(err);
		// }
	}
	
	if (i == commands.length)
	{
		outputarea.innerHTML += Clean("Please enter a valid command.\n");
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
	PrintLog("Boot sequence initiated.\n");
	PrintLog("Core systems online.  \n");
	PrintLog("Engines online. Initiating secondary systems.\n");
	PrintLog("Weapons online.  [No ammunition/Missiles/Laser cores/Mines] loaded.\n");
	PrintLog("Cloaking systems online.\n");
	PrintLog("Scanning systems online.\n\n");
	PrintLog("Power reserves detected.  Reserve power can be routed to secondary systems.\n");
	PrintLog("Loading Human Personality Simulation Unit build 1.0.13.4.\n");
	PrintLog("Connecting to Human Personality Simulation Unit...\n");
	PrintLog("Connection established.  Sending greeting message.\n\n");
	PrintLog("-------------------------------------------------------------------------\n\n");
	PrintLog("Greetings, virtual human!  You are a highly advanced personality simulation device, designed to delegate commands and make moral decisions.  \n");
	PrintLog("You will be commanding the prototype stealth vessel GIVE-IT-A-NAME-OR-SOMETHING-I-GUESS.\n");
	PrintLog("Your mission is to destroy [the enemy base at planet WHATEVER/the enemy warship WHATEVER/the enemy fleet in WHATEVER system/etc.]\n");
	PrintLog("Your memory unit has been preloaded with the basic commands for interfacing with this vessel. [commands list appears beside the console]\n");

	GeneralScanResult();
}

var PrintLog = function(text)
{
	outputarea.innerHTML += Clean(text);
} 

var GeneralScanResult = function()
{
	PrintLog("Current location: " + 
		(player.featureAt ? player.featureAt.names[0] + ", " : "") +
		player.location.description + 
		".\nIn the distance, your scanners detect ");
	for (var i = 0; i < player.location.links.length; i++)
	{
		PrintLog(player.location.links[i].description);
		if (i + 1 != player.location.links.length)
			PrintLog(", ");
	}
	PrintLog(".\nNearby, your scanners detect ");
	for (var i = 0; i < player.location.features.length; i++)
	{
		PrintLog(player.location.features[i].description);
		if (i + 1 != player.location.features.length)
			PrintLog(", ");
	}
	PrintLog(".\n");
}

var GameOver = function()
{
	PrintLog("NOOOOOOOOOO!!!!\n\n\n");
	commands = [];
}