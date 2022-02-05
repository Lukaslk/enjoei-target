const router = require('express').Router()
const ValorFaturamento = require('../model/Faturamento/ValorFaturamento')
const dados = require('../model/Faturamento/dados.json')
const valorEstados = require('../model/Faturamento/valorEstados.json')

router.get('/', async (req, res) => {
    const result = await ValorFaturamento.read(dados)
    const lowerValue = await ValorFaturamento.readLowerValue(dados)
    const HighestValue = await ValorFaturamento.readHighestValue(dados)
    const average = await ValorFaturamento.averageValue(dados)
    const aboveAverage = await ValorFaturamento.aboveAverageValue(dados)
    const totalValue = await ValorFaturamento.totalValue(valorEstados)
    const percent = await ValorFaturamento.percentageState(valorEstados)

    res.render('index.html', {
        result: result, 
        lowerValue: lowerValue, 
        HighestValue: HighestValue,
        average: average,
        aboveAverage: aboveAverage,
        total: totalValue,
        percent: percent
    })
})

module.exports = router