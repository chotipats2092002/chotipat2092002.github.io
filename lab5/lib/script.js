let numberStr = prompt("Please enter positive integer");
let numberInt = Number(numberStr);
console.log(numberStr);
console.log(typeof numberStr);
console.log(numberInt);
console.log(typeof numberInt);

while (true) {
  if (Math.sign(numberInt) === -1 || isNaN(numberInt) || (!Number.isInteger(numberInt))) {
    numberStr = prompt("Please enter positive integer");
    numberInt = Number(numberStr);
    console.log(numberStr);
    console.log(numberInt);
  } else if (Math.sign(numberInt) !== -1 && !isNaN(numberInt)) {
    break;
  }
}
showPrimes(numberInt);

// Function
function showPrimes(n) {
  let primeNumberArr = [];
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    primeNumberArr.push(i);
  }
  let alertText = `For n = ${numberInt} prime numbers are : ${primeNumberArr}`;
  console.log(alertText);
  document.getElementById("result").innerHTML = `Result : ${alertText}`;
  alert(alertText);
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
