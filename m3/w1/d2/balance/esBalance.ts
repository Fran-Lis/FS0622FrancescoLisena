class bank{
    prelievo:number;
    deposito:number;
    contoCorrente:number;
    constructor(_prelievo:number,_deposito:number,_contoCorrente:number){
        this.prelievo=_prelievo;
        this.deposito=_deposito;
        this.contoCorrente=_contoCorrente;
    }
    public prelevare():number{
        return this.contoCorrente=this.contoCorrente-this.prelievo;
    }
    public depositare():number{
        return this.contoCorrente=this.contoCorrente+this.deposito;
    }
    private interessi():number{
        return this.contoCorrente=this.contoCorrente+this.contoCorrente*0.10;

}
};
let myBank1:any= new bank(100, 200, 20000);
console.log(myBank1);
console.log(myBank1.interessi());
console.log(myBank1.prelevare());
console.log(myBank1.depositare());

class bank2 extends bank{

}
let myBank2:any= new bank2(200, 300, 40000);
console.log(myBank2);
console.log(myBank2.interessi());
console.log(myBank2.prelevare());
console.log(myBank2.depositare());