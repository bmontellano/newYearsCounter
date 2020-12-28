var spanDays = document.getElementById('days');
var firstElem = document.getElementById('first');
console.log("This should be Span for days ---> ", spanDays);
console.log("This should be first h1 ---> ", firstElem);
setTimeout(() => {
    spanDays.innerText = "3"
}, 2000);