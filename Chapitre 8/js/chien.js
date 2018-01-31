var Chien ={
    init: function(nom, race, taille){
        this.nom = nom;
        this.race = race;
        this.taille = taille;
        },
    aboyer: function(aboie){
        this.aboie = aboie;
        console.log("Tiens, un chat! " + this.nom + " aboie: " + aboie);
    },
    decrire: function(){
        console.log(this.nom + " est un " + this.race + " mesurant " + this.taille + " cm.");
    }
};

var crockdur = Object.create(Chien);
crockdur.init("Crockdur", "mâtin de Naples", 75);
console.log(crockdur.decrire());
console.log(crockdur.aboyer("Grr! Grrr! "));

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.decrire());
console.log(pupuce.aboyer("Kaii! Kaii!"));