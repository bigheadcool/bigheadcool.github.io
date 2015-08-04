// (function() {
// 	var triggerBttn = document.getElementById( 'trigger-overlay' ),
// 		workBttn = document.getElementById( 'workthis' ),
// 		overlay = document.querySelector( 'div.overlay' ),
// 		closeBttn = overlay.querySelector( 'button.overlay-close' );
// 		transEndEventNames = {
// 			'WebkitTransition': 'webkitTransitionEnd',
// 			'MozTransition': 'transitionend',
// 			'OTransition': 'oTransitionEnd',
// 			'msTransition': 'MSTransitionEnd',
// 			'transition': 'transitionend'
// 		},
// 		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
// 		support = { transitions : Modernizr.csstransitions };

// 	function toggleOverlay() {
// 		if( classie.has( overlay, 'open' ) ) {
// 			classie.remove( overlay, 'open' );
// 			classie.add( overlay, 'close' );
// 			var onEndTransitionFn = function( ev ) {
// 				if( support.transitions ) {
// 					if( ev.propertyName !== 'visibility' ) return;
// 					this.removeEventListener( transEndEventName, onEndTransitionFn );
// 				}
// 				classie.remove( overlay, 'close' );
// 			};
// 			if( support.transitions ) {
// 				overlay.addEventListener( transEndEventName, onEndTransitionFn );
// 			}
// 			else {
// 				onEndTransitionFn();
// 			}
// 		}
// 		else if( !classie.has( overlay, 'close' ) ) {
// 			classie.add( overlay, 'open' );
// 		}
// 	}
// 	if ( document.location.href.indexOf('blog') > -1 || document.location.href.indexOf('about') > -1  || document.location.href.indexOf('work') > -1) {
	
// 	}
// 	else workBttn.addEventListener( 'click', toggleOverlay );
// 	triggerBttn.addEventListener( 'click', toggleOverlay );
// 	closeBttn.addEventListener( 'click', toggleOverlay );
// })();