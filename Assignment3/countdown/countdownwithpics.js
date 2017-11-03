var count = document.getElementById("counter");
var lim = document.getElementById("limiter");
var charCount = 0;
var pic1 = Site/imgs/"00.png";
changer = document.getElementById("firstNum");
changer.src = pic1
count.addEventListener('keyup',function () {
    charCount += 1;
    var remainder = 50 - charCount;
    lim.innerHTML = remainder;
    var strCon = lim.toString();
    if(charCount >= 50) {
        lim.style.backgroundColor = 'red';
    }
});
