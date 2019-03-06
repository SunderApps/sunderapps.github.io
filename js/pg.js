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
            start: e + '/' + t + '/' + a,
            end: '2006/1/1',
            amount: '100',
            format: true
        }).done(function (json) {
            console.log(json);
        });
        $.getJSON('https://www.statbureau.org/calculate-inflation-price-json',
        {
            country: 'united-states',
            start: e + '/' + t + '/' + a,
            end: '2006/1/1',
            amount: '100',
            format: true
        }).done(function (json) {
            console.log(json);
        });
        $.getJSON('https://www.statbureau.org/calculate-inflation-value-json',
        {
            country: 'united-states',
            start: e + '/' + t + '/' + a,
            end: '2006/1/1',
            amount: '100',
            format: true
        }).done(function (json) {
            console.log(json);
        });

    },

    init: function () {
        $under.pg.update();
    }
};
$($under.pg.init);