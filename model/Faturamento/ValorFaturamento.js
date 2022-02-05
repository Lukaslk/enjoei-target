module.exports = {
    read(file){
        return file
    },
    readLowerValue(file) {
        let minPrice = file[0]
        
        for (let i = 1; i < file.length; i++) {
            const current = file[i];    

            if(current.valor < minPrice.valor && current.valor != 0) {
                minPrice = current
            }
        }
        return [minPrice]
    },
    readHighestValue(file){
        let maxPrice = file[0]
        
        for (let i = 1; i < file.length; i++) {
            const current = file[i];    

            if(current.valor > maxPrice.valor && current.valor != 0) {
                maxPrice = current
            }
        }
        return [maxPrice]
    },
    averageValue(file){
        const removeZero = file.filter((v) => {
            let noZero = v.valor !== 0
            return noZero
        })
        const values = removeZero.map((v) => {
            let toFloat = parseFloat(v.valor)
            return toFloat
        })
        for (var i = 0, total = 0; i < values.length && values.valor != 0; total += values[i++]);

        const countValues = removeZero.length
        const division = total / countValues
        d = {division: division}
        return d
    },
    aboveAverageValue(file){
        const removeZero = file.filter((v) => {
            let noZero = v.valor !== 0
            return noZero
        })
        const values = removeZero.map((v) => {
            let toFloat = parseFloat(v.valor)
            return toFloat
        })
        for (var i = 0, total = 0; i < values.length && values.valor != 0; total += values[i++]);

        const countValues = removeZero.length
        const division = total / countValues

        const BigValue = file.filter((v) => {
            let result = v.valor >= division
            return result
        })

        return BigValue
    },
    totalValue(file) {
        const add = file.map((v) => {
            let toFloat = parseFloat(v.valor)
            return toFloat
        })
        
        for (var i = 0, total = 0; i < add.length; total += add[i++]);
        t = {total: total}
        return t
    },
    percentageState(file) {
        const add = file.map((v) => {
            let toFloat = parseFloat(v.valor)
            return toFloat
        })
        
        for (var i = 0, total = 0; i < add.length; total += add[i++]);

        let d;
        let values = file.map(e => {
            let porcentage = {estado: e.estado, valor: (e.valor / total) * 100}
            d = {porcentage: porcentage}
            return d
        });
        return values
    }
}
