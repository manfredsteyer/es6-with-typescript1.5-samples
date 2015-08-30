
export class Passagier {
    id: number;
    name: string;
}

export namespace logic {


    export class PassagierManager {

        p: Passagier = new Passagier();

        getPassagier(): Passagier {
            return this.p;
        }

        setPassagier(p: Passagier) {
            this.p = p; 
        }
    }

}