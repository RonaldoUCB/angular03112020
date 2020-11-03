
export class CreditosService{
    creditos = [
        {"modulo":"Modulo 1","creditos":"2","teoria":"Si","laboratorio":"Si"},
        {"modulo":"Modulo 2","creditos":"1","teoria":"Si","laboratorio":"No"},
        {"modulo":"Modulo 3","creditos":"2","teoria":"Si","laboratorio":"Si"},
        {"modulo":"Modulo 4","creditos":"1","teoria":"Si","laboratorio":"No"},
        {"modulo":"Modulo 5","creditos":"2","teoria":"Si","laboratorio":"Si"}];
    getCreditos(){
        return this.creditos;
    }
}

