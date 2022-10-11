//es 1
var nome= "Aldo";
let occupazione = "cliente"
const piGreco = 3.14

document.getElementById("concatena").innerHTML = `${nome}, ${occupazione}, ${piGreco}`;
// es 2
var prova2 = `${nome}, ${occupazione}, ${piGreco}`;
document.getElementById("concatena2").innerHTML = prova2;
//es 3.1
var nome2 = "Mario";
document.getElementById("var").innerHTML = nome2;
{
    let nome2 = "Carla";
    document.getElementById("let").innerHTML = nome2;
}
document.getElementById("final").innerHTML = nome2;

//es 3.2
{
    let nome2 = "Mario"
    document.getElementById("let2").innerHTML = nome2;

    {
        let nome2 = "Carla";
        document.getElementById("let3").innerHTML = nome2;
        document.getElementById("final2").innerHTML = nome2;
    }
}

//es 4.1
var num = 15;
document.getElementById("iniziale").innerHTML += num;

//es 4.2
var add = num + 15;

document.getElementById("valore1").innerHTML += `${add}, ${++add}`;

//es 4.3
var sott = num - 10;

document.getElementById("valore2").innerHTML += `${sott}, ${--sott}`;

//es 4.4
var molt = num * 3;
document.getElementById("valore3").innerHTML += `${molt}`;

//es 4.5
var div = num / 3;
document.getElementById("valore4").innerHTML += `${div}`;

//es 4.6
document.getElementById("valore5").innerHTML += `${num} é un numero`;