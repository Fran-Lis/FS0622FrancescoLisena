interface telefono {
    credito: number;
    numerochiamate: number;
    ricarica(valore:number):void;
    chiamata(minuti:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
    
}
class Utente1 implements telefono {
    credito: number;
    numerochiamate: number;
    tariffa: number;
    constructor(_credito: number,_numerochiamate: number) {
        this.credito=_credito;
        this.numerochiamate=_numerochiamate
        this.tariffa = 0.20;
    }
    ricarica(valore: number){return this.credito=this.credito+valore};
    chiamata(minuti:number){ this.credito=this.credito-(minuti*this.tariffa); this.numerochiamate ++ };
    numero404(){return this.credito};
    getNumeroChiamate(){return this.numerochiamate};
    azzeraChiamate(){ this.numerochiamate = 0};
}
class Utente2 extends Utente1 {
    constructor(_credito: number,_numeroChiamate: number) {
        super(_credito,_numeroChiamate);
        this.tariffa = 0.25
    }}



class Utente3 extends Utente1 {
    constructor(_credito: number,_numeroChiamate: number) {
        super(_credito,_numeroChiamate);
        this.tariffa = 0.30;
    }}


let cliente1 = new Utente1 (10,5)

console.log( `Credito residuo: € ${cliente1.numero404()}`);
console.log(`Numero chiamate: ${cliente1.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${cliente1.numerochiamate}`)

console.log("------------------");

let cliente2 = new Utente2(15,3)

console.log(`Credito residuo: € ${cliente2.numero404()}`);
console.log(`Numero chiamate: ${cliente2.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${cliente2.numerochiamate}`);


console.log("------------------");
let cliente3 = new Utente3(20,4)

console.log(`Credito residuo: € ${cliente3.numero404()}`);
console.log(`Numero chiamate: ${cliente3.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${cliente3.numerochiamate}`);

