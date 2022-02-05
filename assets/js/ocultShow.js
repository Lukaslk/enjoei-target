var visibilidade = true; 

function ocultShow() { 

    if (visibilidade) {
        document.querySelector("#show").style.display = "block";
        visibilidade = false;
    } else {
        document.querySelector("#show").style.display = "none";
        visibilidade = true;
    }
}

let btnDisplay = document.querySelector('#btn__display')

btnDisplay.addEventListener('click', () => {
    ocultShow()
})

function ocultShow2() { 

    if (visibilidade) {
        document.querySelector("#show2").style.display = "block";
        visibilidade = false;
    } else {
        document.querySelector("#show2").style.display = "none";
        visibilidade = true;
    }
}

let btnDisplay2 = document.querySelector('#btn__display2')

btnDisplay2.addEventListener('click', () => {
    ocultShow2()
})

function ocultShow3() { 

    if (visibilidade) {
        document.querySelector("#show3").style.display = "block";
        visibilidade = false;
    } else {
        document.querySelector("#show3").style.display = "none";
        visibilidade = true;
    }
}

let btnDisplay3 = document.querySelector('#btn__display3')

btnDisplay3.addEventListener('click', () => {
    ocultShow3()
})

function ocultShow4() { 

    if (visibilidade) {
        document.querySelector("#show4").style.display = "block";
        visibilidade = false;
    } else {
        document.querySelector("#show4").style.display = "none";
        visibilidade = true;
    }
}

let btnDisplay4 = document.querySelector('#btn__display4')

btnDisplay4.addEventListener('click', () => {
    ocultShow4()
})

function ocultShow5() { 

    if (visibilidade) {
        document.querySelector("#show5").style.display = "block";
        visibilidade = false;
    } else {
        document.querySelector("#show5").style.display = "none";
        visibilidade = true;
    }
}

let btnDisplay5 = document.querySelector('#btn__display5')

btnDisplay5.addEventListener('click', () => {
    ocultShow5()
})