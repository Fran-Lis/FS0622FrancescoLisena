var dataAttuale = new Date();

function saluta(){
    var orario = dataAttuale.getHours();
    var saluto;
    if (orario >= 8 && orario < 14){
        saluto = "Buongiorno"
    } else if(orario >= 14 && orario < 20){
        saluto = "Buon pomeriggio"
    } else if (orario >= 20){
        saluto = "Buonasera"
    } else{
        saluto = "Buonanotte"
    }
    return saluto;
}
document.getElementById("saluto").innerHTML = saluta();