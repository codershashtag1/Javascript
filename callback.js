function greet(name) {
    console.log(`Hello, ${name}!`);
}

function greetUser(name, callback) {
    callback(name)
}

greetUser("Darshana", greet);
greetUser("Bhumu", greet);