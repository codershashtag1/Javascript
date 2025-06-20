function debounce(fn, delayTime) {
    var timeOut;
    return function() {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn()
        }, delayTime)
    }
}


function greet() {
    console.log("Hello My People")
}

let debouncefn = debounce(greet, 20000)
debouncefn()
debouncefn()
debouncefn()
debouncefn()

setTimeout(() => {
    debouncefn()
    debouncefn()
    debouncefn()
    debouncefn()
}, 20000)


// Definition
// Debouncing is a technique used to limit the rate at which a function is executed.
//  It ensures that a function is only called after a certain delay
//  — and only if it hasn't been called again during that delay.

// Use Case
// Used to improve performance
// Window resize
// Search Input Suggestion
// Form field Validation
// Scroll events