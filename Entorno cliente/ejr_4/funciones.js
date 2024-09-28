function sum(){
    let suma=0;
    for(let i = 0; i<arguments.length;i++){
        suma+=arguments[i];
    }
    return suma;
}
function addOnlyNums(){
    let num=0;
    for(let i=0; i<arguments.length;i++){
        if(typeof arguments[i]== "string"){
            continue
        }else{
            num+=arguments[i];
        }
    }
    return num;
}

function countTheArgs(){
    let cont=0;
    for(let i = 0; i<arguments.length;i++){
        cont+=i;
    }
    return cont;
}
/**
 * 
 * @returns 
 */
function sumEveryOther(){
    let suma=0;
    for(let i = 0; i<arguments.length;i++){
        if(i% 2 !== 0){
            continue
        }else{

        suma+=arguments[i];
        }
    }
    return suma;
}
/**
 * comprobamos si el numero es divisible entre tres
 * @param {*} num guardamos el numero que queremos saber
 * @returns 
 */
function divisible(num){
    if(num % 3 == 0){
        return true;
    }else{
        return false;
    }
}
/**
 * hacemos un if para saber si es divisible entre el numero
 * @param {*} num guardamos el numero que queremos saber si es divisible 
 * @param {*} num2 guardamos el numero por el que vamos a dividir
 * @returns 
 */
function divisibleEntre(num, num2){
    if(num % num2 == 0){
        return true;
    }else{
        return false;
    }
}
/**
 * hacemos un if para saber si está entres esos numeros
 * @param {*} valor guardamos el valor que queremos saber
 * @param {*} rangoInf guardamos el valor más vajo
 * @param {*} rangoSup guardamos el valor más alto
 * @returns 
 */
function rango(valor, rangoInf, rangoSup){

    if(valor>=rangoInf && valor<=rangoSup){
        return"Está en el rango";
    }else{
        return"no está en el rango";
    }

}
/**
 * compruba mediante un if si es tiene tres digitos
 * @param {*} num guardamos el numero que queremos comprobar
 * @returns 
 */
function tieneTresDigitos(num){
    if(num>=100 && num<=999){
        return "Es igual que 3";
    }else{
        return "no tiene 3 digitos";
    }

}
/**
 * función para multiplicar el alto por el largo delrectangulo 
 * @param {*} alto guardamos la altura del rectangulo
 * @param {*} ancho guardamos el ancho del rectangulo
 * @returns 
 */
function areaRectangulo(alto, ancho){
 area = alto * ancho;
 return area;
}
/**
 * 
 * @param {*} k se guardan los kilos de la persona 
 * @param {*} a se guarda la altura
 * @returns 
 */
function imc(k,a){
    im = k/(a*a);
    return im;
}

/**
 * 
 * @param {*} precio se guarda el percio para luego calcularlo con el descuento 
 * @param {*} desc se guarda el descuento para calcularlo
 * @returns 
 */
function precioFinal(precio, desc){
   let de = (precio*desc) / 100;
    let descuneto = precio-de;
    return descuneto;
}


/**
 * 
 * @param {*} num Se guarda el numero en num para luego utilizarlo en el vucle for 
 * @calculo la iniciamos en uno   
 * @returns 
 */

function factorial(num){
    let calculo=1;
    for(let i=1;i<=num;i++){    
        calculo *= i;
       
    }
    return calculo;
}

