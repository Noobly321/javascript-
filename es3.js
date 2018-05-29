function flipPairs(str) {
  var array = str.split('');
  var result = [];
  for (var i = 0; i < array.length; i += 2) {
    result.push(array[i + 1], array[i]);
  }
    return result.join('');
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';

var output = flipPairs(input);

console.log(output); 
