function init()
{
	// Register click on buttons
	$( "button" ).click( buttonClick );
}

function buttonClick()
{
	// Get key
	var key = this.id;
	
	// Create URL to call
	var remoteControlURL = "http://" + config.freeboxHost + "/pub/remote_control?key=" + key + "&code=" + config.remoteControlCode;

	// Call Freebox
	$.get( remoteControlURL );
}

