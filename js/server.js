var $under = $under || {};
$under.$erver = $under.$erver || {
    cache: [],

    open: function (index) {
        $under.$erver.cache[index]
            .removeClass('hide')
            .addClass('open');
        if (index == 1) {
            if ($under.web && $under.web.init) {
                $under.web.init();
            }
        }
    },

    load: function (html, index) {
        $under.$erver.cache[index] = $('<div></div>')
            .addClass('container')
            .html(html);
        
        $('body').append($under.$erver.cache[index]);
        $under.$erver.open(index);
    },

    get: function (file, index) {
        $.get(file, function (html) {
            $under.$erver.load(html, index);
        }, 'html');
    },

    nav: function () {
        var index = $(this).index();
        $('.container.open').addClass('hide')
        setTimeout(function () { $('.container.open.hide').removeClass('open').removeClass('hide'); }, 300);
        if ($under.$erver.cache[index]) {
            $under.$erver.open(index);
        } else {
            var file = $(this).data('file');
            $under.$erver.get(file, index);
        }
        history.pushState({ page: $(this).data('url') }, $(this).data('title'), $(this).data('url'));
    },

    events: function () {
        $('nav ul li').on('click', $under.$erver.nav);
    },

    init: function () {
        $under.$erver.events();
    }
};

$($under.$erver.init);