var FireCommand = function()
{
	this.test = function(text)
	{
		if (text.indexOf("fire") > -1 || text.indexOf("shoot") > -1)
		{
			return true;
		}
	}

	this.run = function(text)
	{
		var tokens = text.split(" ");

		if (tokens.length < 2)
			return "Fire command must specify a weapon.\n";

		var weapon = tokens[1];
		if (tokens.length < 3)
			return "Fire command must specify a target.\n";

		var target = world.findTarget(tokens[tokens.length-1]);
		if (!target) 
			return "Invalid target selected.\n";

		var hasWeapon = player.hasWeapon(weapon);
		if (hasWeapon == true) {
			PrintLog("Firing " + weapon + " at " + target.names[0] + "!\n");
			player.setWeapon(weapon, false);
			if (weapon == "lasers") {
				if (target.fireLasers)
					return target.fireLasers();
			}
			else if (weapon == "missiles") {
				if (target.fireMissiles)
					return target.fireMissiles();
			}

			return "... But nothing happened!\n";
		}
		else if (hasWeapon == false) {
			return "No ammunition for " + weapon + "\n";
		}

		return "Unknown weapon " + weapon + "\n";
	}
}

commands.push(new FireCommand());