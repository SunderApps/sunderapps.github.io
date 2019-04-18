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

    events: function () {
        $('nav .toggle').on('click', $under.sidebar.toggle);
    },

    init: function () {
        $under.events();
        $under.storage.init();
        
        ///* DEBUGGING FOR SUNDER FUNCTIONS
        $.post(
            'https://sunder-functions20190319082035.azurewebsites.net/api/SendEmail',
            {
                'name': 'Sam Underwood',
                'email': 'sam@sunderapps.com',
                'subject': 'Testing',
                'message': 'Please work!'
            }
        ).done(function (data) {
            console.log('success!');
            console.log(data);
        }).fail(function (data) {
            console.log('error!');
            console.log(data);
        });
        //*/
    }
};

$($under.init);