var $under = $under || {};
$under.$erver = $under.$erver || {
    cache: {
        content: [],
        head: [],
        script: []
    },

    open: function (index) {
        $under.$erver.cache.content[index]
            .removeClass('hide')
            .addClass('open');
        if (index == 1) {
            if ($under.web && $under.web.init) {
                $under.web.init();
            }
        }
    },

    loadScript: function (html, index) {
        $under.$erver.cache.script[index] = $(html);
        $('head').append($under.$erver.cache.head[index]);
    },

    loadHead: function (html, index) {
        $under.$erver.cache.head[index] = $(html);
        $('head').append($under.$erver.cache.head[index]);
    },

    loadContent: function (html, index) {
        $under.$erver.cache.content[index] = $('<div></div>')
            .addClass('container')
            .html(html);
        
        $('body').append($under.$erver.cache[index]);
        $under.$erver.open(index);
    },

    get: function (page, index) {
        var lib = [
            new Promise((res2, rej2) => {
                $.get('/views/head/' + page + '.html', function (html) {
                    $under.$erver.loadHead(html, index);
                    res2('head');
                    console.log('head');
                }, 'html');    
            }), 
            new Promise((res3, rej3) => {
                $.get('/views/script/' + page + '.html', function (html) {
                    $under.$erver.loadScript(html, index);
                    res3('script');
                    console.log('script');
                }, 'html');    
            })
        ];
        var con = new Promise((res1, rej1) => {
            $.get('/views/content/' + page + '.html', function (html) {
                $under.$erver.loadContent(html);
                res1('content');
                console.log('content');
            }, 'html');
        });
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