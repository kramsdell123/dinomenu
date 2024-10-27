function main() {
    fetch("https://raw.githubusercontent.com/kramsdell123/dinomenu/main/ui.html")
    .then(response=>response.text())
    .then(html=>{
        container = document.createElement("div");
        container.innerHTML = html;
        document.body.appendChild(container);
    });
}
function checks() {
    if(typeof Runner === "undefined") {
        console.error("Not on dino game");
        return;
    }
    try {
        if(applied === true) {
            console.error("Mod is already applied");
            return;
        }
    }catch(error){}
    applied = true;
    main();
}
checks()