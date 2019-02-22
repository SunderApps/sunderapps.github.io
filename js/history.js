var $under = $under || {};
$under.history = $under.history || {
    state: {},

    location: function () {
        return document.location;
    },

    push: function (title, url) {
        history.pushState({ page: url }, title, url);
    },

    pop: function (e) {
        console.log(e);
        console.log(e.originalEvent.state);
        console.log($under.history.location());
    },

    events: function () {
        $(window).on('popstate', $under.history.pop);
    },

    init: function () {
        $under.history.events();
    }
};

$($under.history.init);