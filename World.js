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
			var newNode = possibleNodes.splice(Math.floor(Math.random() * possibleNodes.length), 1)[0];
			newNode.initializeFeatures();
			self.map.push(newNode);
		}
		
		for (var i = 0; i < self.map.length; i++)
		{
			for (var j = i + 1; j < self.map.length; j++)
			{
				if (Math.random() > 0.3 && self.map[i].links.indexOf(self.map[j]) < 0)
				{
					self.map[i].links.push(self.map[j]);
					self.map[j].links.push(self.map[i]);
				}
			}
		}
		for (var i = 0; i < self.map.length; i++)
		{
			if (self.map[i].links.length == 0)
			{
				var ndx = Math.floor(Math.random() * self.map.length);
				while (ndx == i)
					ndx = Math.floor(Math.random() * self.map.length);
				
				self.map[i].links.push(self.map[ndx]);
				self.map[ndx].links.push(self.map[i]);
			}
		}
		
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

	this.findTarget = function(targetName) 
	{
		for (var i = 0; i < player.location.features.length; i++)
		{
			var feature = player.location.features[i];
			for (var j = 0; j < feature.names.length; j++)
			{
				if (targetName.indexOf(feature.names[j]) > -1)
					return feature;
			}
		}
		return null;
	}
}