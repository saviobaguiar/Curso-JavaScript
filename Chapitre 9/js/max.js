var valeurs = [11, 3, 7, 2, 9, 10];

var num = 0;

for( var i = 0; i < valeurs.length; i++){
    if (valeurs[i] > num){
        num = valeurs[i];
    }
}

console.log("Le maximum des éléments vaut " + num);