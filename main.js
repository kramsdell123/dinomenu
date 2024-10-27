const gameoverfunction = Runner.instance_.gameOver;
document.getElementById("noclip").addEventListener("change", function() {
    if(this.checked) {
        Runner.instance_.gameOver = function(){};
    } else {
        Runner.instance_.gameOver = gameoverfunction;
    }
});