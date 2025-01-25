function TareaItem(props){
    return(
      <li className="item">
        <span 
          onClick={ () => props.onComplete() }  
          className={`checkV ${props.completado && "iconoCheck"}`
        }>
            ✓
        </span>

        <p 
          className={`${props.completado && "iconoCheck"}`
        }>
          {props.texto}
        </p>

        <span 
          onClick={ () => props.onDelete() }
          className="checkX"
        >
          ✖
        </span>

      </li>
    )
}

export default TareaItem