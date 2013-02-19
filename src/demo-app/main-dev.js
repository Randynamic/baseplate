(function(global) {

    global.require.paths.query = '../lib/jquery/jquery';
    global.require.paths.lodash = '../lib/lodash/lodash';
    global.require.paths.underscore = '../lib/lodash/lodash';

    global.require.packages[0].main = './debug';
    global.require.packages[1].main = './backbone';

    global.debug = true;

})(this);
