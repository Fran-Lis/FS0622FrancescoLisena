var menuBtn = document.querySelector("#menuButton");
var menu = document.querySelector("#menuContainer");
var testo = document.querySelector("#testo");
var grandeBtn = document.querySelector("#grande");
var coloreBtn = document.querySelector("#colore");
var maiuscBtn = document.querySelector("#maiuscolo");
var hideBtn = document.querySelector("#hide");
var showBtn = document.querySelector("#show");
var listEl = document.querySelectorAll(".listElement");
var menuList = document.querySelectorAll("#menuList");

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("visible")
})

menuBtn.addEventListener("mouseover", function(){
    menuBtn.style.backgroundColor = "green";
})
menuBtn.addEventListener("mouseout", function(){
    menuBtn.style.backgroundColor = "blue";
})

grandeBtn.addEventListener("click", function(){
    testo.className = "grande";
})

coloreBtn.addEventListener("click", function(){
    testo.className = "colore";
})

maiuscBtn.addEventListener("click", function(){
    testo.className = "maiuscolo";
})

hideBtn.addEventListener("click", function(){
    testo.className = "hide";
})

showBtn.addEventListener("click", function(){
    testo.className = "show";
})


for (var i=0; i<listEl.length; i++){
    listEl[i].addEventListener('click', function(){
        this.classList.toggle('depennato');
    })
}
for (var i=0; i<listEl.length; i++){
    listEl[i].addEventListener('mouseover', function(){
        this.classList.add('colore');
    })
}
for (var i=0; i<listEl.length; i++){
    listEl[i].addEventListener('mouseout', function(){
        this.classList.remove('colore');
    })
}