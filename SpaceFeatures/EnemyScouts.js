var EnemyScouts = function() 
{
	var self = this;
	this.description = "a small group of enemy scouts";
	this.alerted = false;
	this.names = ["enemy scouts", "scouts"];

	this.scan = function() 
	{
		PrintLog("Three enemy scout ships are patrolling along up ahead. They have no weapons, but they're small and agile.\n");
	}

	this.fireLasers = function() 
	{
		self.alerted = true;
		PrintLog("A volley of laser blasts decimates the small scout troupe.  You gather some fuel from their reserves.\n");
	}

	this.fireMissiles = function()
	{
		self.alerted = true;
		PrintLog("Two deadly missiles snake into their ranks, reducing a mid-sized cruiser to space dust.  The fleet is not pleased.\n");
	}
}

spaceNodePossibleFeatures.push(new EnemyScouts());