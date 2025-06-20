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

/****  Maintaining State in Async Code - setTimeOut ****/
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
// 1. Data Encapsulation - Use Closure to create private variables that can't be accessed diretly from outside
// 2. State Persistance - Use closure to remember and update values across function calls (like counter)
// 3. Maintaining State in Async Code - Use closures to keep track of variables inside asynchronous logic like setTimeout.
// 4. Memoization (Performance Optimization) - Use closures to store cached results and avoid re-computation.
// 5. once() Utility Function - Use closures to run a function only once, even if it’s called multiple times.

// Module Design Pattern
// Currying
// memoize
// Maintaining state in async world
// setTimeout
// Iterators
// Function Like once




