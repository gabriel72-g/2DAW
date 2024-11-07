function filterNumbersGreaterThan(numbers,filter){
const numero = [];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]<filter){
        numero.push(numbers[i]);
    }
}
return numero;
}
function toHackerSpeak(text){
    let texto="";
    for(let i=0;i<text.length;i++){
        let letra =text[i].toLowerCase();
        switch(letra){
            case "a":texto +="4"; break;
            case "e":texto +="3"; break;
            case "i":texto +="1"; break;
            case "o":texto +="0"; break;
            case "s":texto +="5"; break;
            default:texto+=text[i]; break;
        }
    }
    return texto;
}
function getFileExtension(file){
const extension = file.split(".");
if(extension.length>1){
    return extension[extension.length-1];
}
return "";
}
function flatArray(arr){
const aplanado = [];
for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr[i].length; j++) {
        aplanado.push(arr[i][j]);
    }
}
return aplanado;
}
function removeDuplicates(arr){
    const sin = []; 

    for (let i = 0; i < arr.length; i++) {
    let duplicado = false; 

    for (let j = 0; j < sin.length; j++) {
        if (arr[i] === sin[j]) {
            duplicado = true; 
            break; 
        }
    }

    if (!duplicado) {
        sin.push(arr[i]);
    }
    
}
return sin;
}
