const router = require('express').Router()
const ValorFaturamento = require('../model/Faturamento/ValorFaturamento')
const dados = require('../model/Faturamento/dados.json')
const valorEstados = require('../model/Faturamento/valorEstados.json')

router.get('/', async (req, res) => {
    res.render('index.html')
})

router.get('/faturamento', async (req, res) => {
    const result = await ValorFaturamento.read(dados)
    const lowerValue = await ValorFaturamento.readLowerValue(dados)
    const HighestValue = await ValorFaturamento.readHighestValue(dados)
    const average = await ValorFaturamento.averageValue(dados)
    const aboveAverage = await ValorFaturamento.aboveAverageValue(dados)

    res.render('faturamento.html', {
        result: result, 
        lowerValue: lowerValue, 
        HighestValue: HighestValue,
        average: average,
        aboveAverage: aboveAverage
    })
})

router.get('/percentual-estado', async (req, res) => {
    const totalValue = await ValorFaturamento.totalValue(valorEstados)
    const percent = await ValorFaturamento.percentageState(valorEstados)

    res.render('percentual_estado.html', {
        total: totalValue,
        percent: percent
    })
})


module.exports = router