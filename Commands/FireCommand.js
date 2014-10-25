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
			return "Fire command must specify a weapon."

		console.log(tokens[1]);
		if (tokens[1].indexOf("lasers") > -1)
		{
			if (player.hasLasers)
			{
				return "firing lasers";
			}
		}
		else if (tokens[1] == "missiles") 
		{
			if (player.hasMisiles)
			{
				return "firing missiles";
			}
		}
		else 
		{
			return "Unknown weapon type.";
		}
	}
}

commands.push(new FireCommand());