var EnemyFleet = function() 
{
	var self = this;
	this.description = "an enemy fleet";
	this.alerted = false;
	this.names = ["enemy fleet", "fleet"];

	this.scan = function() 
	{
		PrintLog("A vast collection of enemy warships sprawls out against the starscape in front of you.\n");
	}

	this.fireLasers = function() 
	{
		self.alerted = true;
		PrintLog("Laser fire blazes into their ranks, glancing off the shields of a hulking dreadnaught.  The fleet is not pleased.\n");
	}

	this.fireMissiles = function()
	{
		self.alerted = true;
		PrintLog("Two deadly missiles snake into their ranks, reducing a small cruiser to space dust.  The rest of the fleet is not pleased.\n");
	}
}

spaceNodePossibleFeatures.push(new EnemyFleet());