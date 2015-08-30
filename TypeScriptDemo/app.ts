import FlugCalc from 'FlugCalculator';
import { Flug as FlugVerbindung } from 'Flug';

var fc = new FlugCalc();
var f = new FlugVerbindung();
f.id = 17;
f.plaetze = 100;
f.plaetzeFrei = 90;

var preis = fc.calcPrice(f);

alert(preis);