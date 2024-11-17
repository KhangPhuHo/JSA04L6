const user = [{id: 1, name: 'AnhLiem'},{id: 2, name: 'DuongMama'},{id: 3, name: 'Miner'}];
let newuser = {id: 4, name: 'Khang'}

user.push(newuser)
user.splice(3,1)
console.log(user)

let person = {
    name: 'Phu Khang' ,
    age: 14,
    city: 'HCMcity'
};

person.email = 'khang@mindx.edu.vn';
delete person.age;
console.log(person)
let greet = `Chào mừng ${person.name}`;
console.log(greet)

var a = 6;
var b = 47;
var sum = a + b;
console.log(sum)