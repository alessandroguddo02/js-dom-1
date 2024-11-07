"use strict"
console.clear();


/*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.


Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"


- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
*/

// Refs (nodi HTML)
const button = document.querySelector(".btn")
console.log(button);

const image = document.querySelector("img")
console.log(image);
{/* <img src="./img/white_lamp.png" alt="lamp-off"></img> */ }

// interazione utente - Eventi
button.addEventListener("click", function () {
    // interazione con l'attributo src imagine
    console.log(image.src);
   //image.src = './img/yellow_lamp.png';

    if (image.src.includes("white_lamp.png")) {
        image.src = './img/yellow_lamp.png';
        button.innerHTML = "spegni";
    } else {
        image.src = './img/white_lamp.png';
        button.innerHTML = "spegni";

    }

})
