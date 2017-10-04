require.ensure(['./jquery-3.2.1.min'], function(require) {
    var jq = require('./jquery-3.2.1.min');
    jq('body').attr('c2','true');
});