var Nebula = function() 
{
	var self = this;
	this.description = "a nebula";
	this.names = ["nebula"];
	this.onFire = false;

	this.scan = function() 
	{
		if (self.onFire) {
			return "The nebula is burning brightly.\n";
		}
		else {
			return "The nebula is a swirling mist of dust and gasses.\n";
		}
	}

	this.target = function() 
	{
		player.target = self;
	}

	this.fireLasers = function() 
	{
		self.onFire = true;
		return "The swiriling gases in the nebula ignite in a glorious blaze!";
	}
}

spaceNodePossibleFeatures.push(new Nebula());