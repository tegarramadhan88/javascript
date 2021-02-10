// function panggilNestedArray(value) {
//   var newArray = [];
//   for (var i = 0; i < value.length; i++) {
//     newArray.push([]);
//   }

//   for (var i = 0; i < value.length; i++) {
//     for (var j = 0; j < value.length; j++) {
//       newArray.push(value[i][j]);
//     }
//   }

//   return newArray;
// }

// var nestedArray = [
//   [1, 2, 3, 4],
//   ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
//   ["Facebook", "Tesla", "Microsoft", "Apple"],
// ];

// console.log(panggilNestedArray(nestedArray));

function panggilNestedArray(value) {
  var newArray = [];
  for (var i = 0; i < value.length; i++) {
    for (var j = 0; j <= value.length; j++) {
      newArray.push(value[i][j]);
    }
  }
  return newArray;
}

var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

console.log(panggilNestedArray(nestedArray));
