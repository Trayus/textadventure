var spaceNodePossibleFeatures = new Array();

var SpaceNode = function()
{
	var self = this;
	this.possibleFeatures = spaceNodePossibleFeatures;
	this.features = [];
	this.links = new Array();
	this.description = "open space";
	this.names = ["open space", "space"];

	this.initializeFeatures = function() 
	{
		self.features.push(spaceNodePossibleFeatures[0]); // temporary hard code

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

possibleNodes.push(new SpaceNode());