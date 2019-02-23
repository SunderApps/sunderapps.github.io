var $under = $under || {};
$under.google = $under.google || {
    trackingId: 'UA-134242899-2',

    setPage: function (url) {
        gtag('config', $under.google.trackingId, { 'page_path': url });
    },

    events: function () {

    },

    init: function () {
        $under.google.events();
    }
};

$under.google.init();