/*
 * Author : NOW (Albertus SY)
 * Description : Custom Header Search behaviour
*/

(function ($) {
    'use strict';
    $.widget('now.headersearch', {

        _create: function() {
            var that = this,
            	clickedTo;

            that.element.on('click', function(){
	            that._show($j(this));
			});
			
			$(document).mousedown(function(e) {
		        // The latest element clicked
		        clickedTo = $(e.target);
		    });
			
			$j('#search_mini_form .input-text').on('blur', function(){
				if(!clickedTo.hasClass('search-button')) {
					that._hide($j(this));
				}
			});
        },

        _show: function($element) {
            var that = this;
            
            $element.hide();
			$element.next().show();
			$element.next().find('input').focus();
        },

        _hide: function($element) {
            var that = this;
            
            $element.closest('form').hide();
            $element.closest('.link-search').find('a').show();            
        }

    });
}(jQuery));