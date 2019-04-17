$under.web = $under.web || {
    resize: function (e) {
        $.each($('.web-grid iframe'), function (index, iframe) {
            $(iframe).css({
                height: ($(iframe).width() / 1.77942539388) + 'px'
            });
        });
    },

    update: function (e) {
        console.log('update');
        var $this = $(this),
            checked = $this.is(':checked'),
            $iframe = $this.parent().parent().find('.image').find('iframe');
        console.log('vars');
        $('.web-grid iframe').attr('src', '');
        if (checked) {
            console.log('checked');
            $iframe.attr('src', $iframe.data('src'));
        } else {
            console.log('unchecked');
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