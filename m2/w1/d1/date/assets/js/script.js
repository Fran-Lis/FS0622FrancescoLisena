var dataAttuale = new Date();
var mese = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

function meseAttuale(){
    var valore = dataAttuale.getMonth();
    return mese[valore];
}

document.getElementById("literalDate").innerHTML += `${dataAttuale.getDate()} / ${meseAttuale()} / ${dataAttuale.getFullYear()}`
document.getElementById("americanDate").innerHTML = dataAttuale;
document.getElementById("day").innerHTML += dataAttuale.getDate();
document.getElementById("month").innerHTML += meseAttuale();
document.getElementById("euroDate").innerHTML += `${dataAttuale.getDate()}-${dataAttuale.getMonth() + 1}-${dataAttuale.getFullYear()}`