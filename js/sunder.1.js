var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
})();

var $under = $under || {
	storage: {
        enabled: false,

        set: function (key, item) {
            if ($under.storage.enabled) {
                window.localStorage.setItem(key, item);
            }
        },

        get: function (key) {
            if ($under.storage.enabled) {
                return window.localStorage.getItem(key);
            } else {
                return 'undefined';
            }
        },

        remove: function (key) {
            if ($under.storage.enabled) {
                window.localStorage.removeItem(key);
            }
        },

        clear: function () {
            if ($under.storage.enabled) {
                window.localStorage.clear();
            }
        },

        init: function () {
            if (typeof Storage !== 'undefined') {
                $under.storage.enabled = true;
            }
        }
    },
	
    sidebar: {
        toggle: function () {
            $('nav').toggleClass('show')
        },
        close: function () {
            $('nav').removeClass('show');
        }
    },

    contact: {
        sendTo: 'sam@sunderapps.com',
        send: function (name, subject, message) {
            $.post(
                'https://sunder-functions20190319082035.azurewebsites.net/api/SendEmail',
                {
                    'name': 'Sam Underwood',
                    'email': 'sam@sunderapps.com',
                    'subject': 'Testing',
                    'message': 'Please work!'
                }
            ).done(function (data) {
                alert('Email sent successfully!');
            }).fail(function (xhr, status, error) {
                alert('Sending email failed.  Please manually send your message to ' + $under.contact.sendTo);
            });
        },

        init: function () {

        }
    },

    background: {
        lastSrc: '',
        lastPos: '',
        elements: [],
        actives: [],
        update: function () {
            var $container = $('.container.open:not(.hide)');
            if ($container) {
                var images = $container.find('img.bg'),
                    closest = 0,
                    closestDist = 1000000;
                $.each(images, (i, e)=>{
                    var dist = Math.abs($(e).offset().top - ($(window).height() - 2) / 2);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = i;
                    }
                });
                var $img = $(images[closest]),
                    src = $img.data('background') || $img.attr('src') || $under.background.lastSrc,
                    pos = $img.data('position') || $under.background.lastPos;
                $under.background.lastSrc = src;
                $under.background.lastPos = pos;
                if ($('body').css('backgroundImage') !== 'url(' + src + ')' && !~$under.background.actives.indexOf(src)) {
                    $under.background.elements[closest] = $under.background.elements[closest] || $('<div></div>').addClass('background');    
                    $under.background.actives[closest] = src;
                    $('body').append($under.background.elements[closest]);
                    $under.background.elements[closest].css({
                        backgroundImage: 'url(' + src + ')',
                        backgroundPosition: pos
                    }).animate({
                        opacity: 1
                    }, 500, function () {
                        $('body').css({
                            backgroundImage: 'url(' + src + ')',
                            backgroundPosition: pos
                        });
                        $under.background.elements[closest].remove();
                        $under.background.elements[closest] = null;
                        $under.background.actives[closest] = null;
                    });
                }
            }
        },

        openPage: function () {
            $('.container.open:not(.hide)').off('scroll').on('scroll', $under.background.update).scroll();
        },

        events: function () {
            $under.$erver.on('$-open-page', $under.background.openPage);
        },
        
        init: function () {
            $under.background.events();
            $under.background.openPage();
        }
    },

    events: function () {
        $('nav .toggle').on('click', $under.sidebar.toggle);
    },

    init: function () {
        $under.events();
        $under.storage.init();
        $under.contact.init();
    }
};

$($under.init);