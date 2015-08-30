import { Flug, FlugCalculator } from 'FlugSdk';
import 'init';

var fc = new FlugCalculator();
var f = new Flug();
f.id = 17;
f.plaetze = 100;
f.plaetzeFrei = 90;

var preis = fc.calcPrice(f);

alert(preis);
