var heads = 0;
var tails = 0;
for (i = 0; i < 10; i++) {

   var num = Math.floor(Math.random() * 2);

   
    
    if(num==1){
      heads+=1;
    }
    if(num===0){
      tails+=1;
    }
    
}
console.log("Total coin flips: " + i);
console.log("=======================");
console.log("Heads"+heads);
console.log("Tails"+tails);

