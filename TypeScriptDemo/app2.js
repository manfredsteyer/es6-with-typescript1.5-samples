var FlugCalculator_1 = require('FlugCalculator');
var FlugModule = require('Flug');
var fc = new FlugCalculator_1.default();
var f = new FlugModule.Flug();
f.id = 17;
f.plaetze = 100;
f.plaetzeFrei = 90;
var preis = fc.calcPrice(f);
alert(preis);
//# sourceMappingURL=app2.js.map