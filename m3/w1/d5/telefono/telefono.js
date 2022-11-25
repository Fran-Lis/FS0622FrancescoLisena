var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Utente1 = /** @class */ (function () {
    function Utente1(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
        this.tariffa = 0.20;
    }
    Utente1.prototype.ricarica = function (valore) { return this.credito = this.credito + valore; };
    ;
    Utente1.prototype.chiamata = function (minuti) { this.credito = this.credito - (minuti * this.tariffa); this.numerochiamate++; };
    ;
    Utente1.prototype.numero404 = function () { return this.credito; };
    ;
    Utente1.prototype.getNumeroChiamate = function () { return this.numerochiamate; };
    ;
    Utente1.prototype.azzeraChiamate = function () { this.numerochiamate = 0; };
    ;
    return Utente1;
}());
var Utente2 = /** @class */ (function (_super) {
    __extends(Utente2, _super);
    function Utente2(_credito, _numeroChiamate) {
        var _this = _super.call(this, _credito, _numeroChiamate) || this;
        _this.tariffa = 0.25;
        return _this;
    }
    return Utente2;
}(Utente1));
var Utente3 = /** @class */ (function (_super) {
    __extends(Utente3, _super);
    function Utente3(_credito, _numeroChiamate) {
        var _this = _super.call(this, _credito, _numeroChiamate) || this;
        _this.tariffa = 0.30;
        return _this;
    }
    return Utente3;
}(Utente1));
var cliente1 = new Utente1(10, 5);
console.log("Credito residuo: \u20AC ".concat(cliente1.numero404()));
console.log("Numero chiamate: ".concat(cliente1.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(cliente1.numerochiamate));
console.log("------------------");
var cliente2 = new Utente2(15, 3);
console.log("Credito residuo: \u20AC ".concat(cliente2.numero404()));
console.log("Numero chiamate: ".concat(cliente2.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(cliente2.numerochiamate));
console.log("------------------");
var cliente3 = new Utente3(20, 4);
console.log("Credito residuo: \u20AC ".concat(cliente3.numero404()));
console.log("Numero chiamate: ".concat(cliente3.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(cliente3.numerochiamate));
