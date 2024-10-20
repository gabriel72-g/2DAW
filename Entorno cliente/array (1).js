function EjemploArray(){

datos = new Array(8);
//En cada posición de nuevoArray guardamos un nuevo array
//datos[0] = new Array(2);
//datos[1] = new Array(5);

for(var i=0; i<datos.length; i++) {
    datos[i]=new Array(5)
}

for(var i=0; i<datos.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(var j=0; j<datos[i].length; j++) {
        datos[j][i]="" + i + "-" + j ;
    }
}


for(var i=0; i<datos.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(var j=0; j<datos[i].length; j++) {
        document.write(datos[i][j]);
        document.write("     ")
    }
    document.write("<br/>")
}


}