var $under = $under || {};
$under.audio = $under.audio || {
    element: {},

    load:(src,title)=>{
        if (src) {
            $under.audio.element.src = src;
            $('.player .title').text(title);
        }
    },

    init:()=>{
        $under.audio.element = new Audio();
    }
};
$($under.audio.init);