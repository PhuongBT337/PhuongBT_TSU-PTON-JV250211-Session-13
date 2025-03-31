let str = prompt(`Moi ban nhap chuoi so bat ki: `);
let strSplit = str.split(``);
let maxValue= Number(str[0]);
for (let i = 1; i < strSplit.length; i++) {
    if (maxValue<str[i]){
        maxValue=str[i];
    }
}
alert(`Gia tri lon nhat la: ${maxValue}`);
