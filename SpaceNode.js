var spaceNodePossibleFeatures = new Array();

var SpaceNode = function()
{
	var self = this;
	this.possibleFeatures = spaceNodePossibleFeatures;
	this.features = [];
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