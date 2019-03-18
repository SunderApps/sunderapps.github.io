var $under = $under || {};
$under.$erver = $under.$erver || {
    cache: {
        content: [],
        head: [],
        script: []
    },

    on: function (event, handler) {
        $($under.$erver).on(event, handler);
    },

    off: function (event, handler) {
        $($under.$erver).off(event, handler);
    },

    open: function (index) {
        if ($under.$erver.cache.content[index]) {
            $under.progress.wait(300, ()=>{$under.$erver.cache.content[index].removeClass('hide').addClass('open'); $($under.$erver).trigger('$-open-page'); });
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
            var pageTitle = '',
                pageTitles = page.split('-');
            $.each(pageTitles, (index, title) => pageTitle += title.charAt(0).toUpperCase() + page.slice(1).toLowerCase());
            $under.history.push($under.history.title + ' | ' + pageTitle, '/' + page + '/', index);    
        }
    },

    nav: function () {
        var $this = $(this),
            index = $this.parent().index(),
            page = $this.data('page');
        $under.$erver.navigate(page, index);
    },

    getLocation: function () {
        return window.location.pathname;
    },

    load: function () {
        var page = $under.$erver.getLocation().slice(1, -1),
            $this = $('nav .links ul li a[href="/' + page + '/"], nav .links ul li a[data-page=' + page + ']'),
            index = $this.parent().index();
        $under.$erver.navigate(page, index);
    },

    events: function () {
        $under.$erver.on('$-open-page', $under.sidebar.close);
    },

    replaceLinks: function () {
        $.each($('nav .links ul li a'), function (index, elem) {
            var $this = $(this),
                page = $this.attr('href').slice(1, -1);
            $this.removeAttr('href').data('page', page);
        });
        $('nav .links ul li a').on('click', $under.$erver.nav);
    },

    init: function () {
        $under.$erver.replaceLinks();
        $under.$erver.events();
        $under.$erver.load();
    }
};

$($under.$erver.init);