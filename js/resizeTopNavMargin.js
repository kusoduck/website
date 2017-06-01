$(document).ready(function(){
	if($(window).width()<450){
		document.getElementById("topNav").style.marginBottom = "100px";
	}
	else
		document.getElementById("topNav").style.marginBottom = "50px";
});
//µøµ¡§ïÅÜ
window.onresize = function(event) {
	console.log(screen.width);
	if($(window).width()<450){
		document.getElementById("topNav").style.marginBottom = "100px";
	}
	else
		document.getElementById("topNav").style.marginBottom = "50px";
};
