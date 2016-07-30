/*
 * Author : NOW (Albertus SY)
 * Description : onHover megamenu
*/

(function ($) {
    'use strict';
    $.widget('now.megamenu', {

        _create: function() {
	        var that = this;
	        
            $j('.header-left li.level0').not('.first').mouseenter(function(){
			    $j(this).closest('ul').find('li').removeClass('hovered');    
				$j(this).addClass('hovered');
		    });
		    
		    that._unhover();
		    
		    $j('.menu-nav').mouseleave(function(){
			    that._unhover();
		    });
        },

        _unhover: function() {
            $j('.submenu').closest('li').removeClass('hovered');
        }

    });
}(jQuery));