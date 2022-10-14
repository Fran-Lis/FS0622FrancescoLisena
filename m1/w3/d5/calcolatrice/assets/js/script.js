function scrivi(valore){
    document.getElementById("screen").value += valore;
}
function cancella(){
    document.getElementById("screen").value = "";
}
function calcola(){
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}
function cancellaFine(){
    var str = document.getElementById("screen").value;
    var dele = str.slice(0, - 1);
    document.getElementById("screen").value = dele;
}