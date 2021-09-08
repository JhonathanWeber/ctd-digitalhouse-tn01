function podeSubir(altura, emDupla) {
    if((altura >= 1.40 && altura <= 2) || (altura <= 1.40 && altura >= 1.20  && emDupla == "s")) {
        return true;
    } else {
        return false;
    }
}

console.log(podeSubir(1.19,"s"));
