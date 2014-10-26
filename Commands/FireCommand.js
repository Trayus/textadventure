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

		if (tokens.length < 2) {
			PrintLog("Fire command must specify a weapon.\n");
		}

		var weapon = tokens[1];
		if (tokens.length < 3) {
			PrintLog("Fire command must specify a target.\n");
		}

		var target = world.findTarget(tokens[tokens.length-1]);
		if (!target) {
			PrintLog("Invalid target selected.\n");
		}

		var hasWeapon = player.hasWeapon(weapon);
		if (hasWeapon == true) {
			PrintLog("Firing " + weapon + " at " + target.names[0] + "!\n");
			player.setWeapon(weapon, false);
			if (weapon == "lasers") {
				if (target.fireLasers) {
					target.fireLasers();
					return;
				}
			}
			else if (weapon == "missiles") {
				if (target.fireMissiles) {
					target.fireMissiles();
					return;
				}
			}

			// If we fired but still haven't returned
			PrintLog("... But nothing happened!\n");
		}
		else if (hasWeapon == false) {
			PrintLog("No ammunition for " + weapon + "\n");
			return;
		}

		PrintLog("Unknown weapon " + weapon + "\n");
	}
}

commands.push(new FireCommand());