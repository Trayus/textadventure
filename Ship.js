var Ship = function()
{
	var self = this;
	this.hull = 100;
	this.fuel = 1000;
	this.cloak = "Off";

	this.weapons = {
		lasers: true,
		missiles: true
	}

	this.location;

	this.hasWeapon = function(weapon) {
		return self.weapons[weapon];
	}

	this.setWeapon = function(weapon, value) {
		if (self.weapons[weapon])
			self.weapons[weapon] = value;
	}
}