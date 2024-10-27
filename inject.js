function main() {
    if(typeof Runner === "undefined") {
        return;
    }
    try {
        if(applied === true) {
            return;
        }
    }catch(error){}
    applied = true;
    alert("test");
}
main()