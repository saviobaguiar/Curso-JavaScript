var Chien = {

    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },

    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    decrire: function(){
        console.log(this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie: " + this.aboyer());
    }
};

var Chiens = [];

var chien1 = Object.create(Chien);
chien1.init("Crokdur", "mâtin de Naples", 75);
Chiens.push(chien1);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);
Chiens.push(chien2);

var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);
Chiens.push(chien3);

console.log("Le chenil héberge " + (Chiens.length) + " chien(s)");

Chiens.forEach( function(chien){
    console.log(chien.decrire());
})
