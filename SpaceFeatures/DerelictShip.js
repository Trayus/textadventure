var DerelictShip = function() 
{
	var self = this;
	this.description = "the wreckage of an old ship";
	this.destroyed = false;
	this.names = ["derelict ship", "wreckage", "shipwreck", "ship"];

	this.scan = function() 
	{
		if (self.destroyed)
			PrintLog("Nothing more than a cloud of space dust remains.\n");
		else
			PrintLog("The hollow remains of a derelict ship float ominously in front of you.\n");	
	}

	this.fireLasers = function() 
	{
		self.alerted = true;
		PrintLog("The wreckage splits and crumbles, dissolving into dust.  Was that really necessary?\n");
	}

	this.fireMissiles = function()
	{
		self.alerted = true;
		PrintLog("Two missiles surge towards the wreckage and destroy what's left of it in a dazzling explosion.  Now it's pretty much gone.\n");
	}
}

spaceNodePossibleFeatures.push(new DerelictShip());