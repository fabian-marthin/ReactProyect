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

  const itemsCompletados = items.filter(element=>
    element.completado
  ).length;

  const accionTarea = () => {
    console.log("hola");
  }

  const [valorFiltro, setValorFiltro ] = React.useState("");

  const buscadorItems = items.filter((item) => {
    const itemText = item.texto.toLocaleLowerCase();
    const buscarFiltro = valorFiltro.toLocaleLowerCase();
    return itemText.includes(buscarFiltro);
  })

  const checkItems = (texto)=> {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(
      (item)=>item.texto === texto
    );

    switch (newItems[itemIndex].completado) {
      case false:
        newItems[itemIndex].completado = true;
      break;
      case true:
        newItems[itemIndex].completado = false;
      break;
    }
    setItems(newItems);
  }

  const deleteItem = (texto) =>{
    const newItems = [...items];
    const itemIndex = newItems.findIndex(
      (item)=>item.texto === texto
    );
    newItems.splice(itemIndex, 1);
    setItems(newItems);
  }

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
        {buscadorItems.map(item => (
          <TareaItem key={item.texto}
            texto={item.texto}
            completado={item.completado}
            accionTarea={accionTarea}
             checkItems={() => checkItems(item.texto)}
            deleteItem={() => deleteItem(item.texto)} 
          />
        ))}
       
      </Lista>

      <Boton />
        
    </React.Fragment>
  );
}



export default App;
