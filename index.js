// function sum(a, b){
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function div(a, b){
//     return a / b;
// }
// function  mult(a, b){
//     return a * b
// }
//
// function calculator(operator, operant1, operant2, operator2, operant3){
//
//     let resault1;
//
//     if (operator == "sum" && !operator2) {
//         resault1 = sum(operant1, operant2);
//     } else if (operator == "sub" && !operator2){
//         resault1 = sub(operant1, operant2);
//     } else if (operator == "div" && !operator2) {
//         resault1 = div(operant1, operant2);
//     } else if (operator == "mult" && !operator2) {
//         resault1 = mult(operant1, operant2);
//     } else if (operator == "sum" && operator2 == "sum" ) {
//         resault1 = sum(sum(operant1, operant2), operant3);
//     } else if (operator == "sum" && operator2 == "sub" ){
//         resault1 = sub(sum(operant1, operant2), operant3);
//     } else if (operator == "sum" && operator2 == "div"){
//         resault1 = sum(operant1, div(operant2,operant3));
//     } else if (operator == "sum" && operator2 == "mult" ) {
//         resault1 = sum(operant1, mult(operant2, operant3))
//     }else if (operator == "sub" && operator2 == "sum" ) {
//         resault1 = sub(sum(operant1, operant2), operant3);
//     } else if (operator == "sub" && operator2 == "sub" ){
//         resault1 = sub(sub(operant1, operant2), operant3);
//     } else if (operator == "sub" && operator2 == "div"){
//         resault1 = sub(operant1, div(operant2,operant3));
//     } else if (operator == "sub" && operator2 == "mult" ) {
//         resault1 = sub(operant1, mult(operant2, operant3))
//     }else if (operator == "div" && operator2 == "sum" ) {
//         resault1 = sum(div(operant1, operant2), operant3);
//     } else if (operator == "div" && operator2 == "sub" ){
//         resault1 = sub(div(operant1, operant2), operant3);
//     } else if (operator == "div" && operator2 == "div"){
//         resault1 = div(operant1, div(operant2,operant3));
//     } else if (operator == "div" && operator2 == "mult" ) {
//         resault1 = div(operant1, mult(operant2, operant3));
//     }else if (operator == "mult" && operator2 == "sum" ) {
//         resault1 = sum(mult(operant1, operant2), operant3);
//     } else if (operator == "mult" && operator2 == "sub" ){
//         resault1 = sub(mult(operant1, operant2), operant3);
//     } else if (operator == "mult" && operator2 == "div"){
//         resault1 = mult(operant1, div(operant2,operant3));
//     } else if (operator == "mult" && operator2 == "mult" ) {
//         resault1 = mult(operant1, mult(operant2, operant3));
//     }
//
//     return resault1
// }
//
// let globalObj = {
//     name: "Peter"
// };
//
// function set(name, value){
//     globalObj[name] = value;
// }
//
// function get(name){
//     if(globalObj.hasOwnProperty(name)){
//         return globalObj[name]
//     } else{
//         alert(`There are not key ${name}`)
//     }
// }

let start = +prompt('Введите число')

while (start > 0){
    console.log(` hello from bot ${start}`);
    start --;
}

let objDays = {
    1 : "monday",
    2 : "tuesday",
    3 : "wednesday",
    4 : "thursday",
    5 : "friday",
    6 : "saturday",
    7 : "sunday",
    8 : "monday",
    9 : "tuesday",
    10 : "wednesday",
    11 : "thursday",
    12 : "friday",
    13 : "saturday",
    14 : "sunday",
    15 : "monday",
    16 : "tuesday",
    17 : "wednesday"
}

let monday = 0;
let tuesday = 0;
let wednesday = 0;
let thursday = 0;
let friday = 0;
let saturday = 0;
let sunday = 0;

for (let key in objDays) {

    switch (objDays[key]){
        case "monday":
            monday++;
            break;
        case "tuesday":
            tuesday++;
            break;
        case "wednesday":
            wednesday++;
            break;
        case "thursday":
            thursday++;
            break;
        case "friday":
            friday++;
            break;
        case "saturday":
            saturday++;
            break;
        case "sunday":
            sunday++;
            break;
    }

}
console.log('monday' + '' +monday)
console.log('tuesday'+ '' + tuesday)
console.log("wednesday"+ '' +wednesday)
console.log('thursday' + '' + thursday)
console.log('friday' + '' + friday)
console.log('saturday' + '' + saturday)
console.log('sunday' + '' + sunday)

let arr = []
let isContinue;
let start = 5;

while(start){
    let value = prompt('Введите число 0 или 1');
    let number = parseInt(value);
    start--
    if(isNaN(number) || !(number == 1 || number == 0)){
        alert("вы ввели что-то не так, попробуйте снова")
        continue;
    }

    arr.push(number)
    isContinue = confirm('Добавить еще число?')
    if (isContinue){
        continue;
    }
    else{
        alert('вы закончили!')
        start = false;
        alert(parseInt( arr.join(''),2))
    }

}