var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
})();

var $under = $under || {

    getDimensions:($obj)=>{
        var $wrap = $('<div></div>').addClass('dimensions').css({width:$obj.width() +'px'}).appendTo($('body')),
            $clone = $obj.clone().attr('style', '').appendTo($wrap),
            dim = { width: $clone.outerWidth(), height: $clone.outerHeight() };
        $wrap.remove();
        return dim;
    },

    sidebar: {
        toggle:()=>{
            $('nav').toggleClass('show')
        }
    },

    events:()=>{
        $('nav .toggle').on('click', $under.sidebar.toggle);
    },

    init:()=>{
        $under.events();
    }
};

$($under.init);