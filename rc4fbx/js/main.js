function init()
{
	// Register click on buttons
	$( "button" ).click( buttonClick );
	
	// Manage TV power on with a specific channel
	if( config.channelPower.enabled == "true" )
	{
		// Reduce width of the standard power button
		$( "#power" ).parent().removeClass( "col-md-4 col-xs-4" ).addClass( "col-md-2 col-xs-2" );
		// Add specific channel to the button which allows to TV power on with a specific channel 
		$( "#channelPower" ).append( "&nbsp;" + config.channelPower.channel );
		// Display TV power on with a specific channel button
		$( "#channelPower" ).parent().show();
	}
}

function buttonClick()
{
	// Get key
	var key = this.id;
	
	// Create URL to call (without key)
	var remoteControlURL = "http://" + config.freeboxHost + "/pub/remote_control?code=" + config.remoteControlCode + "&key=";

	// Manage TV power on with a specific channel key
	if( key == "channelPower" )
	{
		// In fact it's a sequence of 3 actions:
		// * Power on the Freebox V6 and wait 6 seconds
		// * Select "OK" and wait 3 seconds
		// * Select the channel in the 0-9 range
	
		// Send power on
		$.get( remoteControlURL + "power" );

		// Wait 6 seconds
		setTimeout( function()
		{
			// Send ok
			$.get( remoteControlURL + "ok" );

			// Wait 3 seconds
			setTimeout( function()
			{
	   			// Send specific channel
				$.get( remoteControlURL + config.channelPower.channel );

			} , 3000 );

		} , 6000 );
	}
	else	// Freebox standard call
	{
		$.get( remoteControlURL + key );
	}
}

