var $under = $under || {};
$under.progress = $under.progress || {
    color: '#13771e',
    width: 5,
    start: null,
    timer: 0,

    load: function (time) {
        if (!$under.progress.start) {
            $under.progress.start = time;
        }
        var progress = time - $under.progress.start;
        var center = Math.floor((progress / $under.progress.timer) * 100);
        $('.progress').css({ background: 'linear-gradient(to right, ' + $under.progress.color + ' 0%, ' + $under.progress.color + ' ' + center + '%, #343A40 ' + (center + $under.progress.width) + '%, #343A40 100%)' });
        if (progress < $under.progress.timer) {
            requestAnimationFrame($under.progress.load);
        } else {
            $under.progress.gradient.start();
        }
    },

    wait: function (ms, callback) {
        $under.progress.start = null;
        $under.progress.timer = ms;
        $under.progress.gradient.stop();
        requestAnimationFrame($under.progress.load);
        setTimeout(callback, ms);
    },

    gradient: {
        start: function () {
            $(window).on("mousemove", function (event) {
                var center = Math.floor((event.clientX / $(window).width()) * 100);
                $('.progress').css({ background: 'linear-gradient(to right, #343A40 0%, #343A40 ' + (center - $under.progress.width) + '%, ' + $under.progress.color + ' ' + center + '%, #343A40 ' + (center + $under.progress.width) + '%, #343A40 100%)' });
            });
            $(window).mousemove();
        },
        stop: function () {
            $(window).off('mousemove');
        }
    },

    init: function () {
        $under.progress.gradient.start();
    }
};

$($under.progress.init);