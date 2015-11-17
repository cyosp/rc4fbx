// JavaScript monkey-patching needed for Safari/iOS
String.prototype.startsWith = function( prefix )
{
    return this.indexOf( prefix ) === 0;
}

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
	
	// Manage fast volume buttons
	if( config.fastVolumeButtons == "add" )
	{
		// Reduce width of the standard volume buttons
		$( "#vol_inc" ).parent().removeClass( "col-md-4 col-xs-4" ).addClass( "col-md-2 col-xs-2" );
		$( "#vol_dec" ).parent().removeClass( "col-md-4 col-xs-4" ).addClass( "col-md-2 col-xs-2" );
		
		// Display fast volume buttons
		$( "#long_vol_inc" ).parent().show();
		$( "#long_vol_dec" ).parent().show();
	}
}

function buttonClick()
{
	// Get key
	var key = this.id;
	
	//
	// Manage if key pressed is short or long
	//
	var longPress = false;
	var longPrefix =  "long";
	if( key.startsWith( longPrefix ) )
	{
		longPress = true;
		// Remove long prefix
		key = key.substring( longPrefix.length + 1 , key.length );
	}
	
	// Create URL to call (without key)
	var remoteControlURL = "http://" + config.freeboxHost + "/pub/remote_control?code=" + config.remoteControlCode + "&long=" + longPress + "&key=";

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

