/*
 * Author : NOW (Albertus SY)
 * Description : Review Limit redirection to review section
*/

(function ($) {
    'use strict';
    $.widget('now.reviewlimit', {

        _create: function() {
	        var that = this;
	        
            var sPageURL = window.location.search.substring(1);
		    var sURLVariables = sPageURL.split('&');
		    for (var i = 0; i < sURLVariables.length; i++) 
		    {
		        var sParameterName = sURLVariables[i].split('=');
		        if (sParameterName[0] == 'limit' || sParameterName[0] == 'p') 
		        {
		            that.redirectReview(sParameterName[1]);
		        }
		    }
        },
        
        redirectReview: function($param) {
	        $j('.rating-links a').trigger('click');
        }
       
    });
}(jQuery));