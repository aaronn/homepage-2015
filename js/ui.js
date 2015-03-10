$(document).ready(function(){
	var position = 0;

	// Splash Section
	var splash = $('.splash');
	var splashContainer = splash.find('.container');
	var splashOffset = splash.height() - 50;
	var splashBackground = splash.find('.background');
	var splashBackgroundOverlay = splash.find('.background-overlay');
	var splashOverlayOpacity;
	var arrow = $('.arrow');

	function animateOverlay(){
		var contentOpacity = (splashOffset - position) / splashOffset;
		splashOverlayOpacity = position / splashOffset;
		if (splashOverlayOpacity < 0.8){
			splashBackgroundOverlay.css('background-color', "rgba(0,0,0,"+splashOverlayOpacity+")");
		}
		if (contentOpacity > 0.0){
			splashContainer.css('opacity', contentOpacity);
			splashContainer.css('padding-top', position / 4);
			arrow.css('opacity', contentOpacity);
			splashBackground.css('margin-top', position/2);
		}
		
	}

	function updatePosition(){
		position = $(window).scrollTop();
	}

	setInterval(updatePosition, 10);
	setInterval(animateOverlay, 10);
});