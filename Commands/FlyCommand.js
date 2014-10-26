var FlyCommand = function()
{
	this.test = function(text)
	{
		if (text.indexOf("fly") > -1)
		{
			return true;
		}
	}

	this.run = function(text)
	{
		var tokens = text.split(" ");
		// current location
		var loc = player.featureAt;
		if (loc) {
			if (loc.flyAway) {
				// Should return whether or not you can actually escape
				if (!loc.flyAway())
					return;
			}
		}
		// destination
		var target = world.findTarget(tokens[tokens.length-1]);
		if (target) {
			// THIS ONLY WORKS FOR FLYING BETWEEN FEATURES.  
			// TODO: GET NODES WORKED OUT TOO.

			PrintLog("Flying to " + target.names[0] + "\n");
			player.featureAt = target;
			if (target.flyTo) {
				target.flyTo();
			}
		}
		else {
			PrintLog("Unknown destination " + tokens[length-1] + "\n");
		}
	}
}

commands.push(new FlyCommand());