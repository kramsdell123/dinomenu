const gameoverfunction = Runner.instance_.gameOver;
document.getElementById("noclip").addEventListener("change", function() {
    if(this.checked) {
        Runner.instance_.gameOver = function(){};
    } else {
        Runner.instance_.gameOver = gameoverfunction;
    }
});
document.getElementById("speedinput").addEventListener("input", function() {
    if(this.value < 2) {
        this.value = 2;
    }
    if(this.value > 1000) {
        this.value = 1000;
    }
    document.getElementById("speedslider").value = this.value;
    Runner.instance_.currentSpeed = this.value;
});
document.getElementById("speedslider").addEventListener("input", function() {
    document.getElementById("speedinput").value = this.value;
    Runner.instance_.currentSpeed = this.value;
});