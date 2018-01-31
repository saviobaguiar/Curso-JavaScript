var unObjet ={
    a: 2
};

var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a);

var encoreUnAutreObjet = Object.create(unAutreObjet);

console.log(encoreUnAutreObjet.a);
console.log(encoreUnAutreObjet.b);