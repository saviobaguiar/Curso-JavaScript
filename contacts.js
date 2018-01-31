var Contact = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function () {
        console.log("Nom: " + this.nom + ". Prenom: " + this.prenom);
    }

};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

var liste = [contact1, contact2];

console.log("Bienvenue dans le gestionaire de contact!");
console.log("1: Lister les contacts");
console.log("2: Ajouter un contact");
console.log("0: Quitter");

var aux = 0;

while(aux == 0){
    
var cmd = Number(prompt("Choisissez une option"));

    switch (cmd) {
       
        case 1:
        
            console.log("Voici la liste de tous les contacts:");

            for (var i = 0; i < liste.length; i++) {
                console.log(liste[i].decrire());
            }
            break;
        
        case 2:
            
            var contact = Object.create(Contact);
            var ePrenom = prompt("Entrez le prenom");
            var eNom = prompt("Entrez le nom");
            contact.init(eNom, ePrenom);
            liste.push(contact);
            console.log("Le nouveau contact a été ajouté");
            break;

        case 0:
          
            console.log("Au revoir.");
            aux = 1;
            break;
    }   
}