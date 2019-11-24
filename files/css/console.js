 
var i=0

function checkConsole(){
    if (i === 10) {
	document.getElementById('consoles').innerHTML = "<font face=\"verdana\"><font color=\"#95b806\">[console]</font> console reset<br></font>";
	i=1;
	}
}


// disable rightclick
document.addEventListener("contextmenu", function(disablemouse) {
 disablemouse.preventDefault();
document.getElementById('consoles').innerHTML += "<font face=\"verdana\"><font color=\"#95b806\">[console]</font> context menu is disabled</font><br>";
i += 1;
checkConsole();
}, false);
// disable rightclick

// urls functions
function twitter() {
	document.getElementById('consoles').innerHTML += "<font face=\"verdana\"><font color=\"#95b806\">[console]</font> twitter link was clicked by user</font><br>";
	i += 1;
	checkConsole();
}

function discord() {
	document.getElementById('consoles').innerHTML += "<font face=\"verdana\"><font color=\"#95b806\">[console]</font> discord link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function selly() {
	document.getElementById('consoles').innerHTML += "<font face=\"verdana\"><font color=\"#95b806\">[console]</font> selly link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function youtube() {
	document.getElementById('consoles').innerHTML += "<font face=\"verdana\"><font color=\"#95b806\">[console]</font> youtube link was clicked by user</font><br>";
	i += 1;
checkConsole();
}
// urls functions

// site checker
function checkURL() {
var currentLocation = window.location.href;
	if (currentLocation == "https://darkviewguy.com/") {
		document.getElementById('consola').innerHTML += "<br><font face=\"verdana\"><font color=\"#95b806\">[console]</font> official site<br></font>";
}	
else {
		document.getElementById('consola').innerHTML += "<br><font face=\"verdana\"><font color=\"#95b806\">[console]</font> unverified site current site " + window.location.href + " differs from official site smef.pw<br></font>";
	}
}
// site checker
