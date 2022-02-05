var printNum = document.querySelector('#print')

async function GenerateFibonacci(numberF, numberS){
    let numF = await document.querySelector('#numFibonacci').value
    let numS = await document.querySelector('#seqFibonacci').value
    numberF = numF
    numberS = numS

    var fibonacci = [0,1];

    for(let i=fibonacci.length; i< `${numberS}`; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }

    const t = parseInt(`${numberF}`)
    if(fibonacci.includes(t)) {
        let childContentNum = document.createElement('h5')
        childContentNum.innerHTML = `Numero ${numberF} pertence a Fibonacci`
        printNum.appendChild(childContentNum)
    } else {
        let childContentNum = document.createElement('h5')
        childContentNum.innerHTML = `Numero ${numberF}  não pertence a Fibonacci`
        printNum.appendChild(childContentNum)
    }

}


let btnFibonnacci = document.querySelector('#btn__fibonacci')

btnFibonnacci.addEventListener('click', () => {
    GenerateFibonacci()
    if(printNum.childElementCount >= 1) {
        printNum.removeChild(printNum.childNodes[0])
    }
})


