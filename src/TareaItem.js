function TareaItem(props){
    return(
      <li className="item">
        <span 
          onClick={ props.checkItems() }  
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
          onClick={ props.deleteItem() }  
          className="checkX"
        >
          X
        </span>

      </li>
    )
}

export default TareaItem