var data = ["Pisang", "Jeruk", "Apel", "Mangga"];
console.log(data);
function panggilPop() {
  data.pop();
  return data;
}
function panggilShift() {
  data.shift();
  return data;
}

console.log(panggilPop());
console.log(panggilShift());
