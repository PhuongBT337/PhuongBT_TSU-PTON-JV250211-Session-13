let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let inputNumber = Number(prompt(`input your favorite numbers`));
let rightNumber = false;

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === inputNumber) {
        rightNumber = true;
    }
}

if (rightNumber) {
    alert(`Bingo`);
} else {
    alert(`Chúc bạn may mắn lần sau`);
}

