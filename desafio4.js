const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}
const valorTotal = Object.values(faturamentoEstados).reduce(
  (sum, val) => sum + val,
  0
)
console.log("Percentual de representação por estado:")
Object.entries(faturamentoEstados).forEach(([estado, valor]) => {
  const percentual = ((valor / valorTotal) * 100).toFixed(2)
  console.log(`${estado}: ${percentual}%`)
})
