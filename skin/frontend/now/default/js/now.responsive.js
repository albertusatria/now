/*
 * Responsive helper class.
*/

// Override default Magento js breakpoints defined here: skin/frontend/rwd/default/js/app.js
var bp = {
    xsmall: 319,
    small: 639,
    medium: 767,
    large: 1300,
    xlarge: 1920
}

function Responsive() {

    // Init breakpoint pixel values (keep consistent with css).
    this.desktopWidth = bp.large + 1;
    this.tabletWidth = bp.medium + 1;
    this.tabletLandscapeWidth = 1024;
    this.mobileWidth = bp.small + 1;
    this.phoneWidth = bp.xsmall + 1;

    // Core breakpoints (keep consistent with css).
    this.mqDesktop = 'handheld, screen and (min-width: ' + (this.desktopWidth + 1) + 'px)';
    this.mqTablet = 'handheld, screen and (max-width: ' + this.tabletWidth + 'px)';
    this.mqTabletLandscape = 'handheld, screen and (max-width: ' + this.tabletLandscapeWidth + 'px)';
    this.mqMobile = 'handheld, screen and (max-width: ' + this.mobileWidth + 'px)';
    this.mqPhone = 'handheld, screen and (max-width: ' + this.phoneWidth + 'px)';

    // Additional breakpoints
    //this.mqIsDesktop = 'handheld, screen and (min-width: ' + parseInt(this.desktopWidth) + 'px)';
    //this.mqIsNotMobile = 'handheld, screen and (min-width: ' + parseInt(this.mobileWidth + 1) + 'px)';
    //this.mqIsLargerThanTablet = 'handheld, screen and (min-width: ' + parseInt(this.tabletWidth - 1) + 'px)';
    //this.mqIsSmallerThanTablet = 'handheld, screen and (max-width: ' + parseInt(this.tabletWidth - 1) + 'px)';
    //this.mqIsTabletOrLarger = 'handheld, screen and (min-width: ' + parseInt(this.tabletWidth) + 'px)';

    this.isIE6 = $j('html.ie6').length;
    this.isIE7 = $j('html.ie7').length;
    this.isIE8 = $j('html.ie8').length;
    this.isIE9 = $j('html.ie9').length;
    this.isIE6to9 = this.isIE6 || this.isIE7 || this.isIE8 || this.isIE9
}