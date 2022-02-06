var visibilidade = true; 

function ocultShow(value) {
    if (visibilidade) {
        document.querySelector(`.show${value}`).style.display = "block";
        visibilidade = false;
    } else {
        document.querySelector(`.show${value}`).style.display = "none";
        visibilidade = true;
    }

}

let btnDisplay = document.getElementsByClassName('btn__display')

for (let x = 0; x < btnDisplay.length; x++) {
    btnDisplay[x].addEventListener("click", tdButton)
}

function tdButton(e){
    var btValor = e.target.value;

    switch(btValor){
       case '1':
       ocultShow(btValor)
       break;

       case '2':
       ocultShow(btValor)
       break;

       case '3':
       ocultShow(btValor)
       break;

       case '4':
       ocultShow(btValor)
       break;
    }
    
 }
