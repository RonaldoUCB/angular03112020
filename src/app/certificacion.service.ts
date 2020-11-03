
export class CertificacionService{
    certificaciones = [
        {"certificado":"Certificado Facebook","imagen":"./assets/certificado1.png","descripcion":"Este curso esta certifiado por Facebook. El temario y requeriminetos estan a la par de los requeriminetos de desarroladores requeridos por la empresa Facebook"},
        {"certificado":"Certificado Google","imagen":"./assets/certificado2.png","descripcion":"Este curso esta certifiado por Google. El temario y requeriminetos estan a la par de los requeriminetos de desarroladores requeridos por la empresa Google"},
        {"certificado":"Certificado Microsoft","imagen":"./assets/certificado3.png","descripcion":"Este curso esta certifiado por Microsoft. El temario y requeriminetos estan a la par de los requeriminetos de desarroladores requeridos por la empresa Microsoft"}];
    getCertificion(index){
        return this.certificaciones[index];
    }
}

