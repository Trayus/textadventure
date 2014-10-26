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
		return "flying\n\n";
	}
}

commands.push(new FlyCommand());