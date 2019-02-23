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