let input;
let inputInt;
let integerArr = [];
let list;

let readInput = () => {
  let readArr = integerArr;
  return readArr;
};

let displayStats = (callback) => {
  let arr = callback.length === 0 ? null : callback;
  let min = callback.length === 0 ? 0 : Math.min(...arr);
  let max = callback.length === 0 ? 0 : Math.max(...arr);
  let average = callback.length === 0 ? 0 : avg(arr);
  let text =
    callback.length === 0
      ? `For the list that is empty, the average is ${average}, the minimum is ${min}, the maximum is ${max}`
      : `For the list ${arr}, the average is ${average}, the minimum is ${min}, the maximum is ${max}`;
  alert(text);
};

let avg = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return Number(sum / array.length).toFixed(2);
};

while (true) {
  input = prompt("Enter an integer (a negative integer to quit) : ");
  inputInt = parseInt(input);

  if (!isNaN(inputInt)) {
    if (inputInt >= 0) {
      integerArr.push(inputInt);
      console.log(integerArr);
    } else {
      break;
    }
  } else if (inputInt === -1) {
    break;
  }
}

list = readInput();
displayStats(list);
