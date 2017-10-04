require.ensure(['./commonData'], function(require) {
    var m = require('./commonData');
    console.log('组件2获取数据' + m.data);
});