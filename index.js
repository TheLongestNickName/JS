function sum(a, b){
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b){
    return a / b;
}
function  mult(a, b){
    return a * b
}

function calculator(operator, operant1, operant2, operator2, operant3){

    let resault1;

    if (operator == "sum" && !operator2) {
        resault1 = sum(operant1, operant2);
    } else if (operator == "sub" && !operator2){
        resault1 = sub(operant1, operant2);
    } else if (operator == "div" && !operator2) {
        resault1 = div(operant1, operant2);
    } else if (operator == "mult" && !operator2) {
        resault1 = mult(operant1, operant2);
    } else if (operator == "sum" && operator2 == "sum" ) {
        resault1 = sum(sum(operant1, operant2), operant3);
    } else if (operator == "sum" && operator2 == "sub" ){
        resault1 = sub(sum(operant1, operant2), operant3);
    } else if (operator == "sum" && operator2 == "div"){
        resault1 = sum(operant1, div(operant2,operant3));
    } else if (operator == "sum" && operator2 == "mult" ) {
        resault1 = sum(operant1, mult(operant2, operant3))
    }else if (operator == "sub" && operator2 == "sum" ) {
        resault1 = sub(sum(operant1, operant2), operant3);
    } else if (operator == "sub" && operator2 == "sub" ){
        resault1 = sub(sub(operant1, operant2), operant3);
    } else if (operator == "sub" && operator2 == "div"){
        resault1 = sub(operant1, div(operant2,operant3));
    } else if (operator == "sub" && operator2 == "mult" ) {
        resault1 = sub(operant1, mult(operant2, operant3))
    }else if (operator == "div" && operator2 == "sum" ) {
        resault1 = sum(div(operant1, operant2), operant3);
    } else if (operator == "div" && operator2 == "sub" ){
        resault1 = sub(div(operant1, operant2), operant3);
    } else if (operator == "div" && operator2 == "div"){
        resault1 = div(operant1, div(operant2,operant3));
    } else if (operator == "div" && operator2 == "mult" ) {
        resault1 = div(operant1, mult(operant2, operant3));
    }else if (operator == "mult" && operator2 == "sum" ) {
        resault1 = sum(mult(operant1, operant2), operant3);
    } else if (operator == "mult" && operator2 == "sub" ){
        resault1 = sub(mult(operant1, operant2), operant3);
    } else if (operator == "mult" && operator2 == "div"){
        resault1 = mult(operant1, div(operant2,operant3));
    } else if (operator == "mult" && operator2 == "mult" ) {
        resault1 = mult(operant1, mult(operant2, operant3));
    }

    return resault1
}

let globalObj = {
    name: "Peter"
};

function set(name, value){
    globalObj[name] = value;
}

function get(name){
    if(globalObj.hasOwnProperty(name)){
        return globalObj[name]
    } else{
        alert(`There are not key ${name}`)
    }
}