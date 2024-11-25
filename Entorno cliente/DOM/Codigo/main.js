import { arrArticulos } from "./modulos/articulos.mjs";

//Funcion Main
(function Main() {
  console.log("Mostrando artículos");
  let h = document.createElement("h2");
  h.textContent="Hola";
  document.body.appendChild(h);
  console.log(arrArticulos);
  let br = document.createElement("br");
  let imagen = document.createElement("img");
  let fragmento = document.createDocumentFragment();
  let sextion = document.createElement("section");
  arrArticulos.forEach((articulo) => {
    let h2 = document.createElement("p");
    h2.textContent="id:"+articulo.id;
    fragmento.appendChild(h2);

  });
  sextion.appendChild(fragmento);
})();


