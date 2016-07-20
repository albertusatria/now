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
    },

    initHomePage: function() {
        if ($('body.cms-index-index').length) {
	        $j("#home-bannerslider").owlCarousel({
				navigation : true, // Show next and prev buttons
				slideSpeed : 300,
				pagination : false,
				navigationText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
				singleItem: true,
				autoPlay: 4000
			});
			
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
	        
	        $j(window).on('resize', function(){
		        $.sidr('close', 'sidr-size');
			});
			
			$j('.body-overlay').on('click', function(){
		        $.sidr('close', 'sidr-size');
			});
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