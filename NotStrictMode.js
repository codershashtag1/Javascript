

/*********** Undeclared variable **************/
    function test() {
        x = 10
        console.log(x);
    }

    test();
    // console.log(x);

/*********** this in a function **************/
    function show() {
        // console.log(this)
    }
    show()

/*********** Duplicate Parameters **************/
    function sum(a, b, a) {
        return a + b // Overrides the pervious one
    }

    console.log(sum(1, 3, 2))