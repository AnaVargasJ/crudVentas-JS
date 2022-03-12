let subTotal = 0;
// var selectedRow = null
// let total =  0;
// let contador = 0;




const FORM = document.getElementById("formulario");
// const INFORMACION = document.getElementById("opciones");
const LISTADO = document.getElementById("listado");



// INFORMACION.addEventListener("click", getInformacion);
FORM.addEventListener("submit", guardarProducto);
LISTADO.addEventListener("click", getProducto);


function guardarProducto(e){
    e.preventDefault();

    const NOMBRE = document.getElementById("nombre");
    let nombre = NOMBRE.value;
    let marca = document.getElementById("marca").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    if(cantidad >=1)
    {
        subTotal = parseInt(cantidad) * parseInt(precio);
    }
    
    


    let producto = {
        nombre,
        marca,
        precio,
        cantidad,
        subTotal,
    };

    if(producto.nombre != ""){
        if(localStorage.getItem("productos") === null){

            let productos = [];
            productos.push(producto);
            localStorage.setItem("productos", JSON.stringify(productos));
        } else{
            let productos = JSON.parse(localStorage.getItem("productos"));
            productos.push(producto);
            localStorage.setItem("productos",JSON.stringify(productos));
        }

    }
    else{
        alert("#####");
    }
    FORM.reset();
    getProducto();

}
function getProducto(){
    let productos = JSON.parse(localStorage.getItem("productos"));

    const productosView = document.getElementById("productos");
    productosView.innerHTML = "";

    if(productos != null){
        for (let i = 0; i < productos.length; i++){
            let nombre = productos[i].nombre;
            let marca = productos[i].marca;
            let precio = productos[i].precio;
            let cantidad = productos[i].cantidad;
            let subTotal = productos[i].subTotal;

            productosView.innerHTML += `
            <table class="table table-dark table-hover">
                <thead id="text-center">
                    <tr id="text-center">
                        <th  "scope="col">N. </th>
                        <th scope="col">Nombre </th>
                        <th scope="col">Marca </th>
                        <th scope="col">precio</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">Total</th>
                   
                        <th id="text-center" scope="col">Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr id="text-center">
                        <th scope="row">${i + 1}</th>
                        <td >${nombre}</td>
                        <td >${marca}</td>
                        <td >${precio}</td>
                        <td >${cantidad}</td>
                        <td> ${subTotal}</td>
                        
                        <td> <a class="btn btn-danger float-center" onclick="deleteProducto('${nombre}')">Eliminar</a></td>
                     
                        
                    </tr>
                </tbody>`;
                
            
           
            
            
        }
    }
}

function  deleteProducto(nombre){
    let productos = JSON.parse(localStorage.getItem("productos"));

    for(let i = 0; i <productos.length; i++){
        let nombreProducto = productos[i].nombre;
        if(nombre == nombreProducto){
        productos.splice(i, 1);
    }
    }
    localStorage.setItem("productos", JSON.stringify(productos));
    getProducto();

}


// function onEdit(id) {
//     selectedRow = id.parentElement.parentElement;
//     document.getElementById("nombre").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("marca").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("precio").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("cantidad").value = selectedRow.cells[4].innerHTML;
// }
// function updateRecord(id) {
//     selectedRow.cells[1].innerHTML = id.nombre;
//     selectedRow.cells[2].innerHTML = id.marca;
//     selectedRow.cells[3].innerHTML = id.precio;
//     selectedRow.cells[4].innerHTML = id.cantidad;
// }


//   function getInformacion(e)
//   {
//      let productos = JSON.parse(localStorage.getItem("productos"));

//     const productosView = document.getElementById("productos");
//     productosView.innerHTML = "";

//      if(productos != null)
//  {
//          for(let i=0; i<productos.length; i++){
            
//             // total++;
//             // if (productos >1){
//             //     total++;
//             // }
//             // else if (productos <1){
//             //     total--;
//             // }
//          }
//      }
//     total = parseInt(total) + parseInt(subTotal);
    
//  }

//   productos.innerHTML += `

//   <table id="text" style="color:white"class="table">
//       <thead>
//          <tr>
//               <th scope="col">Total</th>
             
//           </tr>
//       </thead>
//       <tbody>
//           <tr>
          
//               <td>${total}</td>
             
//           </tr>
//       </tbody>
//        </table>`;
     
 





