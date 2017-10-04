
require.ensure(['./commonData2'], function(require) {
    var m = require('./commonData2');
    console.log('组件1获取数据' + m.data);
});