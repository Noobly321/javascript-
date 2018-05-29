function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  var a = preTaxAndTipAmount * '0.095';
  var b = preTaxAndTipAmount * ".15";
  var c = a + b + preTaxAndTipAmount;
  return(c)
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
