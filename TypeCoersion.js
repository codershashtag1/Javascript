// Implicit Coersion
// Explicit Coersion

/**** Behaviour of Coersion ******/
// Loose Equality
// Strict Equality
// Truthy & Falsy values

console.log('5' + 1) // Implicit Coersion
console.log(5 + 1) // Addition Operation without Type Coersion
console.log(Number('5') + 1); // Explicit Coersion


/***** BEHAVIOUR OF COERSION ********/
console.log('5' == 5) // Coersion (Loose Equality)
console.log('5' === 5) // No Coersion (Strict Equality)

/***** TRUTHY AND FALSY VALUE  *******/
// Falsy	0, '', null, undefined, NaN, false
// Truthy	'0', 'false', [], {}, 42, 'hello'

// When converting with boolean js rules is to covert the other side to no using toString or valueOf
console.log([] == false)
console.log({} == false)
// Internally this is happening if one side is boolean
// console.log(Number({}.toString()))
// console.log(Number([].toString()))




// comparing object with primitive basically means it converts the object with primitive means [] => '' and then number
// console.log([] == {})


