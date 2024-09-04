AOS.init();

function contagemRegressiva(){

    let evento = new Date("2024-09-10T07:00:00");
    let hoje = new Date();
    let diferencaTempo = evento - hoje;

    let diasEmMs = 1000 * 60 * 60 * 24;
    let horasEmMs = 1000 * 60 * 60;
    let minutosEmMs = 1000 * 60;
    let segundosEmMs = 1000;

    const dias = Math.floor(diferencaTempo / diasEmMs);
    const horas = Math.floor((diferencaTempo % diasEmMs) / horasEmMs);
    const minutos = Math.floor((diferencaTempo % horasEmMs) / minutosEmMs);
    const segundos = Math.floor((diferencaTempo % minutosEmMs) / segundosEmMs);

    if (diferencaTempo < 0) {
        document.querySelector('#contador').innerHTML = "O evento já começou";
        clearInterval(att);
    } else {
        document.querySelector('#contador').innerHTML = 
            `Faltam: ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
    }

}

//atualiza a contagem regressiva ao entrar ou recarregar a pagina
contagemRegressiva()

//inicia a contagem regressiva
let att = setInterval(contagemRegressiva, 1000)
