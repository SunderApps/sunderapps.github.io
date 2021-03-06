var $under = $under || {};
$under.pg = $under.pg || {

    update: function () {
        var d = new Date(),
            a = d.getDate(),
            t = d.getMonth() + 1,
            e = d.getFullYear();
        $.getJSON('https://www.statbureau.org/calculate-inflation-rate-json',
        {
            country: 'united-states',
            start: '2006/1/1',
            end: e + '/' + t + '/' + a,
            amount: '100',
            format: false
        }).done(function (json) {
            console.log(json);
        });
    },

    init: function () {
        $under.pg.update();
    }
};
$($under.pg.init);