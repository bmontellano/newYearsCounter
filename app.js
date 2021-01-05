var checkTime = new Date(2021, 0, 1).getTime() - Date.now();
var spanDays = document.getElementById('days');
var spanSeconds = document.getElementById('seconds');
var firstElem = document.getElementById('first');
var daysLeft = Math.floor((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000);
var secondsLeft = (((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000) - daysLeft) * 86400;
var initVar = 0;
var counter = 0;

console.log(.6*60, "minutes");

if(checkTime < 0) {
    firstElem.style.opacity = "1.0";
    firstElem.innerHTML = "<p style='color:red;font-size:50px; opacity:0.01'>HAPPY NEW YEAR!! 2021</p>";
    var firstChild = firstElem.firstChild;
    var initVar = parseFloat(firstElem.firstChild.style.opacity);
    refInterval = setInterval(() => {
        counter += 1;
        if (counter > 10){
            initVar += 0.01;
            firstChild.style.opacity = initVar.toString();
            if(parseFloat(firstChild.style.opacity) > 0.99 ) {
                clearInterval(refInterval);  
            }
        }
      },30); 
} else {
    firstElem.style.opacity = "1.0";
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


