function isFibonacci(num) {
  let a = 0,
    b = 1

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`
  }

  while (b <= num) {
    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`
    }
    ;[a, b] = [b, a + b]
  }

  return `O número ${num} NÃO pertence à sequência de Fibonacci.`
}

const numero = 21
console.log(isFibonacci(numero))
