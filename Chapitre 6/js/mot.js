function compteurNbVoyelles(){
  var nombreVoy = 0;
  var nombreCon = 0;
    for( var i = 0; i < mot.length; i++){
        if ( mot[i] === "a" || mot[i] === "e" || mot[i] === "i" || mot[i] === "o"
        || mot[i] === "u" || mot[i] === "é" || mot[i] === "è" || mot[i] === "à" 
        || mot[i] === "ù"){
            nombreVoy++;
        }
        else{
            nombreCon++;
        }
    }
    return nombreVoy + " voyelle(s) et " + nombreCon + " consonne(s)";
}

function inverser(){
    var motInverse = "";
    for( var i = mot.length - 1; i >= 0; i--){
        motInverse = motInverse +  mot[i];
    }
    if(motInverse === mot){
        console.log("Il s'agit d'un mot palindrome!");
    }
    else{
        console.log("Ce n'est pas un palindrome!");
    }
    return motInverse;
}

function LeetSpeak(){
    var motLS = "";
    
    for ( var i = 0; i < mot.length; i++){
        motLS = motLS + trouverLS(mot[i]);
    }
    return motLS;
}
        
function trouverLS(lettre){
    
    var lettreLS = lettre
        
        switch(lettre){
        
            case  "a" || "A":
                lettreLS = "4";
                break;
        
            case "b" || "B":
                lettreLS = "8";
                break;
        
            case "e" || "E":
                lettreLS = "3";
                break;
              
            case "l" || "L":
                lettreLS = "1";
                break;
        
        
            case "o" || "O":
                lettreLS = "0";
                break;
        
            case "s" || "S":
                lettreLS = "5";
                break;
            
            case "t" || "T":
                lettreLS = "7";
                break;
        }    
        return lettreLS;
}

var mot = prompt("Entrez une mot:");
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en minuscules: " + mot.toLowerCase());
console.log("Il s'écrit en majuscules: " + mot.toUpperCase());
console.log("Il contient " + compteurNbVoyelles());
console.log("Il s'écrit à l'envers: " + inverser());
console.log("Il s'ecrit en leet speak: " + LeetSpeak());