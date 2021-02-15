let a = 1
let b = 0

a ^ b === (a && !b) || (!a && b)

console.log((a && !b) || (!a && b))