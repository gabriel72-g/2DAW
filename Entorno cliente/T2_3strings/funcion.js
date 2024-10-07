//Ejercicio 1
function invierteCadena(cad_arg) {
    let cadena = "";  
    for (var i = cad_arg.length - 1; i >= 0; i--) { 
        cadena += cad_arg[i]; 
    }
    return cadena;
}

function inviertePalabras(cad_arg){
    let cadena = "";  
    for (var i = cad_arg.length - 1; i >= 0; i--) { 
        cadena += cad_arg[i]; 
    }
    return cadena;
}

function encuentraPalabraMasLarga(cad_arg) {
    var palabras = cad_arg.split(" ");
    var maxLength = 0;
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > maxLength) {
            maxLength = palabras[i].length;
        }
    }
    return maxLength;
}


function  fltraPalabrasMasLargas(cad_arg, i){
    var palabras = cad_arg.split(" ");
    var contador = 0;
    for (var j = 0; j < palabras.length; j++) {
        if (palabras[j].length > i) {
            contador++;
        }
    }
    return contador;
}
function cadenaBienFormada(cad_arg) {
    if (cad_arg.length === 0) return "";
    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
}
//Ejercicio 2
function solo_min_ma(cadena){
if(cadena == cadena.toUpperCase()){
    return"Está formada por solo mayusculas";
}else if (cadena ==cadena.toLowerCase()){
    return "Solo está formada pro minusculas";
}else{
   return "Contiene tanto mayusculas como minusculas";
}
}
//Ejercicio 3
function cadena_subcadena(cadenaPrincipal, subcadena) {
    const posiciones = []; 
    let indice = cadenaPrincipal.indexOf(subcadena);

    while (indice !== -1) {
        posiciones.push(indice); 
        indice = cadenaPrincipal.indexOf(subcadena, indice + 1);
    }
    return posiciones; 
}
//ejercicio 4
function separar(cadena) {
    var consonantes = "";
    var vocales = "";

    cadena = cadena.replace(/\s+/g, '').toLowerCase(); 

    for (var i = 0; i < cadena.length; i++) {
        var char = cadena.charAt(i); 

        if ('aeiou'.includes(char)) {
            vocales += char; 
        } else {
            consonantes += char; 
        }
    }
    return consonantes + vocales; 
}

//Ejercicio 5
function del_rep(cadena) {
    var caracteresUnicos = "";
    for (var i = 0; i < cadena.length; i++) {
        var char = cadena.charAt(i);
       
        if (caracteresUnicos.indexOf(char) === -1) {
            caracteresUnicos += char; 
        }
    }

    return caracteresUnicos;
}
//Ejercicio 6
function subcadenaDeCadena(cadena,subcadena){
    let lugar = cadena.indexOf(subcadena);

    if(lugar==-1){
        return "No es una subcadena de la cadena";
    }else{
        return "Es una subcadena de la candena y está en la posición s"+lugar;
    }
}
//Ejercicio 7
function palindromos(cadena){
    let cadendaVuelta = cadena.split('').reverse().join(''); 
    return cadena === cadendaVuelta;
}
//Ejercicio 8
function contarPalabras(cadena) {
    cadena = cadena.trim();
    
    if (cadena === "") {
        return 0;
    }

    var palabras = cadena.split(" ");
    var contador = 0;

    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i] !== "") {
            contador++;
        }
    }
    return contador;
}

//Ejercicio 9
function validateCreditCard(tarjeta) {

    if (tarjeta.length !== 16 || !/^\d{16}$/.test(tarjeta)) {
        return false;
    }

    let digitosUnicos = new Set(tarjeta);
    if (digitosUnicos.size < 2) {
        return false;
    }

    let ultimo = parseInt(tarjeta[tarjeta.length - 1]);
    if (ultimo % 2 !== 0) {
        return false; 
    }

    let suma = 0;
    for (let i = 0; i < tarjeta.length; i++) {
        suma += parseInt(tarjeta[i]);
    }

    if (suma <= 16) {
        return false;
    }

    return true;
}
//Ejercicio 10
function validateCreditCard2(tarjeta){

    let tarjetaSinGuiones = tarjeta.split('-').join('');
    if (tarjeta.length !== 16 || !/^\d{16}$/.test(tarjeta)) {
        return false;
    }

    let digitosUnicos = new Set(tarjeta);
    if (digitosUnicos.size < 2) {
        return false;
    }

    let ultimo = parseInt(tarjeta[tarjeta.length - 1]);
    if (ultimo % 2 !== 0) {
        return false; 
    }

    let suma = 0;
    for (let i = 0; i < tarjeta.length; i++) {
        suma += parseInt(tarjeta[i]);
    }

    if (suma <= 16) {
        return false;
    }

    return true;
}
