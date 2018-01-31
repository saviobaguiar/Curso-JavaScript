var nombre = prompt("Entre la moyenne du semestre: ");
if (nombre < 10){
    console.log("Vous avez recalé!");
}
else if((nombre >= 10) && (nombre <= 12)){
    console.log("Vous avez reussi!");
}
else if(nombre > 12){
    console.log("Vous avez reussi avec mention bien!");
}