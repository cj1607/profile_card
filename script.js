function showMessage() {
    alert(" Thank you for Reaching Out Let's Make Magic.");
}
function updateUTCTime(){
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date ()
    utcTimeElement.textContent = now.toUTCString();
}
setInterval(updateUTCTime,1000);
updateUTCTime();