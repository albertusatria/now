/*
 * Author : NOW (Albertus SY)
 * Description : FAQs toggle
*/

(function ($) {
    'use strict';
    $.widget('now.faq', {

        _create: function() {
            var that = this;
			
			that.element.on('click', function(e){
				if (!that.element.closest('li').hasClass('active')) {
					that._destroy();
					that._show();					
				} else {
					that._destroy();
				}
			});
        },

        _show: function() {
            var that = this;
            
            if (!that.element.closest('li').hasClass('active')) {
	        	that.element.closest('li').addClass('active').find('.faq-content').slideDown();    
            }
        },

        _destroy: function() {
            var that = this;
            
            that.element.closest('.faqs').find('li').removeClass('active');
            that.element.closest('.faqs').find('.faq-content').slideUp();
        }

    });
}(jQuery));