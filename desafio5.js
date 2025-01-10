function inverterString(str) {
  let invertida = ""
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i]
  }
  return invertida
}

const texto = "Testando"
console.log(`Texto original: ${texto}`)
console.log(`Texto invertido: ${inverterString(texto)}`)
