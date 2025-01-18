import './App.css';
import React from 'react';
import TareaItem from './TareaItem';
import ItemCuenta from './ItemCuenta';
import Filtro from './Filtro';
import Lista from './Lista';
import Boton from "./Boton";

const cuentaItems = [
  {texto: "Cortar Cebolla", completado: true},
  {texto: "Cortar Zanahoria", completado: false},
  {texto: "Cortar Manzana", completado: true},
  {texto: "Cortar Tomate", completado: false},
  {texto: "Cortar Pera", completado: true},
]


function App() {
  const [items, setItems] = React.useState(cuentaItems);
  console.log(items)

  const itemsCompletados = items.filter(element=>
    element.completado
  ).length;

  const accionTarea = () => {
    console.log("hola");
  }
  



  const [valorFiltro, setValorFiltro ] = React.useState("");
  console.log(valorFiltro);


  return (
    <React.Fragment>
      <ItemCuenta 
        cuenta={itemsCompletados}
        total={items.length}
      />
  
      <Filtro 
        valorFiltro={valorFiltro}
        setValorFiltro={setValorFiltro}  
      />

      <Lista>
        {items.map(item => (
          <TareaItem key={item.texto}
            texto={item.texto}
            completado={item.completado}
            accionTarea={accionTarea}
          />
        ))}
       
      </Lista>

      <Boton />
        
    </React.Fragment>
  );
}



export default App;
