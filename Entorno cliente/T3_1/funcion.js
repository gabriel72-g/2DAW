function de4(a,b,c,d){
    return Math.max(a,b,c,d);
}

function lanzamiento(){
let dado =  Math.random() * (6 - 1) + 1;
return Math.round(dado);
}
function seismil(){
    let num=0;
    let num2=0;
    let num3=0;
    let num4=0;
    let num5=0;
    let num6=0;
        for(let i = 0;i<6000;i++){
            let dado = Math.round(Math.random() * (6 - 1) + 1);
            switch (dado){
                case 1: 
                    num++;
                break;
                case 2: 
                    num2++;
                break;
                case 3: 
                    num3++;
                break;
                case 4: 
                    num4++;
                break;
                case 5: 
                    num5++;
                break;
                case 6: 
                    num6++;
                break;
            }
        }
    return " Numeros de uno: "+num +" numeros de dos: "+num2
    +" numeros de tres: "+num3+" numeros de cuatros: "+num4
    +" numeros de cinco"+num5
    +" numeros de seis"+num6;
}
function esfera(r){
let valor = (4/3)* Math.PI * Math.pow(r,3);
return Math.round(valor);
}
function circulo(r){
let valor = Math.PI*Math.pow(r,2);
return Math.round(valor);
}

function 