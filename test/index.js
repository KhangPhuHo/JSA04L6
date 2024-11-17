var a = [1,2,3,4,5,6,7,8,9];
let evenNumbers = [];
let oddNumbers = [];
let sumEven = 0;
let sumOdd = 0;
let soChoTruoc = 4;
let count = 0;
let soConLai = 0;
for ( let i = 0; i < a.length; i++){
    if (a[i] % 2 === 0 ) {
        evenNumbers.push(a[i]);
        sumEven += a[i];
    } else {
        oddNumbers.push(a[i]);
        sumOdd += a[i];
    }
}

for (let i = 0; i < a.length; i++ ){
    if (a[i] > soChoTruoc){
        count++;
    } else if (a[i] <= soChoTruoc){
        soConLai++;
    }
}
console.log('Số chẵn:', evenNumbers)
console.log('Số lẻ:', oddNumbers)
console.log("Tổng số chẵn:", sumEven);
console.log("Tổng số lẻ:", sumOdd);
console.log(`Có ${count} số lớn hơn ${soChoTruoc}.`);
console.log(`Còn lại ${soConLai} số bé hơn hoặc bằng ${soChoTruoc}`);


