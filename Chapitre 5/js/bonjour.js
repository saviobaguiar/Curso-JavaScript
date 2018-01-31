function direBonjour(prenom, nom){
    var message = "Bonjour, " + prenom + " " + nom + "!";
    return message;
}

a = prompt("Entrez votre prenom:");
b = prompt("Entrez votre nom");
console.log(direBonjour(a, b));
