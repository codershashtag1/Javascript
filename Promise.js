let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello")
    }, 2000)
})

let promise1 = new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve("Promise1")
    }, 1500)
})

let promise2 = new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve("Promise2")
    }, 1800)
})

let promise3 = new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve("Promise3")
    }, 200)
})

let promise4 = new Promise((resolve, reject) => {
     setTimeout(() => {
        reject("Promise4")
    }, 150)
})


Promise.allSettled([promise, promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log("Promise.allSettled")
        console.log(data)
    })
    .catch((err) => console.log(err));


Promise.all([promise, promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log("Promise.all")
        console.log(data)
    })
    .catch((err) => {
        console.log("Promise Rejected")
        console.log(err)
    })

Promise.any([promise, promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log("Promise.any")
        console.log(data)
    })
    .catch((err) => {
        console.log("Promise ANY  Rejected")
        console.log(err)
    })

Promise.race([promise, promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log("Promise.race")
        console.log(data)
    })
    .catch((err) => {
        console.log("Promise Race Rejected")
        console.log(err)
    })
// promise.then((data) => console.log(data)).catch((err) => console.log(err));

// Use Case of Promise
// To handle the asynchronous operation in a more cleaner, more readable and more maintainable way  
// - especially to avoid callbackhell