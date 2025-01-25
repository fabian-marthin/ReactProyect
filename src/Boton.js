function Boton (props) {
    return(
        <button 
            onClick={() => props.agregar()}
            className="boton"
        >
            +
        </button>
    )
}


export default Boton;