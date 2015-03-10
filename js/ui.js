$(document).ready(function(){

	var position = 0;
	// Splash Section
	var splash = $(".splash");
	var splashContainer = splash.find(".container");
	var splashOffset = splash.height() - 50;
	var splashBackground = splash.find(".background");
	var splashBackgroundOverlay = splash.find(".background-overlay");
	var splashOverlayOpacity;
	var arrow = $(".arrow");

	$(".arrow").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: splash.height()/2 }, 200);
	});

	// Mobile device tap hover
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".project").on("click", function (e) {
		    var project = $(this);
		    if (project.hasClass("hover")) {
		        return true;
		    } else {
		        project.addClass("hover");
		        $(".project").not(this).removeClass("hover");
		        e.preventDefault();
		        return false; //extra, and to make sure the function has consistent return points
		    }
		});
	}

	function animateOverlay(){
		var contentOpacity = (splashOffset - position) / splashOffset;
		splashOverlayOpacity = position / splashOffset;
		if (splashOverlayOpacity < 0.8){
			splashBackgroundOverlay.css("background-color", "rgba(0,0,0,"+splashOverlayOpacity+")");
		}
		if (contentOpacity > 0.0){
			splashContainer.css("opacity", contentOpacity);
			splashContainer.css("padding-top", position / 4);
			arrow.css("opacity", contentOpacity);
			splashBackground.css("margin-top", position/2);
		}
		
	}

	function updatePosition(){
		position = $(window).scrollTop();
	}

	setInterval(updatePosition, 10);
	setInterval(animateOverlay, 10);
});