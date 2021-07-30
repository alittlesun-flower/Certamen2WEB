@extends("layouts.master") 
@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-info text-black">
                <span>Registrar Lectura</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="fecha-txt" class="form-label">Fecha</label>
                    <input type="date" id="fecha-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="hora-txt" class="form-label">Hora</label>
                    <input type="text" id="hora-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="medidor-select" class="form-label">Medidor</label>
                    <select class="form-select" type="number" id="medidor-select">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                    </select>

                </div>
                <div class="mb-3">
                    <label for="direccion-txt" class="form-label">Dirección</label>
                    <input type="text" id="direccion-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="valor-txt" class="form-label">Valor</label>
                    <input type="number"  class="form-control" id="valor-txt">
                </div>
                <div class="mb-3">
                    <label for="medida-select" class="form-label">Tipo de medida</label>
                    <select class="form-select" id="medida-select">
                    </select>
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="registrar-btn" class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>
@endsection
@section('javascript')
    <script src="{{asset('js/servicios/lecturaService.js')}}"></script>
    <script src="{{asset('js/registrarLectura.js')}}"></script>
@endsection