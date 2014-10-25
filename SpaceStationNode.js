var spaceStationNodePossibleFeatures = new Array();

var SpaceStationNode = function()
{
	this.features = new Array();
	this.links = new Array();
	this.description = "a space station";
	this.names = ["space station", "station"];
	
	this.preCheck = function()
	{
	}
	
	this.postCheck = function()
	{
	}
}

possibleNodes.push(new SpaceStationNode());