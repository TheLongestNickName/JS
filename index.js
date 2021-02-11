// // function sum(a, b){
// //     return a + b;
// // }
// // function sub(a, b) {
// //     return a - b;
// // }
// // function div(a, b){
// //     return a / b;
// // }
// // function  mult(a, b){
// //     return a * b
// // }
// //
// // function calculator(operator, operant1, operant2, operator2, operant3){
// //
// //     let resault1;
// //
// //     if (operator == "sum" && !operator2) {
// //         resault1 = sum(operant1, operant2);
// //     } else if (operator == "sub" && !operator2){
// //         resault1 = sub(operant1, operant2);
// //     } else if (operator == "div" && !operator2) {
// //         resault1 = div(operant1, operant2);
// //     } else if (operator == "mult" && !operator2) {
// //         resault1 = mult(operant1, operant2);
// //     } else if (operator == "sum" && operator2 == "sum" ) {
// //         resault1 = sum(sum(operant1, operant2), operant3);
// //     } else if (operator == "sum" && operator2 == "sub" ){
// //         resault1 = sub(sum(operant1, operant2), operant3);
// //     } else if (operator == "sum" && operator2 == "div"){
// //         resault1 = sum(operant1, div(operant2,operant3));
// //     } else if (operator == "sum" && operator2 == "mult" ) {
// //         resault1 = sum(operant1, mult(operant2, operant3))
// //     }else if (operator == "sub" && operator2 == "sum" ) {
// //         resault1 = sub(sum(operant1, operant2), operant3);
// //     } else if (operator == "sub" && operator2 == "sub" ){
// //         resault1 = sub(sub(operant1, operant2), operant3);
// //     } else if (operator == "sub" && operator2 == "div"){
// //         resault1 = sub(operant1, div(operant2,operant3));
// //     } else if (operator == "sub" && operator2 == "mult" ) {
// //         resault1 = sub(operant1, mult(operant2, operant3))
// //     }else if (operator == "div" && operator2 == "sum" ) {
// //         resault1 = sum(div(operant1, operant2), operant3);
// //     } else if (operator == "div" && operator2 == "sub" ){
// //         resault1 = sub(div(operant1, operant2), operant3);
// //     } else if (operator == "div" && operator2 == "div"){
// //         resault1 = div(operant1, div(operant2,operant3));
// //     } else if (operator == "div" && operator2 == "mult" ) {
// //         resault1 = div(operant1, mult(operant2, operant3));
// //     }else if (operator == "mult" && operator2 == "sum" ) {
// //         resault1 = sum(mult(operant1, operant2), operant3);
// //     } else if (operator == "mult" && operator2 == "sub" ){
// //         resault1 = sub(mult(operant1, operant2), operant3);
// //     } else if (operator == "mult" && operator2 == "div"){
// //         resault1 = mult(operant1, div(operant2,operant3));
// //     } else if (operator == "mult" && operator2 == "mult" ) {
// //         resault1 = mult(operant1, mult(operant2, operant3));
// //     }
// //
// //     return resault1
// // }
// //
// // let globalObj = {
// //     name: "Peter"
// // };
// //
// // function set(name, value){
// //     globalObj[name] = value;
// // }
// //
// // function get(name){
// //     if(globalObj.hasOwnProperty(name)){
// //         return globalObj[name]
// //     } else{
// //         alert(`There are not key ${name}`)
// //     }
// // }
//
// // let start = +prompt('Введите число')
// //
// // while (start > 0){
// //     console.log(` hello from bot ${start}`);
// //     start --;
// // }
// //
// // let objDays = {
// //     1 : "monday",
// //     2 : "tuesday",
// //     3 : "wednesday",
// //     4 : "thursday",
// //     5 : "friday",
// //     6 : "saturday",
// //     7 : "sunday",
// //     8 : "monday",
// //     9 : "tuesday",
// //     10 : "wednesday",
// //     11 : "thursday",
// //     12 : "friday",
// //     13 : "saturday",
// //     14 : "sunday",
// //     15 : "monday",
// //     16 : "tuesday",
// //     17 : "wednesday"
// // }
// //
// // let monday = 0;
// // let tuesday = 0;
// // let wednesday = 0;
// // let thursday = 0;
// // let friday = 0;
// // let saturday = 0;
// // let sunday = 0;
// //
// // for (let key in objDays) {
// //
// //     switch (objDays[key]){
// //         case "monday":
// //             monday++;
// //             break;
// //         case "tuesday":
// //             tuesday++;
// //             break;
// //         case "wednesday":
// //             wednesday++;
// //             break;
// //         case "thursday":
// //             thursday++;
// //             break;
// //         case "friday":
// //             friday++;
// //             break;
// //         case "saturday":
// //             saturday++;
// //             break;
// //         case "sunday":
// //             sunday++;
// //             break;
// //     }
// //
// // }
// // console.log('monday' + '' +monday)
// // console.log('tuesday'+ '' + tuesday)
// // console.log("wednesday"+ '' +wednesday)
// // console.log('thursday' + '' + thursday)
// // console.log('friday' + '' + friday)
// // console.log('saturday' + '' + saturday)
// // console.log('sunday' + '' + sunday)
// //
// // let arr = []
// // let isContinue;
// // let start = 5;
// //
// // while(start){
// //     let value = prompt('Введите число 0 или 1');
// //     let number = parseInt(value);
// //     start--
// //     if(isNaN(number) || !(number == 1 || number == 0)){
// //         alert("вы ввели что-то не так, попробуйте снова")
// //         continue;
// //     }
// //
// //     arr.push(number)
// //     isContinue = confirm('Добавить еще число?')
// //     if (isContinue){
// //         continue;
// //     }
// //     else{
// //         alert('вы закончили!')
// //         start = false;
// //         alert(parseInt( arr.join(''),2))
// //     }
// //
// // }
//
// // function getMin() {
// //     let a = arguments.length
// //        let b = arguments[0];
// //        for(var i=0; i<a; i++){
// //         if (arguments[i]<b){
// //             b = arguments[i];
// //            continue
// //         }
// //     }
// //        return b
// // }
// //
// // console.log(getMin(12,45,26,7,78,76,1))
// // }
//
// let Ingredients = {
//     "Мясо": {
//         "Свенина": "450 грамм",
//         "Говядина": "450 грамм",
//         "Курица": "450 грамм",
//     },
//     "Мясные изделия": {
//         "Ветчина": "300 грамм",
//         "Колбаса": "300 грамм",
//         "Копчености": "300 грамм",
//     },
//     "Растительное масло": "2 Ст.ложки",
//     "Чеснок": "2-4 Зубчиков",
//     "Луковица": "1 штука",
//     "Томатная паста": "2 Ст.ложка",
//     "Маринованные огурчики": "2-4 штуки",
//     "Маслины": "По вкусу(+ каперсы по желанию)",
//     "Соль, перец, специи, зелень": "По вкусу",
//     "Лимон и сметана": "По вкусу",
//     "Мясо": [
//         {name:"Свенина", weight: 450, until: "грамм"},
//         {name:"Говядина", weight: 450, until: "грамм"},
//         {name:"Курица", weight: 450, until: "грамм"},
//     ],
//     "Мясные изделия": [
//         {name:"Ветчина", weight: 300, until: "грамм"},
//         {name:"Колбаса", weight: 300, until: "грамм"},
//         {name:"Копчености", weight: 300, until: "грамм"},
//     ],
//
//     "Растительное масло":{quantity:2,until:"Ст.ложки" },
//     "Чеснок":{quantity:4 ,until:"зубчиков" },
//     "Луковица":{quantity:1 ,until:"штука" },
//     "Томатная паста":{quantity:2 ,until:"Ст.ложка" },
//     "Маринованные огурчики":{quantity:4 ,until:"штуки" },
//     "Маслины":{until:"По вкусу(+ каперсы по желанию)" },
//     "Специи":{until:"По вкусу" },
//     "Лимон и сметана":{until:"По вкусу" },
//
// }
// function showIngredients (obj){
//     let value="";
//     for( var keys in obj){var b = obj[keys];
//
//         if(obj[keys] instanceof Array) {
//             // console.log(obj[keys])
//             // console.log(keys)
//
//             for (var i = 0; i < b.length; i++) {
//                 var resoultArray = b[i]
//                 // console.log(resoultArray)
//                 if (i !== b.length-1){
//                     value += `${keys} - ${resoultArray.name} - ${resoultArray.weight} - ${resoultArray.until} или` + "\n";
//                 }
//                 else {
//                     value += `${keys} - ${resoultArray.name} - ${resoultArray.weight} - ${resoultArray.until}` + "\n";
//                 }
//             }
//         }
//         else {
//             // console.log(obj[keys])
//             value += `${keys}${(!obj[keys].quantity)? "" : ` - ${obj[keys].quantity}`} - ${obj[keys].until}` + "\n";
//         }
//     }
//     alert(`ИНГРЕДИЕНТЫ ДЛЯ СОЛЯНКИ:`+ "\n" + value);
// }
//
// function inputValueIngredients(obj) {
//     var j = 0;
//     for (var keys in obj) {
//         j++;
//     }
//     var valueString = [] ;
//     var valueNumber = [];
//     for (var i = 0; j > i; i++ ){
//
//         if (i == 0){
//             if(!valueString[i]){
//                 valueString.push(prompt("Укажите какой тип мяса вы используете: ", "Свенина, говядина, курица"));
//                 if (valueString[i] === null || valueString[i] == " " || !(valueString[i].toLowerCase() == "Свенина".toLowerCase() || valueString[i].toLowerCase() == "Говядина".toLowerCase() || valueString[i].toLowerCase() == "Курица".toLowerCase())) {
//
//                     valueString.splice(i, 1);
//                     if (!valueString[i]){
//                         alert("Укажите правильный тип продукта");
//                     }
//                     i--
//                     continue;
//                 }
//             }
//             if (!valueNumber[i]){
//                 valueNumber.push(parseInt(prompt("Укажите вес ингридиента: ", "450")));
//                 if(isNaN(valueNumber[i]) || valueNumber[i] > 450 || valueNumber[i] < 450){
//
//                     valueNumber.splice(i, 1);
//                     if (!valueNumber[i]){
//                         alert("Вы указали не правильный вес");
//                     }
//                     i--;
//                     continue;
//                 }
//             }
//             continue
//         }else if(i == 1){
//             if(!valueString[i]){
//                 console.log(valueString[i])
//                 valueString.push(prompt("Укажите какие Мясные изделия вы используете: ", "Ветчина, Колбаса, Копчености"))
//                 console.log(valueString)
//                 if (valueString[i] === null || valueString[i] == " " || !(valueString[i].toLowerCase() == "Ветчина".toLowerCase() || valueString[i].toLowerCase() == "Колбаса".toLowerCase() || valueString[i].toLowerCase() == "Копчености".toLowerCase())) {
//                     valueString.splice(i, 1)
//                     if (!valueString[i]){
//                         alert("Укажите правильный тип продукта")
//                     }
//                     i--
//                     continue
//                 }
//             }
//             if (!valueNumber[i]) {
//                 valueNumber.push(parseInt(prompt("Укажите вес ингридиента: ", "300")))
//                 if (isNaN(valueNumber[i]) || valueNumber[i] > 300 || valueNumber[i] < 300) {
//                     valueNumber.splice(i, 1)
//                     console.log(!valueNumber[i])
//                     if (!valueNumber[i]) {
//                         alert("Вы указали не правильный вес")
//                     }
//                     i--
//                     continue
//                 }
//             }
//         }
//         else if(i == 2){
//             if (!valueNumber[i]) {
//                 valueNumber.push(parseInt(prompt("Сколько Ст. ложек Растительное масло вы используете: ", "2")))
//                 if (isNaN(valueNumber[i]) || valueNumber[i] > 2 || valueNumber[i] < 2) {
//                     valueNumber.splice(i, 1)
//                     console.log(!valueNumber[i])
//                     if (!valueNumber[i]) {
//                         alert("Укажите правильное количество Растительное масло")
//                     }
//                     i--
//                     continue
//                 }
//             }
//         }else if (i == 3){
//             if (!valueNumber[i]) {
//                 valueNumber.push(parseInt(prompt("Сколько зубчиков чеснока  вы используете: ", "2")))
//                 if (isNaN(valueNumber[i]) || valueNumber[i] > 2 || valueNumber[i] < 2) {
//                     valueNumber.splice(i, 1)
//                     console.log(!valueNumber[i])
//                     if (!valueNumber[i]) {
//                         alert("Укажите правильное количество зубчиков чеснока")
//                     }
//                     i--
//                     continue
//                 }
//             }
//         }else if (i == 4){
//             if (!valueNumber[i]) {
//                 valueNumber.push(parseInt(prompt("Сколько шт. Луковиц  вы используете: ", "1")))
//                 if (isNaN(valueNumber[i]) || valueNumber[i] > 1 || valueNumber[i] < 1) {
//                     valueNumber.splice(i, 1)
//                     console.log(!valueNumber[i])
//                     if (!valueNumber[i]) {
//                         alert("Укажите правильное количество Луковиц")
//                     }
//                     i--
//                     continue
//                 }
//             }
//         }else if (i == 5){
//             if (!valueNumber[i]) {
//                 valueNumber.push(parseInt(prompt("Сколько Ст. ложек Томатной пасты  вы используете: ", "2")))
//                 if (isNaN(valueNumber[i]) || valueNumber[i] > 2 || valueNumber[i] < 2) {
//                     valueNumber.splice(i, 1)
//                     console.log(!valueNumber[i])
//                     if (!valueNumber[i]) {
//                         alert("Укажите правильное количество Ст. ложек Томатной пасты")
//                     }
//                     i--
//                     continue
//                 }
//             }
//         }else if (i == 6){
//             if (!valueNumber[i]) {
//                 valueNumber.push(parseInt(prompt("Сколько Маринованных огурчиков  вы используете: ", "4")))
//                 if (isNaN(valueNumber[i]) || valueNumber[i] > 4 || valueNumber[i] < 4) {
//                     valueNumber.splice(i, 1)
//                     console.log(!valueNumber[i])
//                     if (!valueNumber[i]) {
//                         alert("Укажите правильное количество Маринованных огурчиков")
//                     }
//                     i--
//                     continue
//                 }
//             }
//         }
//
//     }
//     return true
// }
// function boilMeat(afterResoult){
//     if(afterResoult){
//         function finished(){
//             console.log("Можно вынимать мясушко")
//         }
//         console.log('Мясо вымойте, выложите в кастрюлю и залейте водой. Туда же отправьте копчености. Можно также добавить лавровый лист и овощи для аромата. Варите бульон на медленном огне пару часов до готовности мяса. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html')
//         setTimeout(finished, 26000);
//         return true;
//     }else {
//         console.log('Нет ингридиентов ')
//         return false
//     }
//
// }
//
// function coldAndChop(afterResoult){
//     if(afterResoult){
//         function coolTheMeat(){
//             console.log("Месо остыло можно нарезать")
//         }
//         console.log('Когда мясо сварилось, аккуратно достаньте его из бульона, остудите немного и измельчите. Бульон процедите и снова отправьте на огонь. Выложите туда нарезанное мясо. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html')
//         setTimeout(coolTheMeat, 26000);
//         return true;
//     }else {
//         console.log('Мясо еще не сварилось')
//         return false
//     }
// }
// function addDeliMeats(afterResoult){
//     if(afterResoult){
//         function addDeli(){
//             console.log("Деликатесы положили")
//         }
//         console.log('Следом отправьте мясные деликатесы. В данном случае это ветчина и салями. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html')
//         setTimeout(addDeli, 2000);
//         return true;
//     }else {
//         console.log('Проверь прошлое дествие ')
//         return false
//     }
// }
// function cutting(afterResoult){
//     if(afterResoult){
//         function cutting(){
//             console.log("Нарезали выпили и закусили ")
//         }
//         console.log('Нарежьте огурчики. Маслины можно добавлять перед подачей в тарелку или сразу отправить в бульон. Я предпочитаю второй вариант. Кроме того, я советую добавить горсть каперсов. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html')
//         setTimeout(cutting, 4000);
//         alert(" да бы не писать повторящий код выложу все остальные действия в консоле")
//         console.log("Выложите все в бульон, доведите до кипения и варите на медленном огне. Посолите по вкусу. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html")
//         console.log("Параллельно очистите и измельчите лук с чесноком. Выложите на сковороду с растительным маслом и обжарьте. Добавьте томатную пасту и влейте немного бульона или рассола от огурцов. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html")
//         console.log("Параллельно очистите и измельчите лук с чесноком. Выложите на сковороду с растительным маслом и обжарьте. Добавьте томатную пасту и влейте немного бульона или рассола от огурцов. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html")
//         console.log("Выложите его в бульон, аккуратно перемешайте и варите солянку еще минут 5-7. Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html")
//         console.log("Выключите огонь, накройте кастрюлю крышкой и оставьте на полчасика, чтобы солянка настоялась. Подавайте к столу горячей, дополнив лимоном и сметаной по желанию. Приятного аппетита! Подробнее: https://povar.ru/recipes/sup-solyanka_klassicheskii_recept-54159.html")
//         return true;
//     }else {
//         console.log('Забыл деликатесик ты добавить')
//         return false
//     }
// }
// async function CookingHodgepodge(Ingredients){
//     await  showIngredients(Ingredients)
//     await boilMeat(inputValueIngredients(Ingredients))
//     await coldAndChop(boilMeat)
//     await addDeliMeats(coldAndChop)
//     await cutting(addDeliMeats)
//     await alert("Вкусняха то кая, что значит папкин рецепт")
// }
// CookingHodgepodge(Ingredients)

// let blackArr = [8, 17, 3, 48, 15, 14, 1];
//
// function minNubers(arrs){
//     let value;
//     let value2;
//     for (let i = 0; i <arrs.length; i++){
//         if (!value){
//             value = arrs[i]
//         }
//         if (arrs[i] < value){
//             value2 = value
//             value = arrs[i]
//
//         }
//     }
//     return (value+value2)
// }
//
// console.log(minNubers(blackArr))
//
//
// function house (argument) {
//     if (house.caller.name == 'serega') {
//         var input = +prompt();
//
//         var nuberOfStoreys = 11;
//         var entranceNumber = 10;
//         var numberOfQuartics = 5;
//
//         if (input < 1 || input > nuberOfStoreys * entranceNumber * numberOfQuartics) {
//             return "incorected number"
//         }
//
//
//         var apartmentsInTheEntrance = nuberOfStoreys * numberOfQuartics
//         var entranceBefore = Math.trunc((input - 1) / apartmentsInTheEntrance)
//         var storey = Math.trunc((((input - 1 - entranceBefore * apartmentsInTheEntrance)) / numberOfQuartics) + 1)
//         return (entranceBefore + 1 + " - " + storey)
//
//         return (value + value2)
//     }
// }
//
// function  serega(){
//     house()
// }
// serega()

let firstname = document.getElementById('firsName');
let lastName = document.getElementById('lastname');
let email = document.getElementById('emailAddres');
let password = document.getElementById('password');
let sendForm = document.getElementById('sendForm');


function checkSpace(str){
    let length = str.length;
    let boole;
    for(let i = 0; i < length; i++){
        if (str[i] == " "){
            return false
        }else{
            boole = true;
        }
    }
    return boole
}
function checkStr(str){

}
function checkEmail(str){
    if(str.indexOf('@gmail.com') == str.lastIndexOf('@gmail.com')){
        return true;
    }else {
        return false;
    }
}
function checkFirstUpperCase (str){
    if(str[0] == str[0].toUpperCase() ){
        return true;
    }
    else {
        return false;
    }
}
function checkDot(str){
    if(str[0] == '.' || str[str.length-1] == '.'){
        return false;
    }else {
        return  true;
    }
}
function checkPassword(str){
    // debugger
    let number = false
    let valueStr = false
    for (let i = 0; i < str.length; i++){
        if (!isNaN(str[i])){
            number = true;
        }else{
            valueStr = true
        }
    }
    return (number && valueStr)
}

sendForm.onclick = function (){
    debugger
    if (checkSpace(firstname.value) && checkStr(firstname.value) && checkDot(firstname.value) && checkFirstUpperCase(firstname.value) ){
        firstname.style.border = '2px solid green'
    }else{
        firstname.value = ''
        firstname.style.border = '2px solid red'
    }
}