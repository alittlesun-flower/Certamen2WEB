const iniEliminar = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"¿Está seguro que quiere eliminar?", text:"No lo podrás recuperar una vez borrado"
    , icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarLectura(id)){
            let lectura = await getLecturas();
            cargarMedicion(lectura); 
            Swal.fire("Lectura eliminada", "Lectura eliminada exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a petición del usuario", "info");
    }
};
//NO LOGRE HACER FUNCIONAR ESTA COSAAAAAAAAAAAAAAAAA DE ELIMINAAAAAAAAAAR
//AAAAAAAAAAAAAAAAA me rindo
const cargarMedicion = (lectura)=>{
    let tbody = document.querySelector("#tbody-medicion");
    tbody.innerHTML="";
    for(let i=0; i<lectura.length; ++i){
        let tr=document.createElement("tr");
        let tdFecha = document.createElement("td");
        tdFecha.innerText = lectura[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = lectura[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = lectura[i].medidor;
        let tdValor = document.createElement("td");
        tdValor.innerText = lectura[i].valor;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText="Descartar Lectura";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLectura = lectura[i].id;
        botonEliminar.addEventListener("click", iniEliminar());
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);

    }
};

document.addEventListener("DOMContentLoaded", async()=>{
    let lectura = await getLecturas();
    cargarMedicion(lectura);
});