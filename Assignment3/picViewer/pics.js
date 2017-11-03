function dowork(theimage) {
    var imageDiv = document.getElementById('imageDiv');
    imageDiv.innerHTML = "";
    imageDiv.innerHTML += "<img src=" + theimage + " height=400 width=600><br>";
    imageDiv.innerHTML += "<span style:'position: relative; left: 260px; top: " + "-390px;'> <a href='javascript:dowork2()'>Close</a></span> ";
    imageDiv.style.visibility = "visible";
}

function dowork2(theImage) {
    var imageDiv =document.getElementById('imageDiv');
    imageDiv.innerHTML = "";
    imageDiv.style.visibility = "hidden";
}

var tags = document.getElementsByTagName("img"); 
//do a for loop
for (var i=0; i<tags.length; i++){
    tags[i].addEventListener("mouseover", function(){
        this.height = "300";
        this.width = "200";
    });
    tags[i].addEventListener("mouseout", function(){
        this.height = "70";
        this.width = "100";
    });
}
console.log("end");
//How to get a handle on the object itself.
//You can just use the same inner html with theimage and just change the height and width
