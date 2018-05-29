function computeFactorialOfN(n) {
  var multiply = 1;
  for (var i = 1; i <= n; i++) {
    multiply *= i;
  }
  return multiply;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6
