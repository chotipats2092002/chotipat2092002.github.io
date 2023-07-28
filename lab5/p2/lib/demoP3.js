let divideByTwo = (number) => {
    return number / 2;
}

while (true) {
    let input = prompt("Please enter only integer : ")
    let inputInt = parseInt(input);
    if (!isNaN(inputInt) && Number.isInteger(inputInt)) {
        alert(divideByTwo(inputInt));
        break;
    } else {
        void(0);
    }
}