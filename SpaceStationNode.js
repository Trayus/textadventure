var spaceStationNodePossibleFeatures = new Array();

var SpaceStationNode = function()
{
	this.features = new Array();
	this.description = "You are near a space station.";
	
	this.preCheck = function()
	{
	}
	
	this.postCheck = function()
	{
	}
}

possibleNodes.push(new SpaceStationNode());