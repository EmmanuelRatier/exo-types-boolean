let isRainy = false
let temperature = 25
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 15) {
  clothes += 't-shirt, sweater, coat, peruvian cap, scarf, '
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 't-shirt, sweater, '
} else {
  clothes += 't-shirt, sunglasses, shorts, cap, flip flops,'
}
console.log(`Je vous recommande de porter: ${clothes}`)