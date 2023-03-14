function penjumlahan(a, b){
    console.log(a);
    console.log(b);
    return a + b;
}
function pengurangan(a, b){
    console.log(a);
    console.log(b);
    return a - b;
}
function perkalian(a, b){
    console.log(a);
    console.log(b);
    return a * b;
}
function pembagian(a, b){
    console.log(a);
    console.log(b);
    return a / b;
}

let operator = prompt("masukan inputan berupa +,-,*,/")
if(operator == "+"){
    let a = parseInt(prompt("masukan nilai inputan pertama"));
    let b = parseInt(prompt("masukan nilai inputan kedua"));
    let c = penjumlahan(a, b);
    console.log(c); 
}else if(operator == "-"){
    let a = parseInt(prompt("masukan nilai inputan pertama"));
    let b = parseInt(prompt("masukan nilai inputan kedua"));
    let c = pengurangan(a, b);
    console.log(c); 
}else if(operator == "*"){
    let a = parseInt(prompt("masukan nilai inputan pertama"));
    let b = parseInt(prompt("masukan nilai inputan kedua"));
    let c = perkalian(a, b);
    console.log(c); 
}else if(operator == "/"){
    let a = parseInt(prompt("masukan nilai inputan pertama"));
    let b = parseInt(prompt("masukan nilai inputan kedua"));
    let c = pembagian(a, b);
    console.log(c); 
}else(
    console.log("masukin angkanya")
)
