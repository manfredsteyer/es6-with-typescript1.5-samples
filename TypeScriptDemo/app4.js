var FlugSdk_1 = require('FlugSdk');
require('init');
var fc = new FlugSdk_1.FlugCalculator();
var f = new FlugSdk_1.Flug();
f.id = 17;
f.plaetze = 100;
f.plaetzeFrei = 90;
var preis = fc.calcPrice(f);
alert(preis);
//# sourceMappingURL=app4.js.map