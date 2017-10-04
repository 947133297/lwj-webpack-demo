require('./app.css');
var other1 = require('./border.css');


// Cannot read property 'inner' of undefined
// var html1 = '<div class="'+other1.outer.inner+'">other1</div>';
var html1 = '<div class="'+other1.outer+'"><div class="'+other1.inner+'">border test1</div></div>';
var html2 = '<div class="'+other1.qwe+'">border test2</div>';
var html3 = '<div id='+other1.eee+'>border test id</div>';

document.write(html1);
document.write(html2);
document.write(html3);

var c = require('./combine.css');
var html4 = '<div class="'+c.content+'">compose test</div>';
document.write(html4);

var s = require('./scss/1.scss');
var html5 = '<div class="'+s.s1+'">scss test</div>';
document.write(html5);