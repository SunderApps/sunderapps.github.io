var $under = $under || {

    gradient: function (color) {
        var width = 5;
        $(window).on("mousemove", function (event) {
            var center = Math.floor((event.clientX / $(window).width()) * 100);
            $('.progress').css({ background: 'linear-gradient(to right, #343A40 0%, #343A40 ' + (center - width) + '%, ' + color + ' ' + center + '%, #343A40 ' + (center + width) + '%, #343A40 100%)' });
        });
    },

    sidebar: {
        toggle: function () {
            $('nav').toggleClass('show')
        }
    },

    events: function () {
        $('nav .toggle').on('click', $under.sidebar.toggle);
    },

    init: function () {
        $under.events();
        $under.gradient('#13771e');
    }
};

$($under.init);