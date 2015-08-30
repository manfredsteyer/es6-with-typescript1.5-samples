import { Flug } from 'Flug';

export class FlugManager {

    private fluege: Array<Flug> = [];

    constructor() {
        var f1 = new Flug();
        f1.id = 1; f1.abflugort = "München"; f1.zielort = "Mallorca";

        var f2 = new Flug();
        f2.id = 1; f2.abflugort = "Mallorca"; f2.zielort = "München";

        this.fluege.push(f1);
        this.fluege.push(f2);
    }

    add(f: Flug) {
        this.fluege.push(f);
    }

    getAll(): Array<Flug> {
        return this.fluege;
    }

    getFirst(): Flug {
        return this.fluege[0];
    }

}