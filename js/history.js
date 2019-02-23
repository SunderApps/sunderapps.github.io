var $under = $under || {};
$under.history = $under.history || {
    state: {},

    push: function (title, url, index) {
        if (url.toUpperCase() !== window.location.pathname.toUpperCase()) {
            history.pushState({ page: url, index: index }, title, url);
        }
    },

    pop: function (e) {
        var state = e.originalEvent.state,
            page = 'home',
            index = -1;
        if (state) {
            page = state.page.substr(1, state.page.length - 2),
            index = state.index;
        }
        $under.$erver.navigate(page, index);
    },

    events: function () {
        $(window).on('popstate', $under.history.pop);
    },

    init: function () {
        $under.history.events();
    }
};

$($under.history.init);