var $under = $under || {};
$under.history = $under.history || {
    state: {},

    location: function () {
        return document.location;
    },

    push: function (title, url, index) {
        console.log(url);
        console.log(window.location.pathname);
        history.pushState({ page: url, index: index }, title, url);
    },

    pop: function (e) {
        var state = e.originalEvent.state,
            page = state.page.substr(1, state.page.length - 2),
            index = page.index;
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