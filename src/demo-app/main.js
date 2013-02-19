(function(global) {

    var cjsmCfg = { moduleLoader: 'curl/loader/cjsm11' };

    var requireConfig = {
        baseUrl: 'demo-app',
        deps: ['index'],
        callback: function(app) {
            app.initialize();
        },
        shim: {
            'backbone': {
                'deps': ['lodash', 'jquery'],
                'exports': 'Backbone'
            },
            'backbone.stickit': ['backbone']
        },
        paths: {

            // Loader
            'curl': '../lib/curl/src/curl',

            // App specific
            'proxybox': 'core/proxybox',

            // 3rd-party (core)
            'jquery': '../lib/jquery/jquery.min',
            'lodash': '../lib/lodash/lodash.min',
            'underscore': '../lib/lodash/lodash.min',

            // 3rd-party (extensions)
            'text': '../lib/requirejs-text/text'
        },
        packages: [
            { name: 'when', location: '../lib/when', main: './when' },
            { name: 'backbone', location: '../lib/backbone', main: 'backbone-min', config: cjsmCfg },
            { name: 'backbone.stickit', location: '../lib/backbone.stickit', main: 'backbone.stickit', config: cjsmCfg }
        ]
    };

    if(typeof require !== 'undefined' && typeof require.config === 'function') {
        require.config(requireConfig);
    } else if(typeof exports === 'object') {
        module.exports = requireConfig;
    } else {
        global.require = requireConfig;
    }

})(this);
