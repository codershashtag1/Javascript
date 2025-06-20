/*** Immediate Invoked Function Expression ****/

(function () { // No function name required
    var a = 10; // Avoiding polluting the global namespace by creating a new scope
    console.log(a)
})() // Common in self-executing logic or scripts

console.log(a); 


// IIFE
// Immediately Invoked Function Expression
// It’s a function that runs immediately after it’s defined.

// Use Cases
// To create a private scope or run setup logic without polluting the global scope.