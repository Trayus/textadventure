var spaceStationNodePossibleFeatures = new Array();

var SpaceStationNode = function()
{
	var self = this;
	this.possibleFeatures = spaceStationNodePossibleFeatures;
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