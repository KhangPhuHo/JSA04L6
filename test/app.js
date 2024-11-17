let a = 5;
let b = 10;
let result = (a < b) && (a > 0);
console.log(result)

let gender = 1 ;

if ( gender == 1 ) {
    console.log ( 'Nam' )
} else if ( gender == 3 ) {
    console.log( 'Nữ' )
} else {
    alert ( 'Gay' )
}

let grade = 0
if ( grade < 0 || grade > 10){
    console.log( 'Có từ 0 --> 10 à bro')
} else if ( grade >= 9 && grade <= 10){
    console.log( 'Học sinh xúc xích')
} else if ( grade > 5 && grade < 9){
    console.log( 'Học sinh khá')
} else if ( grade == 5 ){
    console.log( 'Học sinh trung bình')
} else if ( grade < 5){
    console.log( 'Cân nhắc ở lại lớp')
}

let HoiLoi = ('Anh xin lỗi em!')
for ( i = 1; i <= 50; i++){
    console.log(HoiLoi)
}

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum)

