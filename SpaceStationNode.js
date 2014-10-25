var spaceStationNodePossibleFeatures = new Array();

var SpaceStationNode = function()
{
	var self = this;
	this.features = new Array();
	this.links = new Array();
	this.description = "a space station";
	this.names = ["space station", "station"];
	
	this.initializeFeatures = function() 
	{
		// todo procedurally generate features; we can put this function elsewhere but
		// it'll need to know to use the array declared at the top of this file
	}

	this.preCheck = function()
	{
	}
	
	this.postCheck = function()
	{
	}
}

possibleNodes.push(new SpaceStationNode());