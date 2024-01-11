const gumb = document.getElementById("gumb");
gumb.addEventListener("click", noviZadatak);

function brisi(e) {
    e.target.parentElement.remove();
}

function prekrizi(e) {
    e.target.classList.toggle("obavljeno");
}

// Funkcija koja kreira listu user inputa
function noviZadatak() {
    const ul = document.getElementById("ul");
    let newLi = document.createElement("li");
    let zadatak = document.getElementById("input").value;
    newLi.innerHTML = zadatak;
    ul.appendChild(newLi);
    let x = document.createElement("span");
    x.innerHTML = "\u00d7";
    newLi.appendChild(x);

    //Funkcija koja briše element
    x.addEventListener("click", brisi);
    
    newLi.addEventListener("click", prekrizi);

}
// Funkcija koja prazni input nakon clicka
gumb.addEventListener("click", brisiInput);
function brisiInput() {
    let input = document.getElementById("input");
    input.value = "";
}
