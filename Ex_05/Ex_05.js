let numbers = [];

for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
console.log(`Your list number: ${numbers}`);


let sumEven= 0;
let sumOdd= 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0 ){
        sumEven += numbers[i];
    }else if(numbers[i] % 2 === 1) {
        sumOdd += numbers[i];
    }
}

alert(`Tong cac so chan la: ${sumEven}`);
alert(`Tong cac so le la: ${sumOdd}`);