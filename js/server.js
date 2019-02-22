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

    loadScript: function (html) {

    },

    loadHead: function (html) {

    },

    loadContent: function (html, index) {
        $under.$erver.cache[index] = $('<div></div>')
            .addClass('container')
            .html(html);
        
        $('body').append($under.$erver.cache[index]);
        $under.$erver.open(index);
    },

    get: function (page, index) {
        var lib = [
            new Promise((res2, rej2) => {
                $.get('/views/head/' + page + '.html', function (html) {
                    $under.$erver.loadHead(html);
                    res2('head');
                    console.log('head');
                }, 'html');    
            }), 
            new Promise((res3, rej3) => {
                $.get('/views/content/' + page + '.html', function (html) {
                    $under.$erver.loadContent(html, index);
                    res3('content');
                    console.log('content');
                }, 'html');    
            })
        ];
        var con = new Promise((res1, rej1) => {
            $.get('/views/script/' + page + '.html', function (html) {
                $under.$erver.loadScript(html);
                res1('script');
                console.log('script');
            }, 'html');    
        }).then((ret1) => Promise.all(lib));
    },

    navigate: function (page, index) {
        $('.container.open').addClass('hide')
        setTimeout(function () { $('.container.open.hide').removeClass('open').removeClass('hide'); }, 300);
        if ($under.$erver.cache[index]) {
            $under.$erver.open(index);
        } else {
            $under.$erver.get(page, index);
        }
        $under.history.push('Sunder | ' + (page.charAt(0).toUpperCase() + page.slice(1)), '/' + page + '/', index);
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