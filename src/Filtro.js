import React from "react";

function Filtro(props){
    

    return(
        <div className="contenedorFiltro" >
            <input 
                className="filtro" 
                placeholder="Ingresa el item"
                value={props.valorFiltro}
                onChange={(event)=>{
                    props.setValorFiltro(event.target.value);
            }}>
            </input>
        </div>
        
    )
}

export default Filtro;