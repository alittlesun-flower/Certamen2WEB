const getLecturas = async ()=>{
    let resp = await axios.get("api/lectura/get");
    return resp.data; 
};
const crearLecturas = async(lectura)=>{
    let resp = await axios.post("api/lectura/post", lectura,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
}
const eliminarLectura = async(id)=>{
    try{
        let resp = await axios.post("api/lectura/delete", {id}, {
            headers:{
                "Content-Type": "aplication/json"
            }
        });
        return resp.data == "Borrado";
    }catch(e){
        return false;
    }

}
//wena wena profe, un saludito desde acá si llega a ver esto