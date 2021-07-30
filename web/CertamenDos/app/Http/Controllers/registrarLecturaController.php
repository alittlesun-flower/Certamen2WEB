<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Lectura;

class registrarLecturaController extends Controller
{
    public function getMedidas(){
        $medidas = array();
        $medidas[] = "Kilowatts";
        $medidas[] = "Watts";
        $medidas[] = "Temperatura";
        return $medidas;
    }
    public function getLecturas(){
        $lectura = Lectura::all();
        return $lectura;
    }
    public function crearLecturas(Request $request){
        $input = $request->all();
        $lectura = new Lectura();
        $lectura->fecha=$input["fecha"];
        $lectura->hora=$input["hora"];
        $lectura->medidor=$input["medidor"];
        $lectura->direccion=$input["direccion"];
        $lectura->valor=$input["valor"];
        $lectura->medida=$input["medida"];
        $lectura->save();
        return $lectura;
    }
    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id = $input("id");
        $lectura = Lectura::findOrFail($id);
        $lectura->delete(); 
        return "Borrado";
    }
}
