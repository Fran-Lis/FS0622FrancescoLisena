
var btn = document.getElementById("starter");
btn.addEventListener("click", function(){
    spesa();
} )

function spesa(){
    var budget = document.getElementById("budgetIniziale").value;
    var counter = 0
    var tetto = document.getElementById("max").value
    while (budget > 0){
        var rand = Math.random()*100;
        var defRand = Math.round(rand);
        if (defRand > budget){
            document.getElementById("conto").innerHTML += `<li>Acquisto di €${defRand} non effettuato, saldo rimanente €${budget}</li>`
        }else{
            budget-=defRand;
            document.getElementById("conto").innerHTML += `<li>Acquisto di €${defRand} effettuato, saldo rimanente €${budget}</li>`
        }
        if (budget <= (document.getElementById("budgetIniziale").value / 2) && counter == 0){
            document.getElementById("conto").innerHTML += `<li><h2>Sei sotto la metà</h2></li>`
            counter += 1;
        }
        if (budget <= tetto){
            document.getElementById("conto").innerHTML += `<li><h2>Sei sotto la soglia degli €${tetto}</h2></li>`
            break;
        }
    }
}
