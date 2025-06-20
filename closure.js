/**** Data Encryption ****/
function outerfunction() {
    var a = 10;
    return function innerfunction() {
        console.log(a);
    }
}

let closeurefn = outerfunction();
closeurefn();
closeurefn();

/**** State Persistance  *****/
function outerfunction2() {
    var a = 0; // State we want to persist means we are not resetting it again to 0 whenever the function is called
    return function innerfunction2() {
        a++
        console.log(a);
    }
}

let counter = outerfunction2();  // Outer function is called only once but due to closure it remembers the value a 
counter();
counter();

/**** setTimeOut ****/
function x() {
    for(var i = 1; i < 6; i++) {
        function inner(x) {
            setTimeout(() => {
                console.log(x)
            }, x * 1500)
        }
        inner(i)
    }
}

x()

/*** Use cases *****/
// Module Design Pattern
// Currying
// memoize
// Maintaining state in async world
// setTimeout
// Iterators
// Function Like once




