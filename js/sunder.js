var $under = $under || {

    sidebar: {
        toggle: function () {
            $('nav').toggleClass('show')
        }
    },

    events: function () {
        $('nav .toggle').on('click', $under.sidebar.toggle);
    },

    init: function () {
        $under.events();
    }
};

$($under.init);