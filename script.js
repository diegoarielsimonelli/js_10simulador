
console.dir(document.body)

let boton = document.getElementsByClassName( "btn btn-danger");

boton[0].onclick = () =>{agregarAlCarrito(0)};
boton[1].onclick = () =>{agregarAlCarrito(1)};     
boton[2].onclick = () =>{agregarAlCarrito(2)};
boton[3].onclick = () =>{agregarAlCarrito(3)};
boton[4].onclick = () =>{agregarAlCarrito(4)};
boton[5].onclick = () =>{agregarAlCarrito(5)};
boton[6].onclick = () =>{localStorage.clear()};

function activarPrecios() {
  
    let precio = document.getElementsByClassName("precio");
    precio[0].innerText = "$1000";
    precio[0].style.font = "italic bold 30px Georgia";
    precio[1].innerText = "$900";
    precio[1].style.font = "italic bold 30px Georgia";
    precio[2].innerText = "$1500";
    precio[2].style.font = "italic bold 30px Georgia";
    precio[3].innerText = "$1200";
    precio[3].style.font = "italic bold 30px Georgia";
    precio[4].innerText = "$950";
    precio[4].style.font = "italic bold 30px Georgia";
    precio[5].innerText = "$920";
    precio[5].style.font = "italic bold 30px Georgia";
    
   
}

activarPrecios();

let Productos = [
{ id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
{ id: 2, nombre: "Escalativa Catalana Vegana", precio: 900 },
{ id: 3, nombre: "Vegetales Asados", precio: 1500 },
{ id: 4, nombre: "Sushi Vegano", precio: 1200 },
{ id: 5, nombre: "Hamburgueza de Lentejas", precio: 950 },
{ id: 6, nombre: "Sandwich de milanesa de Seitán", precio: 920 }
];


let carrito = []

function agregarAlCarrito(prod) {
    carrito.push( Productos[prod] )

    localStorage.setItem('carrito', JSON.stringify(carrito) )
}



 



let carrito1=JSON.parse(localStorage.getItem('carrito'));
console.log(carrito1);

// const lista = document.getElementById('lista')

// for (const producto of Productos) {

 
//     const li = document.createElement('li')
//     li.className = "item"
    
    
//     li.innerHTML = `
//         <div class="carrito1">
//             <h3>${Productos.nombre}</h3>
//             <p>${Productos.precio}</p>
            
//         </div>
//     `
    
//     lista.appendChild(li)
// }

