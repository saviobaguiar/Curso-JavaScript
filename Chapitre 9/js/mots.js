var mots = [];
var comparer = "";

while (comparer !== "stop"){
    comparer = prompt("Entrez une mot ou tapper stop pour arrêter");
    if( comparer !== "stop"){
        mots.push(comparer);
    }
}

for (var i = 0; i < mots.length; i++){
    console.log(mots[i]);
}