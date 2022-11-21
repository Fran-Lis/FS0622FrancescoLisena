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
var bank = /** @class */ (function () {
    function bank(_prelievo, _deposito, _contoCorrente) {
        this.prelievo = _prelievo;
        this.deposito = _deposito;
        this.contoCorrente = _contoCorrente;
    }
    bank.prototype.prelevare = function () {
        return this.contoCorrente = this.contoCorrente - this.prelievo;
    };
    bank.prototype.depositare = function () {
        return this.contoCorrente = this.contoCorrente + this.deposito;
    };
    bank.prototype.interessi = function () {
        return this.contoCorrente = this.contoCorrente + this.contoCorrente * 0.10;
    };
    return bank;
}());
;
var myBank1 = new bank(100, 200, 20000);
console.log(myBank1);
console.log(myBank1.interessi());
console.log(myBank1.prelevare());
console.log(myBank1.depositare());
var bank2 = /** @class */ (function (_super) {
    __extends(bank2, _super);
    function bank2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bank2;
}(bank));
var myBank2 = new bank2(200, 300, 40000);
console.log(myBank2);
console.log(myBank2.interessi());
console.log(myBank2.prelevare());
console.log(myBank2.depositare());
