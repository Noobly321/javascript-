function greenTicket(a, b, c) {
if(a == b && b == c){
  return(20);
  
}
if(a == b || b == c || a == c){
  return(10);
}

if(a != b && b != c && a != c){
  return(0);
}  
}
var output = greenTicket(2,1,1);
console.log(output);
