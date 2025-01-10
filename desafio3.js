const faturamento = [
  { dia: 1, valor: 0 },
  { dia: 2, valor: 150 },
  { dia: 3, valor: 200 },
  { dia: 4, valor: 0 },
  { dia: 5, valor: 300 },
  { dia: 6, valor: 100 },
  { dia: 7, valor: 0 },
]

const valoresValidos = faturamento
  .filter((d) => d.valor > 0)
  .map((d) => d.valor)

const menorValor = Math.min(...valoresValidos)
const maiorValor = Math.max(...valoresValidos)
const mediaMensal =
  valoresValidos.reduce((sum, val) => sum + val, 0) / valoresValidos.length
const diasAcimaDaMedia = faturamento.filter((d) => d.valor > mediaMensal).length
console.log(`Menor valor de faturamento: R$${menorValor}`)
console.log(`Maior valor de faturamento: R$${maiorValor}`)
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`)
