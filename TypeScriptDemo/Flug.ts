export class Flug {

    id: number;
    fnr: string;
    datum: Date;
    abflugort: string;
    zielort: string;
    plaetze: number;
    plaetzeFrei: number;

}

// Alternative
//   class Flug { }
//   export { Flug };