var $under = $under || {};
$under.player = $under.player || {
    element: {},

    play:()=>{
        $under.player.element.play();
        $('.player .fa-pause').addClass('fa-play').removeClass('fa-pause');
    },

    pause:()=>{
        $under.player.element.pause();
        $('.player .fa-play').addClass('fa-pause').removeClass('fa-play');
    },

    togglePlay:()=>{
        if($('.player .play i').hasClass('fa-pause')) {
            $under.player.play();
        } else {
            $under.player.pause();
        }
    },

    mute:()=>{

    },

    unmute:()=>{

    },

    toggleMute:()=>{

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
        $('.player .full-screen i').on('click', $under.player.fullScreen);
    },

    init:()=>{
        $under.player.element = new Video();
        $under.player.events();
    }
};
$($under.player.init);