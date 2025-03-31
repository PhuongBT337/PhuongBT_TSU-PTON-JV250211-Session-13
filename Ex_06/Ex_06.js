let numbers = [];
for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
console.log(numbers);

let k = Number(prompt('Nhap so can kiem tra: '));
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === k) {
        count++;
    }
}

alert(`So lan hien thi cua ${k}: ${count}`);