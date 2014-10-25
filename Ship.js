var Ship = function()
{
	this.hull = 100;
	this.fuel = 1000;
	this.cloak = "Off";

	this.hasLasers = false; // temporary default values
	this.hasMissiles = true; // temporary default values

	this.location;
}