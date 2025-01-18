function TareaItem(props){
    return(
      <li className="item">
        <span 
          onClick={(event)=>{
            props.accionTarea()
          }}
          className={`checkV ${props.completado && "iconoCheck"}`
        }>
            V
        </span>

        <p 
          className={`${props.completado && "iconoCheck"}`
        }>
          {props.texto}
        </p>

        <span 
          className="checkX"
        >
          X
        </span>

      </li>
    )
}

export default TareaItem