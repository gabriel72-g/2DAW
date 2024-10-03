function dias(){
    const hoy = Date.now();
     const minutos = 1000*60;
     const hora = minutos *60;
     const dia = hora * 24;
    calculo = hoy/24
    return calculo
}