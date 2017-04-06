"use strict";
var core_1 = require('@angular/core');
var angulartics2_1 = require('../../core/angulartics2');
var Angulartics2Facebook = (function () {
    function Angulartics2Facebook(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
    }
    Angulartics2Facebook.prototype.eventTrack = function (action, properties) {
        properties = properties || {};
        var eventList = [
            'ViewContent',
            'Search',
            'AddToCart',
            'AddToWishlist',
            'InitiateCheckout',
            'AddPaymentInfo',
            'Purchase',
            'Lead',
            'CompleteRegistration'
        ];
        if (typeof fbq !== 'undefined' && fbq) {
            eventList.indexOf(action) === -1 ?
                fbq('trackCustom', action, properties) :
                fbq('track', action, properties);
        }
    };
    Angulartics2Facebook.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2Facebook.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2Facebook;
}());
exports.Angulartics2Facebook = Angulartics2Facebook;
