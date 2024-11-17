var a = 5;

for ( let i = 0; i <= a; i++) {
    let row =' '
    for ( let x = 1; x <= i ; x++) {
        row += x + ' '
    }
    console.log( row.trim())
}

let input = 'abc';
let daoNguocChu = createSymmetricString(input);

function createSymmetricString(str){
    let reverseStr = str.split('').reverse().join('')
    return str + reverseStr.slice(1)
}

console.log(daoNguocChu)

let theLiem = ['ThayBA', 'DuongQua', 'mainHC'];
for ( let i = 0; i < theLiem.length; i += 1){
    console.log(theLiem[i])
}
theLiem.push(5 , 10);
theLiem.splice(0, 1, "Kieu");
console.log( theLiem)

theLiem[4] = "Consoicodoc";
console.log(theLiem)

theLiem.splice(2,1,'À hú')
console.log(theLiem)

console.log(theLiem.indexOf('Consoicodoc'));

let hocSinh = {
    name: 'Rikuhachima Aru',
    age: 17,
    job: '2nd student',
}
console.log(hocSinh.name);
console.log(hocSinh['job']);

for(let key in hocSinh){
    console.log(key)
}

hocSinh.teacher = 'Người Thầy liêm nhất xứ Kivoto';
hocSinh['parent'] = 'Thầy LIÊM';
hocSinh['parent'] = 'Thầy LIÊM Nhất';
console.log(hocSinh)

if('age' in hocSinh){
    console.log("Key 'age' tồn tại trong object hocSinh")
}

if(hocSinh.hasOwnProperty('gender')){
    console.log("key 'gender' tồn tại trong object hocSinh")
}

delete hocSinh.age;
console.log(hocSinh)
let loi_xin_loi = " "
for(let i = 0; i < 50; i++){
    loi_xin_loi += '\n' + (`${i+1}. Anh xin lỗi`)
}
console.log(loi_xin_loi)

