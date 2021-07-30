const cargarMedida = async()=>{ 
    let resul = await axios.get("api/medida/get");
    let medida = resul.data;
    let medidaSelect = document.querySelector("#medida-select");
    medida.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        medidaSelect.appendChild(option);
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    cargarMedida();
});

document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let medida = document.querySelector("#medida-select").value.trim();
    let error = [];
    if(valor == 0){
        error.push("Debe de ingresar un valor mayor a cero")
    }else if(valor < 0 || valor > 500){
        error.push("Debe de ingresar un valor dentro del rango (Mayor a 0 y menor que 500")
    }
    if(hora === ""){
        error.push("Debe de ingresar una hora correcta");
    }else if(hora.length!=5 || hora.charAt(2)!=':'){
        error.push("Debe ingresar una hora valida con este formato (HH:MM)");
    }
    if(error.length == 0){
        let lectura={};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.medida = medida;
        let res = await crearLecturas(lectura);
        await Swal.fire("Lectura añadida", "Lectura añadida correctamente","info");
        window.location.href = "medicionesExistentes";
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: error.join("<br />")
        });
    };
});