$j(document).ready(function() {
    if (typeof ConfigurableMediaImages === 'undefined' || typeof optionsPrice === 'undefined' || typeof Product === 'undefined') return;

    /**
     * Returns true, if there is a label-matching image on config product for the selected option's label
     * @param el
     * @returns {boolean}
     */
    var matchingImageExists = function(el) {
        // copy from product-media.js:150-152
        var select = $j(el);
        var label = select.find('option:selected').attr('data-label');
        var productId = optionsPrice.productId; //get product ID from options price object

        // the inspection, based on product-media.js:94
        return ConfigurableMediaImages.productImages[productId]['option_labels'][label]['configurable_product'][ConfigurableMediaImages.imageType];
    };

    // activation for attribute selectors (selectors as used in product-media.js:175)
    $j('.product-options .super-attribute-select')
        .off('change', ConfigurableMediaImages.updateImage(this))
        .on('change', function() { if (matchingImageExists(this)) { ConfigurableMediaImages.updateImage(this); } });

    // activation for swatches (overriding Product.ConfigurableSwatches.prototype.updateSelect method in swatches-product.js:722)
    Product.ConfigurableSwatches.prototype.updateSelect = function(attr) {
        // fire select change event
        // this will trigger the validation of the select
        // only fire if this attribute has had a selected option at one time
        if (attr._e.selectedOption !== false && attr._e.optionSelect) {
            this._F.nativeSelectChange = false;
            if (matchingImageExists(attr._e.optionSelect)) ConfigurableMediaImages.updateImage(attr._e.optionSelect);
            this.productConfig.handleSelectChange(attr._e.optionSelect);
            this._F.nativeSelectChange = true;
        };
    }
});