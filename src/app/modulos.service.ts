
export class ModulosService{
    modulos = [
        {"modulo":"Modulo 1","imagen":"./assets/htmlCssJavascript.png","descripcion":"En este primer modulo, se estudiara los conceptos primarios dentro de tecnolias web. Estas son HTML, CSS, Javascript. Esto conceptos y herramientas seran uzadas de manera conitnua en los modulos siguientes."},
        {"modulo":"Modulo 2","imagen":"./assets/html.png","descripcion":"En este segundo modulo, se estudiara otros conceptos de tecnolias web. Estas son php. Php nos permitira entender el funcionamiento back-end de actividades en la web."},
        {"modulo":"Modulo 3","imagen":"./assets/javascript.png","descripcion":"Modulo 3 se enfoca en generar un entendimiento mas detallado de la programacion web utilizando Javascript. Dado que, Javascript es el lenguaje que es interpretado por la mayoria de los buscadores."},
        {"modulo":"Modulo 4","imagen":"./assets/nodejs.png","descripcion":"En el modulo 4 nos enfocamos en entender que es nodejs y para que sirve. En esta seccion revisaremos como podemos utilizar nodejs para construir proyectos web."},
        {"modulo":"Modulo 5","imagen":"./assets/angular.png","descripcion":"Modulo 5 explora que es Angular y para que nos sirve. Este modulo utilizara conceptos y herramientas de modulos anteriores. Implementaremos la creacion de paginas web dinamicas como tambien comunicacion del servidor al cliente."}];
    getModulo(index){
        return this.modulos[index];
    }
    getModulos(){
        return this.modulos;
    }
}

