/*** Immediate Invoked Function Expression ****/

(function () { // No function name required
    var a = 10; // Avoiding polluting the global namespace by creating a new scope
    console.log(a)
})() // Common in self-executing logic or scripts

console.log(a);  