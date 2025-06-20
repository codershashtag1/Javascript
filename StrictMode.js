'use strict'

/*********** Undeclared variable **************/
    // function test() {
    //     x = 10
    //     console.log(x)
    // }

    // test();
    // console.log(x);

/*********** this in a function **************/
    function show() {
        console.log(this)
    }
    show()

/*********** Duplicate Parameters **************/
    function sum(a, b, a) {
        return a + b
    }

    console.log(sum(1, 3, 2))



// Definition
// opt out into restricted version of javascript.
// helps to catch :
// common bugs, 
// make code secure, 
// prevent the use of problematic features
    // can't use Reserve keywords like 
        // implements, interface, let, package, private, protected, public, static, and yield
    // Deleting Non-Deletable Properties
        // delete Object.prototype; 
    //  Assigning to Read-Only Properties
        // const obj = {};
        // Object.defineProperty(obj, "x", { value: 42, writable: false });
        // obj.x = 9;


