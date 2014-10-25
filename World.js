var possibleNodes = new Array();

var World = function()
{
	var self = this;
	this.map = new Array();
	this.startNode;
	this.endNode;
	
	this.populate = new Function()
	{
		console.log("Populating world");
		
		var numNodes = Math.floor(Math.random() * 4 + 3);
		
		for (var i = 0; i < numNodes && possibleNodes.length > 0; i++)
		{
			self.map.push(possibleNodes.splice(Math.floor(Math.random() * possibleNodes.length), 1)[0]);
		}
		
		// todo link up the nodes so you can travel between them
		
		
		this.startNode = self.map[Math.floor(Math.random() * self.map.length)];
		
		
		console.log(self.map);
		console.log(self.startNode);
		console.log(self.endNode);
	}	
	
	this.preCheck = function()
	{
		for (var i = 0; i < self.map.length; i++)
		{
			self.map[i].preCheck();
		}
	}
	
	this.postCheck = function()
	{
		for (var i = 0; i < self.map.length; i++)
		{
			self.map[i].postCheck();
		}
	}
}