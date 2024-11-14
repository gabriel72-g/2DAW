import { arrArticulos } from "./modulos/articulos.mjs";

//Funcion Main
(function Main() {
  console.log("Mostrando artículos");
  let h = document.createElement("h2");
  h.textContent="Hola";
  document.body.appendChild(h);
  console.log(arrArticulos);

  arrArticulos.forEach((articulo) => {
    let h = document.createElement("p");
    let br = document.createElement("br");
    let imagen = document.createElement("img");
    
    h.textContent="id:"+articulo.id+" titulo "+articulo.title+
    " precio "+articulo.price+" descripcion "+articulo.description+
    " categoria "+articulo.category+" rating: rate"+articulo.rating.rate+" count "+articulo.rating.count;
    h.appendChild(br);
    imagen.src=articulo.image;
    h.appendChild(imagen);
    document.body.appendChild(h);
    console.log(articulo);
  });
})();


