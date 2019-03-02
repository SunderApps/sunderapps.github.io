var $under = $under || {};
$under.player = $under.player || {
    element: {},

    play:()=>{
        $under.player.element.play();
        $('.player .play i').addClass('fa-play').removeClass('fa-pause');
    },

    pause:()=>{
        $under.player.element.pause();
        $('.player .play i').addClass('fa-pause').removeClass('fa-play');
    },

    togglePlay:()=>{
        if($('.player .play i').hasClass('fa-pause')) {
            $under.player.play();
        } else {
            $under.player.pause();
        }
    },

    mute:()=>{
        $under.player.element.mute = true;
        $under.player.volume();
    },

    unmute:()=>{
        $under.player.element.mute = true;
        $under.player.volume();
    },

    toggleMute:()=>{
        if ($('.player .volume i').hasClass('fa-volume-mute')) {
            $under.player.unmute();
        } else {
            $under.player.mute();
        }
    },

    volume:()=>{
        var $icon = $('.player .play i');
        $under.player.element.volume = $('.player .volume input').val();
        $icon.removeClass('fa-volume-mute').removeClass('fa-volume-off').removeClass('fa-volume-down').removeClass('fa-volume').removeClass('fa-volume-up');
        if ($under.player.element.muted) {
            $icon.addClass('fa-volume-mute');
        } else {
            switch (true) {
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
        }
    },

    setTime:()=>{
        $under.player.element.currentTime = $under.player.element.duration * ($('.player .play input').val() / 100);
    },

    fullScreen:(e)=>{
        if ($under.player.element.requestFullscreen) {
            $under.player.element.requestFullscreen();
        } else if ($under.player.element.mozRequestFullScreen) {
            $under.player.element.mozRequestFullScreen();
        } else if ($under.player.element.webkitRequestFullscreen) {
            $under.player.element.webkitRequestFullscreen();
        }
    },

    load:(src,title)=>{
        if (src) {
            $under.player.element.src = src;
            $under.player.element.load();
            $('.player .title p').text(title);
        }
    },

    events:()=>{
        $('.player .play i').on('click', $under.player.togglePlay);
        $('.player .play input')
            .on('change, input', $under.player.setTime)
            .on('mousedown', $under.player.pause)
            .on('mouseup', $under.player.play);
        $('.player .volume i').on('click', $under.player.toggleMute);
        $('.player .volume input').on('change, input', $under.player.volume);
        $('.player .menu').on('click', $under.player.toggleMenu);
    },

    init:()=>{
        $under.player.element = new Video();
        $under.player.events();
    }
};
$($under.player.init);