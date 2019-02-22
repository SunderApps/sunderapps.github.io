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
        var index = $(this).index(),
            page = $(this).data('page');
        $('.container.open').addClass('hide')
        setTimeout(function () { $('.container.open.hide').removeClass('open').removeClass('hide'); }, 300);
        if ($under.$erver.cache[index]) {
            $under.$erver.open(index);
        } else {
            var file = '/views/' + page + '.html';
            $under.$erver.get(file, index);
        }
        $under.history.push('Sunder | ' + (page.charAt(0).toUpperCase() + page.slice(1)), '/' + page + '/');
    },

    events: function () {
        $('nav ul li').on('click', $under.$erver.nav);
    },

    init: function () {
        $under.$erver.events();
    }
};

$($under.$erver.init);