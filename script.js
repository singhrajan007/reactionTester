function rotate() {
    var element = document.getElementById("reactionTime");
    var randomX = Math.floor(Math.random() * 500);
    var randomY = Math.floor(Math.random() * 500);
    var randomwidth = Math.floor(Math.random() *  100 + 50);
    var randomheight = Math.floor(Math.random() * 100 + 50);
    var randomRadius = Math.floor(Math.random() * 50 + 10);
    document.getElementById("reactionTime").style.borderRadius = randomRadius + "px";
    document.getElementById("reactionTime").style.position = "absolute";
    document.getElementById("reactionTime").style.width = randomwidth + "px";
    document.getElementById("reactionTime").style.height = randomheight + "px";
    document.getElementById("reactionTime").style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
    document.getElementById("reactionTime").style.backgroundColor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
    document.getElementById("reactionTime").style.marginLeft=randomX + "px";
    document.getElementById("reactionTime").style.marginTop=randomY + "px";
    document.getElementById("reactionTime").style.display = "block";
    document.getElementById("reactionTime").style.transition = "all 0.5s ease-in-out";
}

var startTime = new Date().getTime();


document.getElementById("reactionTime").onclick = function() {
    document.getElementById("reactionTime").style.display = "none";
    var endTime = new Date().getTime();
    var reactionTime =( endTime - startTime)/1000;
    alert("Your reaction time is: " + reactionTime + " seconds");
    rotate();
}
