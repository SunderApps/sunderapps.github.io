var $under = $under || {};
$under.$erver = $under.$erver || {
    cache: {
        content: [],
        head: [],
        script: []
    },

    open: function (index) {
        if ($under.$erver.cache.content[index]) {
            $under.$erver.cache.content[index].removeClass('hide').addClass('open');
        }
    },

    loadScript: function (html, index) {
        $under.$erver.cache.script[index] = $(html);
        $('body').append($under.$erver.cache.script[index]);
    },

    loadHead: function (html, index) {
        $under.$erver.cache.head[index] = $(html);
        $('head').append($under.$erver.cache.head[index]);
    },

    loadContent: function (html, index) {
        $under.$erver.cache.content[index] = $(html)
        $('#pages').append($under.$erver.cache.content[index]);
        $under.$erver.open(index);
    },

    get: function (page, index) {
        $.get('/views/content/' + page + '.html', function (html) {
            $under.$erver.loadContent(html, index);
            $.get('/views/head/' + page + '.html', function (html) {
                $under.$erver.loadHead(html, index);
            }, 'html');        
            $.get('/views/script/' + page + '.html', function (html) {
                $under.$erver.loadScript(html, index);
            }, 'html');    
        }, 'html');
    },

    navigate: function (page, index) {
        $('.container.open').addClass('hide')
        setTimeout(function () { $('.container.open.hide').removeClass('open').removeClass('hide'); }, 300);
        if (index !== -1) {
            if ($under.$erver.cache.content[index]) {
                $under.$erver.open(index);
            } else {
                $under.$erver.get(page, index);
            }
            $under.history.push('Sunder | ' + (page.charAt(0).toUpperCase() + page.slice(1)), '/' + page + '/', index);    
        } else {
            document.title = 'Sunder';
        }
    },

    nav: function () {
        var index = $(this).index(),
            page = $(this).data('page');
        $under.$erver.navigate(page, index);
    },

    events: function () {
        $('nav ul li').on('click', $under.$erver.nav);
    },

    init: function () {
        $under.$erver.events();
    }
};

$($under.$erver.init);