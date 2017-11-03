var count = document.getElementById("counter");
var lim = document.getElementById("limiter");
var charCount = 0;

count.addEventListener('keyup',function () {
    charCount += 1;
    lim.innerHTML = 50 - charCount;
    if(charCount >= 50) {
        lim.style.backgroundColor = 'red';
    }
});


/*var charCount = 0;
console.log(charCount);
function step() {
    charCount += 1;
    console.log(charCount);
} */