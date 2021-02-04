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

// let start = +prompt('Введите число')
//
// while (start > 0){
//     console.log(` hello from bot ${start}`);
//     start --;
// }
//
// let objDays = {
//     1 : "monday",
//     2 : "tuesday",
//     3 : "wednesday",
//     4 : "thursday",
//     5 : "friday",
//     6 : "saturday",
//     7 : "sunday",
//     8 : "monday",
//     9 : "tuesday",
//     10 : "wednesday",
//     11 : "thursday",
//     12 : "friday",
//     13 : "saturday",
//     14 : "sunday",
//     15 : "monday",
//     16 : "tuesday",
//     17 : "wednesday"
// }
//
// let monday = 0;
// let tuesday = 0;
// let wednesday = 0;
// let thursday = 0;
// let friday = 0;
// let saturday = 0;
// let sunday = 0;
//
// for (let key in objDays) {
//
//     switch (objDays[key]){
//         case "monday":
//             monday++;
//             break;
//         case "tuesday":
//             tuesday++;
//             break;
//         case "wednesday":
//             wednesday++;
//             break;
//         case "thursday":
//             thursday++;
//             break;
//         case "friday":
//             friday++;
//             break;
//         case "saturday":
//             saturday++;
//             break;
//         case "sunday":
//             sunday++;
//             break;
//     }
//
// }
// console.log('monday' + '' +monday)
// console.log('tuesday'+ '' + tuesday)
// console.log("wednesday"+ '' +wednesday)
// console.log('thursday' + '' + thursday)
// console.log('friday' + '' + friday)
// console.log('saturday' + '' + saturday)
// console.log('sunday' + '' + sunday)
//
// let arr = []
// let isContinue;
// let start = 5;
//
// while(start){
//     let value = prompt('Введите число 0 или 1');
//     let number = parseInt(value);
//     start--
//     if(isNaN(number) || !(number == 1 || number == 0)){
//         alert("вы ввели что-то не так, попробуйте снова")
//         continue;
//     }
//
//     arr.push(number)
//     isContinue = confirm('Добавить еще число?')
//     if (isContinue){
//         continue;
//     }
//     else{
//         alert('вы закончили!')
//         start = false;
//         alert(parseInt( arr.join(''),2))
//     }
//
// }

function getMin(){
//     let a = arguments.length
//        let b = arguments[0];
//        for(var i=0; i<a; i++){
//         if (arguments[i]<b){
//             b = arguments[i];
//            continue
//         }
//     }
//        return b
// }
//
// console.log(getMin(12,45,26,7,78,76,1))

    let Ingredients = {
        "Мясо": {
            "Свенина": "450 грамм",
            "Говядина": "450 грамм",
            "Курица": "450 грамм",
        },
        "Мясные изделия": {
            "Ветчина": "300 грамм",
            "Колбаса": "300 грамм",
            "Копчености": "300 грамм",
        },
        "Растительное масло": "2 Ст.ложки",
        "Чеснок": "2-4 Зубчиков",
        "Луковица": "1 штука",
        "Томатная паста": "2 Ст.ложка",
        "Маринованные огурчики": "2-4 штуки",
        "Маслины": "По вкусу(+ каперсы по желанию)",
        "Соль, перец, специи, зелень": "По вкусу",
        "Лимон и сметана": "По вкусу",
    }


    function showIngredients (obj){
        let value="";
        for( var keys in obj){
            var b = obj[keys]
            if (typeof (b) == "object"){
                for(var keys2 in b){
                    value += `${keys}  -  ${keys2}  -  ${b[keys2]} или` + "\n"
                }
            } else {
                value += `${keys}  -  ${obj[keys]}` + "\n"
            }
        }
        alert(`ИНГРЕДИЕНТЫ ДЛЯ СОЛЯНКИ:`+ "\n" + value)
    }
    function inputValueIngredients(obj) {
        let newObj = {...obj, "Мясо": {...obj["Мясо"]}, "Мясные изделия": {...obj["Мясные изделия"]}}
        var i = 0;
        var value = "";
        var value2 = [];
        for (var keys in newObj) {
            i++;
        }

        for (i-3; 0 < i; i--) {

            switch (i){
                case 7:
                    value2.push(prompt("Укажите какой тип мяса вы используете: Свенина, говядина, курица - через зяпятую укажите вес", "Тип мяса, 450"  ))
                    break
                case 6:
                    value2.push(prompt("Укажите какой тип мясных изделий вы используете: Ветчина, Колбаса, Копчености - через зяпятую укажите вес", "Мясныe изделия,300"  ))
                    break
                case 5:
                    value2.push(prompt("Сколько зубочков чеснока вы используете?  ", "2"  ))
                    break
                case 4:
                    value2.push(prompt("Сколько столовых ложек Растительного масла вы используете? ", "2-4"  ))
                    break
                case 3:
                    value2.push(prompt("Сколько луковиц вы используете? ", "1"  ))
                    break
                case 2:
                    value2.push(prompt("Сколько столовых ложек  Томатной пасты вы используете? ", "2"  ))
                    break
                case 1:
                    value2.push(prompt("Сколько Маринованных огурцрв вы используете? ", "2-4"  ))
                    break
            }
            console.log(newObj["Мясные изделия"]["Ветчина"] == "300 грамм")
            // for (var keys in newObj) {
            //     var b = newObj[keys];
            //
            //     if (typeof (b) == "object") {
            //
            //         for (var keys2 in b) {
            //             value += `${keys2}, `
            //         }
            //         console.log(value)
            //
            //     } else {
            //         // value += `${keys}  -  ${obj[keys]}` + "\n"
            //     }
            //
            // }

        }
    }

    function CookingHodgepodge(Ingredients){
        showIngredients(Ingredients)
        inputValueIngredients(Ingredients)
    }




    CookingHodgepodge(Ingredients);