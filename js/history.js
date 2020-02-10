var $under = $under || {};
$under.history = $under.history || {
    enabled: false,
    title: 'Sunder',

    update: function (title, url) {
        document.title = title;
        try {
            $under.google.setPage(url);
        } catch (e) {
            
        }
    },

    push: function (title, url, index) {
        if ($under.history.enabled) {
            if (url.toUpperCase() !== window.location.pathname.toUpperCase()) {
                history.pushState({ page: url, index: index }, title, url);
                $under.history.update(title, url);
            }
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
        var pageTitle = '',
            pageTitles = page.split('-');
        $.each(pageTitles, (index, title) => pageTitle += title.charAt(0).toUpperCase + page.slice(1).toLowerCase());
        $under.history.update($under.history.title + ' | ' + (page.charAt(0).toUpperCase() + page.slice(1)), (page.toUpperCase() === 'HOME' ? '/' : '/' + page + '/'));
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