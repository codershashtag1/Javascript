a = 10;
var a;
console.log(a);

let b;
b = 10;
console.log(b);

// let b = 10

c();
function c() {
    console.log("Hello World")
}

console.log(d);
var d = function () {
    console.log("Hello Function Expression with var variable");
}
d()

console.log(e); // Reference Error: cannot access before initialization
let e = function() {
    console.log("Hello Function Expression with let variable");
}
e()

// var, let and const are hoisted but 
// var is stored in the global
// let and const are stored in a different memory space where it can only be accessed when the value is 
// assigned to it.

/****** TEMPORAL DEAD ZONE *******/
// Temporal Dead zone is the time between the let and const value are hoisted with undefined and
// the value is assigned to it.


/****** TYPES OF ERROR *********/

// when the variables are in temporal dead zone and we try to access that then it will give the
// ReferenceError: cannot access before initialization (Memory is allocated but value is not assigned)

// suppose if we haven't initialize the variable with var and try to access that variable variable then we get errro
// ReferenceError: Cannot x is not defined (Memory is not allocated to that particular variable)

// If we try to initialize let b again then it will give error (No duplicate declaration)
// SyntaxError: Identifier b has already been declared (Code doen't run it gives error in compilation phase)

// Suppose i have declared the const variable without initialization const b then the error will come
// SyntaxError: Missing initializer in const decalration

// So for const variable we need to declare and initialize together we cant assign the value later
// TypeError: Assignment to constant variable



