var $under = $under || {};
$under.player = $under.player || {
    element: {},

    play:()=>{
        $under.player.element.play();
    },

    pause:()=>{
        $under.player.element.pause();
    },

    toggle:()=>{
        
    },

    load:(src,title)=>{
        if (src) {
            $under.player.element.src = src;
            $under.player.element.load();
            $('.player .title').text(title);
        }
    },

    events:()=>{

    },

    init:()=>{
        $under.player.element = new Video();
        $under.player.events();
    }
};
$($under.player.init);