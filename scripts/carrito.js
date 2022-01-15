const listaCarritos = document.querySelector('.carrito #table tbody');
const agregarCarrito = document.querySelector('.productos');
const carritoCon = document.querySelector('.carrito');;
var muebles = [];

cargarListeners();


function cargarListeners(){
    agregarCarrito.addEventListener('click',agregarMueble);
    buttonCar.addEventListener('click',()=>{
        mostrarMensaje(muebles);
    });
    carritoCon.addEventListener('click',eliminarMueble);
}


function eliminarMueble(e){
    if(e.target.id==="eliminar-curso"){
        const idMueble = e.target.getAttribute('data-id');
        
        muebles = muebles.filter(mueble => mueble.id!=idMueble);

        carritoHTML();
        mostrarMensaje(muebles);
    }
}


function agregarMueble(e){
    e.preventDefault();
    if(e.target.id==="agregar-carrito"){
        const mueble = e.target.parentElement.parentElement;

        leerDatosMueble(mueble);
    }
}


function leerDatosMueble(mueble){
    const muebleEscogido = {
        id: mueble.querySelector('#agregar-carrito').getAttribute('data-id'),
        imagen: mueble.querySelector('img').src,
        nombre: mueble.querySelector('#title-product').textContent,
        precio: mueble.querySelector('.actions span').textContent,
        cantidad: 1
    };

    const existe = muebles.some(mueble => mueble.id == muebleEscogido.id);

    if(existe){
        const actualizacion = muebles.map(mueble => {
            if(mueble.id == muebleEscogido.id){
                mueble.cantidad++;
                return mueble;
            }else{
                return mueble;
            }
        });
        muebles = [...actualizacion];
    }else{
        muebles = [...muebles,muebleEscogido];
    }

    carritoHTML();
}

function carritoHTML(){
    limpiarHTML();
    muebles.forEach(mueble => {
        const {id,imagen,nombre,precio,cantidad} = mueble;
        const row = document.createElement('tr');
        row.innerHTML = `
            <tr>
                <td class="img-item"><img src=${imagen}></td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td><span id="eliminar-curso" data-id="${id}">X</span></td>
            </tr>
        `;
        listaCarritos.appendChild(row);
    });
}


function limpiarHTML(){
    while(listaCarritos.firstChild){
        listaCarritos.removeChild(listaCarritos.firstChild);
    }
}