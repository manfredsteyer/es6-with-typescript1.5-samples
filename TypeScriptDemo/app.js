var FlugCalculator_1 = require('FlugCalculator');
var Flug_1 = require('Flug');
var fc = new FlugCalculator_1.default();
var f = new Flug_1.Flug();
f.id = 17;
f.plaetze = 100;
f.plaetzeFrei = 90;
var preis = fc.calcPrice(f);
alert(preis);
//# sourceMappingURL=app.js.map