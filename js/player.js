var $under = $under || {};
$under.player = $under.player || {
    element: {},

    play: function () {
        $under.player.element.play();
        $('.player .play i').addClass('fa-pause').removeClass('fa-play');
    },

    pause: function () {
        $under.player.element.pause();
        $('.player .play i').addClass('fa-play').removeClass('fa-pause');
    },

    togglePlay: function () {
        if($('.player .play i').hasClass('fa-pause')) {
            $under.player.pause();
        } else {
            $under.player.play();
        }
    },

    mute: function () {
        $under.player.element.muted = true;
        $under.player.volume();
    },

    unmute: function () {
        $under.player.element.muted = false;
        $under.player.volume();
    },

    toggleMute: function () {
        if ($('.player .volume i').hasClass('fa-volume-mute')) {
            $under.player.unmute();
        } else {
            $under.player.mute();
        }
    },

    volume: function () {
        var $icon = $('.player .volume i, .player .options .icons .vol');
        $under.player.element.volume = $('.player .volume input').val();
        $icon.removeClass('fa-volume-mute').removeClass('fa-volume-off').removeClass('fa-volume-down').removeClass('fa-volume').removeClass('fa-volume-up');
        switch (true) {
            case $under.player.element.muted:
                $icon.addClass('fa-volume-mute');
                break;
            case $under.player.element.volume > 0.75:
                $icon.addClass('fa-volume-up');
                break;
            case $under.player.element.volume > 0.5:
                $icon.addClass('fa-volume');
                break;
            case $under.player.element.volume > 0.25:
                $icon.addClass('fa-volume-down');
                break;
            default:
                $icon.addClass('fa-volume-off');
        }
    },

    setTime: function () {
        $under.player.element.currentTime = $under.player.element.duration * ($('.player .play input').val() / 100);
    },

    update: function () {
        var value = (100 / $under.player.element.duration) * $under.player.element.currentTime;
        $('.player .play input').val(value);
    },

    toggleMenu: function () {
        $('.player').toggleClass('menu');
    },

    openOption: function (e) {
        var $this = $(this),
            $select = $this.parent(),
            $uls = $select.children('ul'),
            $lis = $uls.children('li');
        $uls.off('click');
        $lis.on('click', $under.player.selectOption);    
        $uls.addClass('open');
        e.stopPropagation();
    },

    selectOption: function (e) {
        var $this = $(this),
            $list = $this.parent(),
            $select = $list.parent(),
            $uls = $select.children('ul'),
            ulIndex = $uls.index($list),
            $lis = $($uls[ulIndex]).children('li'),
            liIndex = $lis.index($this);
        if (ulIndex) {
            for (var i = 0; i < liIndex; i++){
                $($uls[0]).append($lis[i]);
            }
        } else {
            for (var i = $lis.length; i >= liIndex; i--) {
                $($uls[1]).prepend($lis[i]);
            }
        }
        $uls.children('li').off('click');
        $uls.on('click', $under.player.openOption);
        $uls.removeClass('open');
        e.stopPropagation();
    },

    fullScreen: function (e) {
        if ($under.player.element.requestFullscreen) {
            $under.player.element.requestFullscreen();
        } else if ($under.player.element.mozRequestFullScreen) {
            $under.player.element.mozRequestFullScreen();
        } else if ($under.player.element.webkitRequestFullscreen) {
            $under.player.element.webkitRequestFullscreen();
        }
    },

    load: function (src,title) {
        if (src) {
            $under.player.element.src = src;
            $under.player.element.load();
            $('.player .title p').text(title);
        }
    },

    events: function () {
        $('.player .play i').on('click', $under.player.togglePlay);
        $('.player .play input')
            .on('change, input', $under.player.setTime)
            .on('mousedown', $under.player.pause)
            .on('mouseup', $under.player.play);
        $('.player .volume i, .player .options .icons .vol').on('click', $under.player.toggleMute);
        $('.player .volume input').on('change, input', $under.player.volume);
        $('.player .menu').on('click', $under.player.toggleMenu);
        $($under.player.element).on('timeupdate', $under.player.update).on('contextmenu',  function () {return false});
        $('.player .inputs .select ul').on('click', $under.player.openOption);
        $('.player .options .fa-expand').on('click', $under.player.fullScreen);
    },

    init: function () {
        $under.player.element = $('.player video')[0];
        $under.player.events();
    }
};
$($under.player.init);