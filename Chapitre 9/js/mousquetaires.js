var noms = [];
noms.push("Athos");
noms.push("Porthos");
noms.push("Aramis");

console.log("Voici les trois mousquetaires:");
noms.forEach( function(nom){
    console.log(nom);
});

noms.push("D'artagnan");
console.log("A présent, ils sont quatre!");
noms.forEach(function(nom){
    console.log(nom);
});