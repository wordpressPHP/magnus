// Add a class to big image and caption >= 1088px.
	function bigImageClass() {
		$( '.entry-content img.size-full' ).each( function() {
			var img = $( this ),
			    caption = $( this ).closest( 'figure' ),
			    newImg = new Image();

			newImg.src = img.attr( 'src' );

			$( newImg ).load( function() {
				var imgWidth = newImg.width;

				if ( imgWidth >= 1088 ) {
					$( img ).addClass( 'size-big' );
				}

				if ( caption.hasClass( 'wp-caption' ) && imgWidth >= 1088 ) {
					caption.addClass( 'caption-big' );
					caption.removeAttr( 'style' );
				}
			} );
		} );
	}