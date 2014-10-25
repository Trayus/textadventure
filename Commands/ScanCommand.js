var ScanCommand = function()
{
	this.test = function(text)
	{
		var items = text.split(" ");
		for (var i = 0; i < items.length; i++)
		{
			if (items[i].indexOf("scan") > -1)
			{
				return true;
			}
		}
	}

	this.run = function(text)
	{
		var items = text.split(" ");
		
		if (items.length == 1)
		{
			GeneralScanResult();
			return "";
		}
		else
		{
			var target = world.findTarget(items[1]);
			if (target != null)
			{
				if (target.scan)
				{
					return target.scan();
				}
			}
			else
			{
				return "Cannot scan target.";
			}
		}
	}
}

commands.push(new ScanCommand());