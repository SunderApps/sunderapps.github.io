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

// Web
$under.web = $under.web || {

    resize: function (e) {
        $.each($('.web-grid iframe'), function (index, iframe) {
            $(iframe).height($(iframe).width() / 1.77942539388);
        });
    },

    update: function (e) {
        var $this = $(this),
            checked = $this.is(':checked'),
            $iframe = $this.parent().parent().siblings('iframe');
        $('.web-grid iframe').attr('src', '');
        if (checked) {
            $iframe.attr('src', $iframe.data('src'));
        } else {
            $iframe.attr('src', '');
        }
    },

    events: function () {
        $(window).off('resize').on('resize', $under.web.resize);
        $('.web-grid input[type="radio"]').off('change').on('change', $under.web.update);
    },

    init: function () {
        $under.web.events();
        $under.web.resize();
    }
};

$($under.web.init);