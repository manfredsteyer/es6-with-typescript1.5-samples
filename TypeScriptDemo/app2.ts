import FlugCalc from 'FlugCalculator';
import * as FlugModule from 'Flug';

var fc = new FlugCalc();
var f = new FlugModule.Flug();
f.id = 17;
f.plaetze = 100;
f.plaetzeFrei = 90;

var preis = fc.calcPrice(f);

alert(preis);