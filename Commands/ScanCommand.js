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
		}
		else
		{
			var target = world.findTarget(items[items.length-1]);
			if (target != null)
			{
				if (target.scan)
				{
					target.scan();
				}
			}
			else
			{
				PrintLog("Cannot scan target " + items[items.length-1]);
			}
		}
	}
}

commands.push(new ScanCommand());