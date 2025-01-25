function Agregar (props) {
    return (
        <div className="contenedorAgregar">
            <div className="interiorAgregar">
                <h3>Agreta tu nueva tarea</h3>
                <input 
                    className="agregar" 
                    placeholder="Tarea"
                    value={props.valorAgregar}
                    onChange={(event)=>{
                        props.setValorFiltro(event.target.value);
                    }}
                />
                <button
                    onClick={() => props.agregarItem()}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Agregar;