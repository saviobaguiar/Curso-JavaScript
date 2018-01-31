var chien ={
    nom: "nick",
    race: "poodle",
    taille: "35",
    aboyer: function(){
        var aboie = "Grrrr! Grrrr! aauu! au!";
        return aboie;
    }
};

console.log( chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat! " + chien.nom + " aboie: " + chien.aboyer());