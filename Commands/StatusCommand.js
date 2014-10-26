var StatusCommand = function()
{
	this.test = function(text)
	{
		if (text.indexOf("status") > -1)
		{
			return true;
		}
	}

	this.run = function(text)
	{
		PrintLog("Fuel: " + player.fuel + 
			"\nHull integrity: " + player.hull + 
			"\nCloak status: " + player.cloak + 
			"\nWeapons: " + (player.hasWeapon("lasers") ? "[Lasers] " : "") +
				(player.hasWeapon("missiles") ? "[Missiles] " : "") +
			"\n\n");
	}
}

commands.push(new StatusCommand());