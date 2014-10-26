var possibleNodes = new Array();

var World = function()
{
	var self = this;
	this.map = new Array();
	this.startNode;
	this.endNode;
	
	this.populate = function()
	{
		console.log("Populating world");
		
		var numNodes = Math.floor(Math.random() * 4 + 3);
		
		for (var i = 0; i < numNodes && possibleNodes.length > 0; i++)
		{
			var node = possibleNodes.splice(Math.floor(Math.random() * possibleNodes.length), 1)[0];

			// For now, I just copy the list of all features and prune till the number
			// we want is remaining
			var featureCount = Math.min(node.possibleFeatures.length, 3);
			var features = node.possibleFeatures.slice(0);
			while (features.length > featureCount) {
				var toRemove = Math.floor(Math.random() * features.length);
				features.splice(toRemove, 1);
			}
			node.features = features;

			console.log(node.names[0] + " features: ", node.features);
			self.map.push(node);
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