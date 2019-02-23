var $under = $under || {};
$under.history = $under.history || {
    enabled: false,

    update: function (title, url) {
        document.title = title;
        $under.google.setPage(url);
    },

    push: function (title, url, index) {
        if ($under.history.enabled) {
            if (url.toUpperCase() !== window.location.pathname.toUpperCase()) {
                history.pushState({ page: url, index: index }, title, url);
            }
            $under.history.update(title, url);
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
        if (window.history) {
            $under.history.enabled = true;
            $under.history.events();
        }
    }
};

$($under.history.init);