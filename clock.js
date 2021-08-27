const statusClock = document.querySelector(".status-clock");

function setClock() {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");

    statusClock.innerText = `${hour}:${minutes}`;
}

setClock();
setInterval(setClock, 1000);