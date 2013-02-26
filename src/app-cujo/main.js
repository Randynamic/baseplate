define('main', ['curl'], function (curl) {

    var cjsmCfg = { moduleLoader: 'curl/loader/cjsm11' };

    var config = {

        paths: {
            jquery: '../lib/jquery/jquery.min',
            lodash: '../lib/lodash/lodash',
            underscore: '../lib/lodash/lodash',
            utils: 'lib/utils',
            text: '../lib/requirejs-text/text'
        },

        packages: [
            { name: 'curl', location: '../lib-dev/curl/src/curl', main: '../curl' },
            { name: 'wire', location: '../lib-dev/wire', main: 'wire' },
            { name: 'meld', location: '../lib/meld', main: 'meld' },
            { name: 'when', location: '../lib/when', main: 'when' },
            { name: 'backbone', location: '../lib/backbone', main: 'backbone-min', config: cjsmCfg }
        ],

        preloads: ['jquery']
    };

    curl(config, ['wire!context/app']);

});
