var Perso = {
    init: function(nom, sante, force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
        this.pOr = 10;
        this.cle = 1;
    },

    decrire: function(){
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience, " + this.pOr + " pièces d'Or et " + this.cle + " clé(s)";
        return description;
    },
    attaquer: function(cible){
        if(this.sante > 0){
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if(cible.sante > 0){
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            }
            else {
                cible.sante = 0;
                console.log(cible.nom + " est mort!");
            }
        }
        else {
            console.log(this.nom + " ne peut pas attaquer: il est mort...");
        }
    },
    combattre: function(adversaire){
        this.attaquer(adversaire);
        if(adversaire.sante === 0){
            console.log(this.nom + " a tué " + adversaire.nom + " et gange " + adversaire.valeur + " points d'expérience, ainsi que " + adversaire.pOr + " pièces d'Or et " + adversaire.cle + " clé(s)");
            this.xp = this.xp + adversaire.valeur;
            this.pOr = this.pOr + adversaire.pOr;
            this.cle = this.cle + adversaire.cle;
        }
    }
};

var Adversaire = Object.create(Perso);

Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
    this.init(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

var perso1 = Object.create(Perso);
perso1.init("Aurora", 150, 25);

var perso2 = Object.create(Perso);
perso2.init("Glacius", 130, 35);

console.log("Bienvenue dans ce jeu d'aventure! Voici nos courageux héros:");
console.log(perso1.decrire());
console.log(perso2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive: c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(perso1);
monstre.attaquer(perso2);

perso1.combattre(monstre);
perso2.combattre(monstre);

console.log(perso1.decrire());
console.log(perso2.decrire());
