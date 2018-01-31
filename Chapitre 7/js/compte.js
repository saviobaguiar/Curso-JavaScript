var compte ={
    titulaire: "Alex",
    solde: 0,
    crediter: function(credit){
        this.solde = this.solde + credit;
    },
    debiter: function(debit){
        this.solde = this.solde - debit;
    },
    decrire: function(){
        console.log("Titulaire: " + compte.titulaire + ", solde: " + compte.solde);
    }
    
};

console.log(compte.decrire());
var credit = Number(prompt("Vous voulez crediter combien?"));
compte.crediter(credit);
var debit = Number(prompt("Vous voulez débiter combien?"));
compte.debiter(debit);
console.log(compte.decrire());
