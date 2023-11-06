// Faire un tableau de tout les éléments .card dans document
const Cards = document.querySelectorAll(".card");
console.log(Cards)

// add event(si click donc fonction) à chaque élément du tableau
Cards.forEach((Card) => {
    Card.addEventListener("click", () => {


// select élément .hidden dans élément card activé        
        const hidden = Card.querySelector(".hidden");

        console.log(hidden)

// overwrite css display de l'élément .hidden
        hidden.style.display = "block";
    })
})