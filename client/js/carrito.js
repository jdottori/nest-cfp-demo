let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);

let compras = [];

async function load(){
  let r = await fetch("/productos");
  let json = await r.json();
  compras = json;
  mostrarTablaCompras();
}



load();

async function agregar() {
  console.log("Funcion Agregar");
  let producto = document.querySelector('#producto').value;
  let precio = parseInt(document.querySelector('#precio').value);
  let renglon = {
    "nombreProducto": producto,
    "precio": precio
  }
  
  compras.push(renglon);
  mostrarTablaCompras();
  let response = await fetch("/productos", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(renglon)
  })
  if(response.ok) {
    let json = await response.text();
    if(json != "ok")
    {
      // alert("error en datos");
      compras.pop();
      mostrarTablaCompras();
    }
  }
}

//setInterval(load, 250);

function sumar() {
  console.log("Funcion Sumar");
  let total = 0;
  for (let i = 0; i <  compras.length; i++) {
    total += compras[i].precio;
  }
  let max = compras[0].precio;
  for (let r of compras) {
    if(max <  r.precio)
      max = r.precio;
  }
  document.querySelector("#total").innerHTML =
    "<p>Total: $" + total + "</p>"+
    "<p>Maximo: $" + max + "</p>"
}

function mostrarTablaCompras() {
    html = "";
    for (let i = 0; i < compras.length; i++) {
        let r = compras[i];
        html += `
            <tr>
                <td>${r.nombreProducto}</td>
                <td>${r.precio}</td>
                <td><button class="btn-delete-producto" pos="${i}">Borrar</button></td>
            </tr>
        `; //la comilla es el acento inverso
    }
    document.querySelector("#tblCompras").innerHTML = html;
    let botonesBorrar = document.querySelectorAll(".btn-delete-producto");
    botonesBorrar.forEach(e => {
      e.addEventListener("click", btnBorrarClick);
    }); 
}

async function btnBorrarClick(){
  let pos = this.getAttribute("pos");
  console.log(this)
  console.log(pos);
  let response = await fetch(`/productos/${pos}`, {
    "method": "DELETE",
    "headers": {
      "Content-Type": "application/json"
    }
  })
  load();
}
