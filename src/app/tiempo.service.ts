

export class TiemposService{
    tiempos = [
        {"actividad":"Modulo 1","inicio":"2020-01-01","final":"2020-01-01"},
        {"actividad":"Modulo 2","inicio":"2020-01-01","final":"2020-01-01"},
        {"actividad":"Modulo 3","inicio":"2020-01-01","final":"2020-01-01"},
        {"actividad":"Examen Parcial 1","inicio":"2020-01-01","final":"2020-01-01"},
        {"actividad":"Modulo 4","inicio":"2020-01-01","final":"2020-01-01"},
        {"actividad":"Modulo 5","inicio":"2020-01-01","final":"2020-01-01"},
        {"actividad":"Examen Parcial 2","inicio":"2020-01-01","final":"2020-01-01"},
        {"actividad":"Examen Final","inicio":"2020-01-01","final":"2020-01-01"}];
    getTiempos(){
        return this.tiempos;
    }
}
