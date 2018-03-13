var removeNegativeValue = function(input) {
  if (input == undefined){
    var results = [];
    return results;
  }
  else{
    var results = input.filter(function(filtre){
        return filtre >= 0;
    })
    return results;
  }
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
