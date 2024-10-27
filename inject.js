function main() {
    fetch("https://raw.githubusercontent.com/kramsdell123/dinomenu/main/ui.html")
    .then(response=>response.text())
    .then(html=>{
        const container = document.createElement("div");
        container.innerHTML = html;
        document.body.appendChild(container);
    });
    fetch("https://raw.githubusercontent.com/kramsdell123/dinomenu/main/main.js")
    .then(response=>response.text())
    .then(code=>eval(code));
    fetch("https://raw.githubusercontent.com/kramsdell123/dinomenu/main/style.css")
    .then(response=>response.text())
    .then(css=>{
        const container = document.createElement("style");
        container.innerHTML = css;
        document.head.append(container);
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