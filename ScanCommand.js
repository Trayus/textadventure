var ScanCommand = function()
{
	this.test = function(text)
	{
		if (text.indexOf("scan") > -1)
		{
			return true;
		}
	}

	this.run = function()
	{
		return "scanned\n\n";
	}
}

commands.push(new ScanCommand());