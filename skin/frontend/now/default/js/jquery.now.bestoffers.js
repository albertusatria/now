/*
 * Author : NOW (Albertus SY)
 * Description : Best Offers Overlay Effects
*/

(function ($) {
    'use strict';
    $.widget('now.bestoffers', {

        _create: function() {
            var that = this;
			
			that.element.mouseenter(function(e){
				that._hovered();
			})
			.mouseleave(function(e){
				that._unhover();
			});
        },

        _hovered: function() {
            var that = this;
            
            that.element.find('.image').addClass('hovered');
        },

        _unhover: function() {
            var that = this;
            
            that.element.find('.image').removeClass('hovered');         
        }

    });
}(jQuery));