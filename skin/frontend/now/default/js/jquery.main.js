/*
* Author : NOW (Albertus SY)
* Description : JQuery main widget.
*/

(function($) {
'use strict';

$.widget('now.main', {

    _create: function() {
        this.initAllPages();
        this.initHomePage();
        this.initCategoryPage();
        this.initProductPage();
        this.initSearchPage();
        this.initCategorySearchPage();
        this.initSearchResultPage();
        this.initShoppingCartPage();
        this.initCheckoutPage();
        this.initCustomerPage();
        this.initRegisterPage();
        this.initCmsPage();
    },

    initAllPages: function() {
	    // header search box
	    $j('#header-search > a').headersearch();
	    
	    // my account
	    $j('.link-account.loggedin').click(function(e){
		    e.preventDefault();
		    if($j('#header-cart').is(':visible')) {
				$j('.header-minicart .skip-link').removeClass('skip-active');
				$j('#header-cart').removeClass('skip-active');    
		    }
		    
		    $j('#header-account').toggle(1);
		    
	    });
	    
	    
	    // minicart 
	    $j('.skip-cart').click(function(e){
		    if($j('#header-account').is(':visible')) {
				$j('#header-account').toggle(1);
		    }
		    
	    });
	    
	    /* Latest Store News Pop Up */
	   $j('.store-popup .close').on('click', function(){
		   $j('.store-popup').fadeTo('normal', 0).slideUp();
		   sessionStorage.setItem('store-news-popup', 'hidden');
	   });   
	   
	   if(sessionStorage.getItem('store-news-popup') != null) {
		   $('.store-popup').hide();
	   } else {
		   $('.store-popup').show();
	   }
    },

    initHomePage: function() {
        if ($('body.cms-index-index').length) {
			
			// Best Offers Overlay Effect
			$j('.promo-content').bestoffers();
        }
    },

    initCategoryPage: function() {

        if ($('body.catalog-category-view').length) {
        }
    },

    initSearchResultPage: function() {
        if ($('body.catalogsearch-result-index').length) {
        }	      

    },

    initProductPage: function() {

        if ($('body.catalog-product-view').length) {
	        
	        // JS hack to force placeholder on Configurable Product
	        $('#attribute136 option:first-child').text('Choose your size');
	        
	        // Close sidr Size Guide on resize and body click
	        $j(window).on('resize', function(){
		        $.sidr('close', 'sidr-size');
			});
			
			$j('.body-overlay').on('click', function(){
		        $.sidr('close', 'sidr-size');
			});
			
			// trigger slide to rating section when rating link clicked
			$j(".ratings-amount").click(function() {
				var attrID = $j(this).attr('href');
				$j('.toggle-tabs li.last').trigger('click');
				$j('html, body').animate({ scrollTop:$(attrID).offset().top}, 500);
			});
			
			
			$j(document).reviewlimit();
        }
    },
    
    initSearchPage: function() {

        if ($('body.catalogsearch-result-index').length) {
        }
    },

    initCategorySearchPage: function() {

        if ($('body.catalog-category-view').length || $('body.catalogsearch-result-index').length) {
        }
    },

    initShoppingCartPage: function() {

        if ($('body.checkout-cart-index').length) {
        }
    },

    initCheckoutPage: function() {

        if ($('body.checkout-onepage-index').length) {
        }
    },

    initRegisterPage: function() {

        if ($('body.customer-account-create').length) {
        }
    },

    initCustomerPage: function() {

        if ($('body.customer-account').length) {
        }
    },

    initCmsPage: function() {

        if ($('body.cms-page-view').length) {
        }
    }
});
}(jQuery));