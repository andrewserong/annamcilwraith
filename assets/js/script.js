/**********************************************************************************************

Script.js


**********************************************************************************************/



/*global jQuery */
/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var text = t.text()
		, a = text.split(splitter)
		, inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
			});
			t.attr('aria-label',text)
			.empty()
			.append(inject)

		}
	}


	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);

/**********************************************************************************************

Stuff specific to Anna McIlwraith site is below


**********************************************************************************************/

function applyLetteringFixes()
{
	// Fix 'Wayward Heart'
	$(".lettering-wayward-heart").lettering();
	
	// a
	$(".lettering-wayward-heart .char2").css({
		marginLeft: "-3px"
	});
	// y
	$(".lettering-wayward-heart .char3").css({
		marginLeft: "-2px"
	});
	// a
	$(".lettering-wayward-heart .char5").css({
		marginLeft: "-2px"
	});
	// Fix 'The Wolf’s Heir'
	$(".post-title:contains('The Wolf’s Heir')").addClass('lettering-fix-wolf').lettering();
	// o
	$(".lettering-fix-wolf .char6").css({
		marginLeft: "-3px"
	});
}

function buildPopups() 
{
	// uses Magnific Popup
	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: true
		}
	});
}

function smoothScrollToTitle() {
	// smooth scroll to main post heading on page load
	var resumeSession = false;
	resumeSession = sessionStorage.getItem('sessionExists');
	console.log(resumeSession);
	if (resumeSession) {
		$(function() {
		    $('html, body').animate({
	            scrollTop: $('#post').offset().top          
	        }, 500);
        	return false;
		});
    }
    else {
    	sessionStorage.setItem('sessionExists', true);
    }
    // make anchor links to ids on the same page smooth scroll
    // from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});
}

$(document).ready(function() {
	applyLetteringFixes();
	buildPopups();
	smoothScrollToTitle();
});