const buttonCar = document.querySelector('.button-car');
const carrito = document.querySelector('.carrito');
const mensaje = document.querySelector('#mensaje');
const table = document.querySelector('#table');

buttonCar.addEventListener('click',()=>{
    if(carrito.classList.contains('carrito-oculto')){
        carrito.classList.remove('carrito-oculto');
    }
});

carrito.addEventListener('click',e=>{
    if(e.target.id===""){
        carrito.classList.add('carrito-oculto');
    }
})

function mostrarMensaje(muebles){
    if(muebles.length>0){
        if(!mensaje.classList.contains('mensaje-oculto')){
            mensaje.classList.add('mensaje-oculto');
        }
        table.classList.remove('contenedor-oculto');
    }else{
        if(!table.classList.contains('contenedor-oculto')){
            table.classList.add('contenedor-oculto');
        }
        mensaje.classList.remove('mensaje-oculto');
    }
}