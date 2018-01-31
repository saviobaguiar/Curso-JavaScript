var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

/*
console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);
*/

console.log(stylo["type"]);
console.log(stylo["couleur"]);
console.log(stylo["marque"]);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge";

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5;

console.log("Il coute " + stylo.prix + " euros");