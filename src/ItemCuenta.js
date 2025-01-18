function ItemCuenta (props){
    return(
        <div className="contenedorTitulo">
            <h1 className="titulo">Completaste {props.cuenta} de {props.total} Items</h1>
        </div>
    )
}

export default ItemCuenta;