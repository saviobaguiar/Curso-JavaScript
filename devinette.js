/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var i;
for (i =1; i<= 6; i++){
    var numero = prompt("Saisir votre numero:");
    
    if(numero <= 100 && numero >=0){
    
        if(numero == solution){
            console.log("Bravo! La solution était " + numero);
            i = 0;
            break;
        }
    
        if (numero > solution){
            console.log(numero + " est trop grand");
        }
        else
            console.log(numero + " est trop petit");
        }
    else
        console.log("Entrez un numero entre 0 et 100!");
}

if (i != 0){
    console.log("Désolé, vous avez perdu!");
    console.log("La solution était: " + solution);
}