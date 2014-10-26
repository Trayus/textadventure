var Nebula = function() 
{
	var self = this;
	this.description = "a nebula";
	this.names = ["nebula"];
	this.onFire = false;

	this.scan = function() 
	{
		if (self.onFire) {
			PrintLog("The nebula is burning brightly.\n");
		}
		else {
			PrintLog("The nebula is a swirling mist of dust and gasses.\n");
		}
	}

	this.fireLasers = function() 
	{
		self.onFire = true;
		// todo alert enemies? destroy enemies?
		PrintLog("The tumult of gasses in the nebula ignite in a glorious blaze!\n");
	}
}

spaceNodePossibleFeatures.push(new Nebula());