import Usuario from "./usuario.mjs";
import Empleado from "./empleado.mjs";

function CrearUus(dni,nombre,edad){
  let usuario = new Usuario(dni,nombre,edad);
  return usuario;
}
function CrearEm(codigo,nombre,telefono){
let empleado = new Empleado(codigo,nombre,telefono);
return empleado;
}
console.log(CrearUus);    
(function(){
  const arrUsuario = [];
  
})