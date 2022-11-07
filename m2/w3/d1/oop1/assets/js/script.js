var btn = document.getElementById("btn");
var tab = document.getElementById("tab");  

function Persona(_nome, _cognome, _nascita){
    this.nome = _nome;
    this.cognome = _cognome;
    this.nascita = _nascita;

    this.eta = function(){
        let datAttuale = new Date;
        let dataNascita = new Date(this.nascita);
        if (dataNascita.getMonth() < datAttuale.getMonth() || dataNascita.getMonth() == datAttuale.getMonth() && dataNascita.getDate() <= datAttuale.getDate()){
            return datAttuale.getFullYear() - dataNascita.getFullYear();
        }else{
            return (datAttuale.getFullYear() - dataNascita.getFullYear()) - 1;
        }
    }
    this.stampa = function(){
        let tr = document.createElement("tr");
        tr.innerHTML = `<td class = "border border-dark">${this.nome}</td><td class = "border border-dark">${this.cognome}</td><td class = "border border-dark">${this.eta()}</td>`;
        tab.appendChild(tr);
    }
}

btn.addEventListener("click", function(e){
    e.preventDefault();
    let newNome = document.getElementById("nome").value;
    let newCognome = document.getElementById("cognome").value;
    let newNascita = document.getElementById("nascita").value;
    let newPersona = new Persona(newNome, newCognome, newNascita);
    newPersona.stampa();
    cancellaForm();
})

function cancellaForm(){
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("nascita").value = "";
}