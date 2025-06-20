function greet(name) {
    console.log(`Hello, ${name}!`);
}

function greetUser(name, callback) {
    callback(name)
}

greetUser("Darshana", greet);
greetUser("Bhumu", greet);

// Use Cases
// Callbacks are a way to run a function after something finishes 
// — like reading a file, 
// waiting for user input,
// or processing arrays. 
// They're the backbone of event-driven and async programming in JavaScript, 
// and they're heavily used in Node.js, DOM events, and custom logic handling.