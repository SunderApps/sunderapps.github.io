/*
References: 
    https://developers.google.com/gtagjs/reference/event
*/

var $under = $under || {};
$under.google = $under.google || {
    trackingId: 'UA-134242899-2',

    exception: function (description, fatal) {
        gtag('event', 'exception', { 'description': description, 'fatal': fatal });
    },

    setPage: function (url) {
        gtag('config', $under.google.trackingId, { 'page_path': url });
    },

    events: function () {

    },

    init: function () {
        $under.google.events();
    }
};

$($under.google.init);