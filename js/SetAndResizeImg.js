var tmp_h;
var tmp_w;
var position_top;
var position_left;
var rate = 0;
var size = $(".imgBox").width();
$(".imgBox").css("height",size+"px");

$(document).ready(function(){
	console.log("document is ready"); 
	resizeImg();
});

$(".photo")
    .on('load', function() {
		console.log("image loaded correctly"); 
		resizeImg();
	})
    .on('error', function() { console.log("error loading image"); })
;

//視窗改變
window.onresize = function(event) {
	resizeImg();
};

//main 有trans
document.getElementById("main").addEventListener("transitionend", resizeImg);

function resizeImg(){
	size = $(".imgBox").width();
	$(".imgBox").css("height",size+"px");
	
	$(".photo").each(
		function(){
			//jquery取得原始長寬
			var h = $(this).height();
			var w = $(this).width();
			
			if(w>h){
				rate = h/size;
				tmp_h = size;
				tmp_w = parseInt(w/rate,10);
			}
			else if(h>w){
				rate = w/size;
				tmp_h = parseInt(h/rate,10);
				tmp_w = size;
			}
			
			$(this).css("max-height", tmp_h+"px");
			$(this).css("max-width", tmp_w+"px");
			
			position_top = parseInt(0 - (tmp_h - size)/2,10);
			position_left = parseInt(0 - (tmp_w - size)/2,10);
			
			$(this).css("top", position_top+"px");
			$(this).css("left", position_left+"px");
		}
	);
}

