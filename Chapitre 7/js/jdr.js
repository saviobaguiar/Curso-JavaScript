var perso ={
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,
    decrire: function(){
        var descrip = perso.nom + " a " + perso.sante + " points de vie, " + perso.force + " en force et " + perso.xp + " d'experience";
        return descrip;
    }
};

console.log(perso.decrire());

perso.sante = perso.sante - 20;
perso.force = perso.force + 10;
perso.xp = perso.xp + 15;

console.log(perso.decrire());