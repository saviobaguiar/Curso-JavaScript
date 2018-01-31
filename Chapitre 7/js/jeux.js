/*var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,


    decrire: function(){
        var description = perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force";
        return description;
    }
};
*/

var perso = {};
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;

perso.decrire = function(){
    var description = perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force";
    return description;
}

console.log(perso.decrire());

perso.sante = perso.sante - 20; //blessé par une fleche

perso.force = perso.force + 10; //trouve un bracelet de force

console.log(perso.decrire());