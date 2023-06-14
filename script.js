function mostrarContenido(opcion) {
    var clientes = document.getElementById("gestionClientes");
    var videoJuegos = document.getElementById("videoJuegos"); 
    var ventas = document.getElementById("ventas"); 
    var fidelizacion = document.getElementById("fidelizacion"); 

    if (opcion === "clientes") {
        clientes.style.display = "block";
        videoJuegos.style.display = "none";
        ventas.style.display = "none";
        fidelizacion.style.display = "none";
    } 
    else if (opcion === "videoJuegos") {
        clientes.style.display = "none";
        videoJuegos.style.display = "block";
        ventas.style.display = "none";
        fidelizacion.style.display = "none";
    }
    else if (opcion === "ventas") {
        clientes.style.display = "none";
        videoJuegos.style.display = "none";
        ventas.style.display = "block";
        fidelizacion.style.display = "none";
    }
    else if (opcion === "fidelizacion") {
        clientes.style.display = "none";
        videoJuegos.style.display = "none";
        ventas.style.display = "none";
        fidelizacion.style.display = "block";
    }
  }
// ----------------------------------CLIENTES--------------------------------------------

clientes = new Map();
clientes.set("aa123",{
    conjuntoID: "aa123",
    identificacion: 123,
    nombre: "a",
    apellido:"a",
    telefono:"a",
    correo:"a",
    nacimiento:"a",
    nacionalidad:"a",
    puntosF: 123
})
clientes.set("bb456",{
    conjuntoID: "bb456",
    identificacion: 456,
    nombre: "b",
    apellido:"b",
    telefono:"b",
    correo:"b",
    nacimiento:"b",
    nacionalidad:"b",
    puntosF: 123

})
clientes.set("cc789",{
    conjuntoID: "cc789",
    identificacion: "789",
    nombre: "c",
    apellido:"c",
    telefono:"c",
    correo:"c",
    nacimiento:"c",
    nacionalidad:"c",
    puntosF: 123

})
let botonCrearCliente = document.getElementById('botonCrearCliente');
botonCrearCliente.addEventListener('click', function(event){
    event.preventDefault();
    crearCliente()
})

function crearCliente(){
    let PuntosEnv = 0;
    let identificacion = document.getElementById('identificacion').value;
    let nombre = document.getElementById('nombres').value;
    let apellido = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let id = nombre + apellido + identificacion 
    if (typeof Puntos == "string") {
        console.log(Puntos);
        PuntosEnv = Puntos;
    }
    clientes.set(id,{
        identificacion: identificacion,
        nombre: nombre,
        apellido:apellido,
        telefono:telefono,
        correo:correo,
        nacimiento:nacimiento,
        nacionalidad:nacionalidad,
        puntosF:PuntosEnv
    })
    agregarCliente(clientes.get(id),"directorioCliente")
    agregarCliente(clientes.get(id),"ContenidoDirectorioCliente")
    eliminarCliente()
}
function agregarCliente(datos,contenido) {
    tabla = document.getElementById(contenido)
    let id = datos.conjuntoID
    let identificacion = datos.identificacion
    let nombres = datos.nombre
    let apellidos = datos.apellido
    let telefono = datos.telefono
    let correo = datos.correo
    let nacimiento = datos.nacimiento
    let nacionalidad = datos.nacionalidad
    let puntosF = datos.puntosF
    let listado = document.createElement("tr")
    listado.setAttribute("id",id)

    listado.innerHTML = "<td>"+ identificacion + "</td>" +
                        "<td>"+ nombres + "</td>" +
                        "<td>"+ apellidos + "</td>" +
                        "<td>"+ telefono + "</td>" +
                        "<td>"+ correo + "</td>" +
                        "<td>"+ nacimiento + "</td>" +
                        "<td>"+ nacionalidad + "</td>" + 
                        `<button type="button" id="buttonEliminar" class="${contenido}" class="btn btn-danger" value="${id}">❌</button>` +
                        `<button type="button" id="buttonEditar" class="${contenido}" class="btn btn-info" value="${id}">📝</button>`   +
                        `<button type="button" id="botonComprasDirectorio" class="${contenido}" class="btn btn-info"  value="${id}" >C</button>`   +
                        "<td>"+ puntosF + "</td>" 

                        tabla.appendChild(listado);
}
function mostrar(){
    for (const [clave, datos] of clientes) {
        agregarCliente(datos,"directorioCliente")
    agregarCliente(datos,"ContenidoDirectorioCliente");
    }
    eliminarCliente();
    cargarBotonesEditar();
    document.getElementById("divEditarCliente").setAttribute("class", "col-12 visually-hidden"); 
    document.getElementById("divCrearCliente").setAttribute("class", "col-12 visually");
}
function eliminarCliente() {
    botonEliminar = document.querySelectorAll("button#buttonEliminar")
    botonEliminar.forEach(element => {
        element.addEventListener("click", function() {
            if(botonEliminar) {
                linea = document.getElementById(element.value);
                linea.parentNode.removeChild(linea);  
                clientes.delete(element.value);
                console.log(clientes);
            }
          
        })

    });
}
let botonEditarCliente = document.getElementById("botonEditarCliente")
function cargarBotonesEditar() {
    const buttonEditar = document.querySelectorAll("button#buttonEditar");
    buttonEditar.forEach((element) => {
        element.addEventListener("click", function () {
        let clienteEditar = clientes.get(element.value);
        console.log(clienteEditar);
        document.getElementById('identificacion').value = clienteEditar.identificacion; //CARGAR DATOS A INPUTS
        document.getElementById("nombres").value = clienteEditar.nombre; //CARGAR DATOS A INPUTS
        document.getElementById("apellidos").value = clienteEditar.apellido; //CARGAR DATOS A INPUTS
        document.getElementById("telefono").value = clienteEditar.telefono; //CARGAR DATOS A INPUTS
        document.getElementById("correo").value = clienteEditar.correo; //CARGAR DATOS A INPUTS
        document.getElementById("nacimiento").value =clienteEditar.nacimiento; //CARGAR DATOS A INPUTS
        document.getElementById("nacionalidad").value =clienteEditar.nacionalidad; //CARGAR DATOS A INPUTS
        document.getElementById("divEditarCliente").setAttribute("class", "col-12 visually"); 
        document.getElementById("divCrearCliente").setAttribute("class", "col-12 visually-hidden");


        let idNuevas = clienteEditar.nombre + clienteEditar.apellido + clienteEditar.identificacion;
        console.log(idNuevas);
        botonEditarCliente.setAttribute("value", idNuevas); //ASIGNAMOS EL VALOR AL BOTON DE CLAVE
        intermediario(); //CARGAMOS EL EVENTO DEL BOTON
    });
    });
  }
  function intermediario() {
    botonEditarCliente.addEventListener("click", function(event){
        event.preventDefault();
        actualizarClientes()
    }); 
}
botonEventoEditarCliente = document.getElementById("botonEditarCliente")
function actualizarClientes() {
    const claveAntigua = botonEventoEditarCliente.value;
    console.log(claveAntigua);

    const Identificacion = document.getElementById("identificacion").value;
    const Nombres = document.getElementById("nombres").value;
    const Apellidos = document.getElementById("apellidos").value;
    const Telefono = document.getElementById("telefono").value;
    const Email = document.getElementById("correo").value;
    const FechaNacimiento = document.getElementById("nacimiento").value;
    const Nacionalidad = document.getElementById("nacionalidad").value;
    const idNueva = Nombres + Apellidos + Identificacion;
    if (clientes.get(idNueva)) {
      clientes.get(idNueva).telefono = Telefono; 
      clientes.get(idNueva).email = Email;
      clientes.get(idNueva).fechaNacimiento = FechaNacimiento; 
      clientes.get(idNueva).nacionalidad = Nacionalidad; 
      let cliente = document.getElementById(idNueva); 
      if(cliente){
        cliente.parentNode.removeChild(cliente); 
        agregarCliente(clientes.get(idNueva)); 
        cargarBotonesEditar();
      }
      
    } else {
      console.log(clientes.get(claveAntigua));
      let cliente = document.getElementById(claveAntigua); 
        if(botonEventoEditarCliente){
            cliente.parentNode.removeChild(cliente); //Eliminamos elemento del html
            crearCliente(clientes.get(claveAntigua).puntos);
            clientes.delete(claveAntigua);
            console.log(clientes);
        }
      
    }
  }





  botonBuscarLibro = document.getElementById("botonBusquedaGestionCliente")
  botonBuscarLibro.addEventListener("click", function (event) {
      const inputBuscarLibro = document.getElementById('busquedaGestionCliente');
      event.preventDefault();
      let listaQuitarFront = [];
      let listaMostrar = [];
      contador = 0;
      console.log("Esta es la caja " + inputBuscarLibro.value);
      if (inputBuscarLibro.value === "") {
        for (let llaves of clientes.keys()) {
          console.log("Elemento " + llaves);
          listaMostrar.push(llaves);
        }
      } else {
        for (let llaves of clientes.keys()) {
          if (
            llaves.toUpperCase().includes(inputBuscarLibro.value.toUpperCase()) ==
            true
          ) {
            console.log("siiiiiiiii");
            listaMostrar.push(llaves);
            contador += 1;
          } else {
            listaQuitarFront.push(llaves);
          }
        }
      }
      console.log("mostrar " + listaMostrar);
      console.log("quitar " + listaQuitarFront);
      if (listaQuitarFront.length > 0) {
        mostarVista(listaMostrar);
        quitarVista(listaQuitarFront);
      } else {
        console.log("entro a mostrar");
        mostarVista(listaMostrar);
      }
    });
  
  
  function quitarVista(lista) {
      for (let i = 0; i < lista.length; i++) {
        let nombreDiv = document.getElementById(lista[i]);
        nombreDiv.setAttribute("class","mt-2  col-xl-3 col-lg-4 col-md-6 col-sm-6 col- visually-hidden" );
      }
    }
    
  function mostarVista(lista) {
  for (let i = 0; i < lista.length; i++) {
      let nombreDiv = document.getElementById(lista[i]);
      nombreDiv.setAttribute("class","mt-2  col-xl-3 col-lg-4 col-md-6 col-sm-6 col- visually");
  }
}
mostrar();
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// ----------------------------------RUTAS--------------------------------------------

id = 3;
let videojuego = new Map()
videojuego.set(1,{
    id: 1,
    nombreVideojuego: "a",
    tematicaVideojuego: "genero",
    valorVideojuego: "duracion",
    fidelizacionVideojuego: "director",
    link: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg",
});

videojuego.set(2,{
    id: 2,
    nombreVideojuego: "b",
    tematicaVideojuego: "genero",
    valorVideojuego: "duracion",
    fidelizacionVideojuego: "director",
    link: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg",
});

videojuego.set(3,{
    id: 3,
    nombreVideojuego: "c",
    tematicaVideojuego: "genero",
    valorVideojuego: "duracion",
    fidelizacionVideojuego: "director",
    link: "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg",
});

botonCrearVideojuego = document.getElementById("botonCrearVideojuego")
botonCrearVideojuego.addEventListener("click", function(event) {
    event.preventDefault(); 
    crearVideojuego()
});
function crearVideojuego(){
    id += 1;
    let nombreVideojuego = document.getElementById("nombreVideojuego").value;
    let tematicaVideojuego = document.getElementById("tematicaVideojuego").value;
    let valorVideojuego = document.getElementById("valorVideojuego").value;
    let fidelizacionVideojuego = document.getElementById("fidelizacionVideojuego").value;
    let link = document.getElementById("linkVideojuego").value;

    videojuego.set(id,{
        id:nombreVideojuego,
        nombreVideojuego: nombreVideojuego,
        tematicaVideojuego: tematicaVideojuego,
        valorVideojuego: valorVideojuego,
        fidelizacionVideojuego: fidelizacionVideojuego,
        link: link,
    });
    agregarVideojuego(videojuego.get(id),"contenidoVideojuego")
    agregarVideojuego(videojuego.get(id),"contenidoVentaVideojuego")

}

function agregarVideojuego(datos,contenido){
    let padre = document.getElementById(contenido);
    let id = datos.id
    let nombreVideojuego = datos.nombreVideojuego
    let tematicaVideojuego = datos.tematicaVideojuego
    let valorVideojuego = datos.valorVideojuego
    let fidelizacionVideojuego = datos.fidelizacionVideojuego
    let link = datos.link

    var hijo = document.createElement("div"); hijo.setAttribute("class",`card m-1 mt-5 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-" `);
    hijo.setAttribute("style","width: 16rem")
    
    hijo.innerHTML =    `<img src="${link}" class="card-img-top" alt="..."> 
                        <button type="button" value="${id}" class="${contenido}" id="EliminarVideojuego" class="btn btn-danger" style="position:absolute; right:0px; " >❌</button>
                        <div class="card-body">
                            <h5 id="nombreVideojuegoCARD" class="card-title">${nombreVideojuego}</h5>
                            
                        </div>
                        <ul class="list-group list-group-flush">
                            <li id="tematicaVideojuego" class="list-group-item">${tematicaVideojuego}</li>
                            <li id="valorVideojuego" class="list-group-item">${valorVideojuego}</li>
                            <li id="fidelizacionVideojuego" class="list-group-item">${fidelizacionVideojuego}</li>
                        </ul>
                        <button type="button" value="${id}"  id="comprasBoton" class="btn btn-danger"  >COMPRAS</button>
                        `
                        
    padre.appendChild(hijo);
    eliminarVideojuego()
}


function mostrarVideojuego(){
    for (const [clave, datos] of videojuego) {
        agregarVideojuego(datos,"contenidoVideojuego")
    agregarVideojuego(datos,"contenidoVentaVideojuego")
    }
    eliminarVideojuego()
}
mostrarVideojuego()

function eliminarVideojuego() {
    buttonEliminarVideojuego = document.querySelectorAll("button#EliminarVideojuego")
    buttonEliminarVideojuego.forEach(element => {
        if(buttonEliminarVideojuego){
            linea = document.getElementById((element.value));
        }
    })
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// ----------------------------------VENTAS--------------------------------------------
ventas = new Map()
navVentas = document.getElementById('navVentas');
navVentas.addEventListener("click", function(event) {
    event.preventDefault();
    cambiarBotonesVentas()
    comprar()
    mostrarVenta()
})
function cambiarBotonesVentas () {
    padreCard = document.querySelectorAll(".contenidoVentaVideojuego")
    padreCard.forEach(element => {
        element.setAttribute("class","hidden")
    })

    padreDirectorio = document.querySelectorAll(".ContenidoDirectorioCliente")
    padreDirectorio.forEach(element => {
        element.setAttribute("class","hidden")
    })
    
}


function comprar(){
    botonCompras = document.querySelectorAll("button#comprasBoton")
    ocultar = document.getElementById("seccionVideojuegos")
    ocultar2 = document.getElementById("seccionVideojuegos")
let videojuegoEspecifico;

    botonCompras.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault()
            ocultar.setAttribute("hidden","hidden")
            botonC = document.querySelectorAll("button#botonComprasDirectorio")
            botonC.forEach(element => {
                element.removeAttribute("class","hidden")
            })
            videojuegoEspecifico = videojuego.get(parseInt(element.value))
            let nombreVideojuego = videojuegoEspecifico.nombreVideojuego
            let tematicaVideojuego = videojuegoEspecifico.tematicaVideojuego
            let valorVideojuego = videojuegoEspecifico.valorVideojuego
            let fidelizacionVideojuego = videojuegoEspecifico.fidelizacionVideojuego
        
            ventas.set(element.value,{
            nombreVideojuego: nombreVideojuego,
            tematicaVideojuego: tematicaVideojuego,
            valorVideojuego: valorVideojuego,
            fidelizacionVideojuego: fidelizacionVideojuego,
        })
        
        })
let clienteEspecfico;
    botonComprasCliente = document.querySelectorAll("button#botonComprasDirectorio")  
    botonComprasCliente.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault()
            clienteEspecfico = clientes.get(element.value)
            let identificacion = clienteEspecfico.identificacion
            let nombre = clienteEspecfico.nombre
            let apellido = clienteEspecfico.apellido
            let telefono = clienteEspecfico.telefono
            let correo = clienteEspecfico.correo
            let nacimiento = clienteEspecfico.nacimiento
            let nacionalidad = clienteEspecfico.nacionalidad
            let puntosF = clienteEspecfico.puntosF

            ventas.set(element.value,{
                identificacion: identificacion,
                nombre: nombre,
                apellido:apellido,
                telefono:telefono,
                correo:correo,
                nacimiento:nacimiento,
                nacionalidad:nacionalidad,
                puntosF:puntosF
            })
            document.getElementById("seccionClientes").setAttribute("class", "hidden")
        })
        })
    
})
}

function mostrarVenta () {
    botonComprasCliente = document.querySelectorAll("button#botonComprasDirectorio")  

    botonComprasCliente.forEach(element => {
        clienteEspecfico = clientes.get(element.value)
        console.log(clienteEspecfico);
    })
    botonCompras = document.querySelectorAll("button#comprasBoton")
    botonCompras.forEach(element => {
        videojuegoEspecifico = videojuego.get(parseInt(element.value))
    })
    let identificacion = clienteEspecfico.identificacion
    let nombre = clienteEspecfico.nombre
    let apellido = clienteEspecfico.apellido
    let telefono = clienteEspecfico.telefono
    let correo = clienteEspecfico.correo
    let nacimiento = clienteEspecfico.nacimiento
    let nacionalidad = clienteEspecfico.nacionalidad
    let puntosF = clienteEspecfico.puntosF
    let nombreVideojuego = videojuegoEspecifico.nombreVideojuego
    let tematicaVideojuego = videojuegoEspecifico.tematicaVideojuego
    let valorVideojuego = videojuegoEspecifico.valorVideojuego
    console.log(identificacion);
    tabla = document.getElementById("ventaDirectorio")
    venta = document.getElementById("venta")
    venta.removeAttribute("class","hidden")
    let listado = document.createElement("tr")
    listado.setAttribute("id",id)

    listado.innerHTML = "<td>"+ identificacion + "</td>" +
                        "<td>"+ nombre + "</td>" +
                        "<td>"+ apellido + "</td>" +
                        "<td>"+ telefono + "</td>" +
                        "<td>"+ correo + "</td>" +
                        "<td>"+ nacimiento + "</td>" +
                        "<td>"+ nacionalidad + "</td>" + 
                        "<td>"+ puntosF + "</td>" 
                        "<td>"+ nombreVideojuego + "</td>" +
                        "<td>"+ tematicaVideojuego + "</td>" +
                        "<td>"+ valorVideojuego + "</td>" +
    tabla.appendChild(listado);
    
}
/* AL DARLE EN EL APARTADO DE VENTAS, LE MOSTRARA TODOS LOS VIDEO JUEGOS, DESPUES LE DARIA EN COMPRAR AL QUE QUERIA
Y DESPUES LE MUESTRA LA TABLA DONDE LE SALE LOS CLIENTES PARA SABER CUAL VA A COMPRAR Y DESPUES SE MOSTRARIA LA TABLA DE VENTAS */