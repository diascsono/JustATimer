let timer;
let isRunning = false;
let totalSeconds = 0;

function validateTimer(input) { //Função para validar os inputs do timer.
    if (input.value < 0) input.value = 0;
    if (input.value > 60) input.value = 60;

    else if (input.id === "minutes" && input.value.length > 2) {
        input.value = input.value.slice(0, 2);   //Limita o input de minutos a no máximo 2 dígitos no campo de minutos.
    }
    else if (input.id === "seconds" && input.value.length > 2) {
        input.value = input.value.slice(0, 2);  //Limita o input de segundos a no máximo 2 dígitos no campo de segundos.
    }
}

function startTimer() { //Função para iniciar o timer.
    if (isRunning) return;
    isRunning = true;

    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;

    let minutesSt = document.getElementById("minutes");
    let secondsSt = document.getElementById("seconds");
    
    totalSeconds = minutes * 60 + seconds;
    if (totalSeconds <= 0) {
        alert("Defina um tempo válido!");
        isRunning = false;
        return;
    }
    // Desabilita os inputs enquanto o timer está rodando.
    minutesSt.disabled = true;
    secondsSt.disabled = true;

    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            alert("Tempo esgotado!");
            isRunning = false;
            document.getElementById("minutes").disabled = false;
            document.getElementById("seconds").disabled = false;
            return;
        }

        
        
        totalSeconds--;
        let min = Math.floor(totalSeconds / 60);
        let sec = totalSeconds % 60;

        document.getElementById("minutes").value = String(min).padStart(2, '0');
        document.getElementById("seconds").value = String(sec).padStart(2, '0');
    }, 1000);
}

function pauseTimer() { //Função para pausar o timer.
    clearInterval(timer);
    isRunning = false;

    document.getElementById("minutes").disabled = false;
    document.getElementById("seconds").disabled = false;
}

function resetTimer() { //Função para resetar o timer.
    clearInterval(timer);
    isRunning = false;
    document.getElementById("minutes").value = "00";
    document.getElementById("seconds").value = "00";
}
