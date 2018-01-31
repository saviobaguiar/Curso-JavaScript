function perimetre(r){
    return 2 * r * Math.PI;
}

function aire(r){
    return Math.pow(r, 2) * Math.PI;
}

r = Number(prompt("Entrez le rayon: "));
console.log("Le perimetre est: " + perimetre(r));
console.log("Le aire est: " + aire(r));
