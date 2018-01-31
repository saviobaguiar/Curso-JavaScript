/*
var films = ["Le loup de Wall Street", "Vice-versa", "Babysitting"];

console.log(films.length);
console.log(films[0]);
console.log(films[1]);
console.log(films[films.length - 1]);

var tabVide = [];

console.log(tabVide.length);

for (var i = 0; i < films.length; i++){
    console.log(films[i]);
}

films.forEach(function (film){
    console.log(film);
});

films.push("Les Bronzés");

console.log(films[3]);  
*/

var Film = {
    init: function(titre, annee, produc){
        this.titre = titre;
        this.annee = annee;
        this.produc = produc;
    },
    decrire: function(){
        var description = this.titre + " (" + this.annee + ", " + this.produc + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le Loup de Wall Street", 2013, "Martin Scorsese");

var film2 = Object.create(Film);
film2.init("Vice-versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philipe Lacheau et Nicolas Benamou");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach( function(film){
    console.log(film.decrire());
})