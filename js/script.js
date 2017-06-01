/*include jquery*/
document.write("<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>");

document.getElementById("foot01").innerHTML = 
"<p>&copy;  " + new Date().getFullYear() + " KusoDuck. All rights reserved.</p>";

document.getElementById("topNav").innerHTML =
"<ul class='tab'>" +
"<li style='float:right'><a href='javascript:openNav()'>&#9776; </a></li>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='newsfeed.html'>Timeline</a></li>" +
"<li><a href='album.html'>Album</a></li>" +
"<li><a href='customers.html'>Data</a></li>" +
"<li><a href='typhoon.html'>Typhoon</a></li>" +
"</ul>";

document.getElementById("sideNav").innerHTML =
"<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>" +
"<a href='game.html'>Game</a>" +
"<a href='map.html'>Map</a>" +
"<a href='about.html'>About</a>";

function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("main").style.marginRight = "200px";
	document.getElementById("topNav").style.marginRight = "200px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
	document.getElementById("topNav").style.marginRight= "0";
}