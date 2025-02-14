// let -> Block Scope, can be reassigned, cannot be redeclared
// const -> Block Scope, cannot be reassigned, cannot be redeclared
// var -> Function Scope, can be reassigned, can be redeclared

var a = "hello";
var b = "hello";
var c = 10;
var d = "10";
var e = true;

if (c == d){
    console.log("Yes");
}
else{
    console.log("No");
}
if (c === d){
    console.log("Yes");
}
else{
    console.log("No");
}