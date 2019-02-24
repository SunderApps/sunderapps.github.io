var $under = $under || {};
$under.audio = $under.audio || {
    element: {},

    play:()=>{
        $under.audio.element.play();
    },

    pause:()=>{
        $under.audio.element.pause();
    },

    toggle:()=>{
        
    },

    load:(src,title)=>{
        if (src) {
            $under.audio.element.src = src;
            $under.audio.element.load();
            $('.player .title').text(title);
        }
    },

    events:()=>{

    },

    init:()=>{
        $under.audio.element = new Audio();
        $under.audio.events();
    }
};
$($under.audio.init);