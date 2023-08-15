function soma() {

    btnSoma.style.background = 'green';

    const txtN1Soma = document.getElementById('n1soma');
    const n1Soma = Number(txtN1Soma.value);
    if(n1Soma > 10) {
        window.alert('valor 1 é maior que 10');
    }

    const txtN2Soma = document.getElementById('n2soma');
    const n2Soma = Number(txtN2Soma.value);

    const resultado = document.getElementById('ressoma');
    resultado.innerHTML = `O resultado da soma entre ${n1Soma} e ${n2Soma} é igual a <strong> ${n1Soma + n2Soma} </strong> !`;

}

const btnSoma = document.getElementById('botaosoma');
btnSoma.addEventListener('click', soma);


function multiplicar() {

    btnMulti.style.background = 'green';

    const txtN1multi = document.getElementById('n1multi');
    const n1Multi = Number(txtN1multi.value);

    const txtN2Multi = document.getElementById('n2multi');
    const n2Multi = Number(txtN2Multi.value);

    const resultado = document.getElementById('resmulti');
    resultado.innerHTML = `O resultado da multiplicação entre ${n1Multi} e ${n2Multi} é igual a ${n1Multi * n2Multi} !`;

    }

    const btnMulti = document.getElementById('botaomulti');
    btnMulti.addEventListener('click', multiplicar);