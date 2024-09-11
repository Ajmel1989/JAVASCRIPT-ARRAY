// simple programe===============

function printline(){
console.log("===============================")

}

printline();
console.log("welcome to javascript.")
printline();
console.log("hello world")
printline();


// ==============================================

function total(a,b){
    console.log(a+b);
}
total(10,20);


function sum(c,d){
    return c+d;
}
console.log(sum(10,30));

// ===================================================

var s=function(a,b){
    return a+b;

}
function abc(x){
    console.log(x(30,40))
}
abc(s)


// ========================================================

function xyz(r,s){
    console.log(r(40,50))
    console.log(s(40,50))

}
xyz(function(e,f){
    return e+f;
},function(e,f){
    return e*f;
})



// ====================================


function ar(){
    pr();
    console.log("this is ar function")

}
function pr(){
    console.log("this is pr function")
    
}
ar();