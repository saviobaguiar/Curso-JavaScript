var nombre = Number(prompt("Entrez le nombre: "));
if ((nombre >= 0) && (nombre <= 100)){
    console.log(nombre + " est compris entre 0 et 100");
}
if((nombre < 0) || (nombre > 100)){
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}