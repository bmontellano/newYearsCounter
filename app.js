var checkTime = new Date(2021, 0, 1).getTime() - Date.now();
var spanDays = document.getElementById('days');
var spanSeconds = document.getElementById('seconds');
var firstElem = document.getElementById('first');
var daysLeft = Math.floor((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000);
var secondsLeft = (((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000) - daysLeft) * 86400;

console.log(.6*60, "minutes");

if(checkTime < 0) {
    firstElem.innerHTML = "<p style='color:red;font-size:50px'>HAPPY NEW YEAR!! 2021</p>";
} else {
    spanDays.innerText = daysLeft.toString();
    spanSeconds.innerText = secondsLeft.toFixed(0);

    console.log("This should be Span for days ---> ", spanDays);
    console.log("This should be first h1 ---> ", firstElem);

    var timeInterval = setInterval(() => {
        checkTime = new Date(2021, 0, 1).getTime() - Date.now();
        daysLeft = Math.floor((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000);
        secondsLeft = (((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000) - daysLeft) * 86400;
        if (checkTime < 0) {
            firstElem.innerHTML = "<p style='color:red;font-size:50px'>HAPPY NEW YEAR!! 2021</p>";
            clearInterval(timeInterval);
        }
        spanDays.innerText = daysLeft.toString();
        spanSeconds.innerText = secondsLeft.toFixed(0);
        console.log("interval running")
    }, 1000);
    console.log(daysLeft);
}


