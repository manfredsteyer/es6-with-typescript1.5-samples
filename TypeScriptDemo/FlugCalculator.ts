import { Flug } from 'Flug';

export class FlugCalculator {

    static basePrice = 300;

    calcPrice(flug: Flug) {
        var p = flug.plaetze / flug.plaetzeFrei;
        if (p >= 0.75) return FlugCalculator.basePrice / 2;
        return FlugCalculator.basePrice;
    } 

}

export default FlugCalculator;

// Alternative:
//   export default FlugCalculator { ... }