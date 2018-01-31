function calculer(a, b, c){

  switch(b){
    
      case "+":
            d = a + c;
            console.log(d);
            break;
    
      case "-":
            d = a - c;
            console.log(d);
            break;
          
      case "*":
            d = a * c;
            console.log(d);
            break;
          
      case "/":
            d = a / c;
            console.log(d);
            break;
          
  }   
}
    
console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0));