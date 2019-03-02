var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
})();

var $under = $under || {
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