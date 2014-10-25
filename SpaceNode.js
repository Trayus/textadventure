var spaceNodePossibleFeatures = new Array();

var SpaceNode = function()
{
	this.features = new Array();
	this.links = new Array();
	this.description = "open space";
	this.names = ["open space", "space"];
	
	this.preCheck = function()
	{
	}
	
	this.postCheck = function()
	{
	}
}

possibleNodes.push(new SpaceNode());