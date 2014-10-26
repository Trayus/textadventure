var Ship = function()
{
	var self = this;
	this.hull = 100;
	this.fuel = 1000;
	this.cloak = "Off";

	this.weapons = {
		lasers: true, // Change these defaults, I left them as true for now
		missiles: true
	}

	this.systems = ["engines", "cloak", "weapons"];
	this.poweredSystem = "engines";

	this.location;

	this.hasWeapon = function(weapon) {
		return self.weapons[weapon];
	}

	this.setWeapon = function(weapon, value) {
		if (self.weapons[weapon])
			self.weapons[weapon] = value;
	}

	this.damageHull = function(amt) {
		self.hull -= amt;
		PrintLog("Hull integrity at " + "%\n");
		if (self.hull <= 0)
			GameOver();
	}
}