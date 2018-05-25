// pathagriam therom
function rightTriangle(a,b,c){
  if(a * a + b * b === c * c){
    return true;
  }  
  if(a * a + b * b != c * c){
    return false;
  } 
}
var output = rightTriangle(3,4,5);
console.log(output);
