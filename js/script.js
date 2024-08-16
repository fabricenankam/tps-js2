/*let bouton = document.querySelector("button");

bouton.addEventListener("click", function(event) {
    //alert("Bonjour à tous")
    //console.log(event);
    console.log(event.target, event.currentTarget);
});*/

function onButtonClick(event){
    console.log("click button");
    console.log(event.currentTarget);
    event.preventDefault();  
    event.stopPropagation();
    console.log(event);
    
}

function onDivClick(){
    console.log("click div");
}

function somme(){
    let nbr1 = prompt("Entrez le premier nombre");
    let nbr2 = prompt("Entrez le deuxième nombre");
  // let nbr1=10
   //let nbr2=5
    let resultat = nbr1 * nbr2;
    //console.log(`la somme de ${nbr1} et ${nbr2} est ${resultat}`);
    //alert(`Le produit de ${nbr1} et ${nbr2} est ${resultat}`);
    alert("Le produit de "+ nbr1 + " et " + nbr2 + " est " +resultat);
}

document.querySelectorAll("div button, a").forEach(button => {
    button.addEventListener("click", onButtonClick)
})

let button2 = document.querySelector("div");
button2.addEventListener("click", onDivClick)

document.getElementById("form1").addEventListener("submit",(e) => {
    //console.log(e);
   let form = e.currentTarget;
   let data = new FormData(form);
   let firstname = data.get("firstname")
   alert("Vous avez saisi "+ firstname) 
  // if(firstname.length <= 2){
  //}
   // e.preventDefault()
   
})

/*document.querySelector("input").addEventListener("input", (e) => {
    console.log("input", e.currentTarget.value); 
})*/

document.getElementById("sm").addEventListener("click", somme);


document.querySelector("select").addEventListener("change", (e) => {
    //console.log(e.currentTarget.value);
    let val = e.currentTarget.value;

    alert("Vous etes " + val + " en Javascript")
});

document.querySelectorAll(".spoiler").forEach(spoiler => {
    spoiler.addEventListener("click", (e) => {
     e.currentTarget.classList.remove("spoiler")
    })
})

























