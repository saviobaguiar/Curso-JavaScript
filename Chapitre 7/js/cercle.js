var r = Number(prompt("Entrez le rayon d'un cercle:"));

var cercle ={
    rayon: r,
    perimetre: function(){
        var per = 2 * r * Math.PI;
        return per;
    },
    aire: function(){
        var area = Math.pow(r,2) * Math.PI;
        return area;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());