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
        sendToEmail: 'sam@sunderapps.com',
        sendToName: 'Sunder Applications',
        send: function (name, email, subject, message) {
            $.ajax('https://sunder-functions20190319082035.azurewebsites.net/api/SendEmail', {
                method: 'POST',
                contentType: 'json',
                crossDomain: true,
                data: JSON.stringify({
                    'name': name,
                    'email': email,
                    'subject': subject,
                    'message': message,
                    'sendToEmail': $under.contact.sendToEmail,
                    'sendToName': $under.contact.sendToName
                }),
                success: function (data) {
                    alert('Message sent successfully!');
                },
                error: function (xhr, status, error) {
                    alert('Sending email failed.  Please manually send your message to ' + $under.contact.sendTo);
                }
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

    validEmail: function (email) {
        if (email && email !== '') {
            return (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email));
        }
        return false;
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