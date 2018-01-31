var heure = Number(prompt("Entrez les heures: "));
var minute = Number(prompt("Entrez les minutes: "));
var secondes = Number(prompt("Entrez les secondes: "));


if((heure <= 23) && (heure >= 0) && (minute <= 59) && (minute >= 0) && (secondes <= 59) && (secondes >= 0)){
    secondes++;
    
    if(secondes === 60){
        secondes = 0;
        minute++;
        
        if (minute === 60){
            minute = 0;
            heure++;
            
            if(heure === 24){
                heure = 0;
            }
        }
    }
    console.log("Dans une seconde, il sera: " + heure + "heures, " + minute + "minutes et " + secondes + "secondes");
}

else{
    console.log("Entrez une heure valide!");
}


/*
var heures = Number(prompt("Entrez les heures :"));
var minutes = Number(prompt("Entrez les minutes :"));
var secondes = Number(prompt("Entrez les secondes :"));

// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
    (secondes >= 0) && (secondes <= 59)) {
    secondes++; // On incrémente les secondes
    if (secondes === 60) {
        // Il faut mettre les secondes à 0 et passer à la minute suivante
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            // Il faut mettre les minutes à 0 et passer à l'heure suivante
            minutes = 0;
            heures++;
            if (heures === 24) { // L'heure suivante est minuit
                heures = 0;
            }
        }
    }
    console.log("Dans une seconde, il sera " + heures + " heures, " +
        minutes + " minutes et " + secondes + " secondes");
} else {
    console.log("Heure incorrecte !");
}
*/