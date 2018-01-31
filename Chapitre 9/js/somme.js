var valeurs = [11, 3, 7, 2, 9, 10];
var cont = 0;

for( var i = 0; i < valeurs.length; i++){
    cont = cont + valeurs[i];
    console.log(valeurs[i]);    
};

console.log("La somme des éléments vaut " + cont);