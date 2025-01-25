import './App.css';
import React from 'react';
import TareaItem from './TareaItem';
import ItemCuenta from './ItemCuenta';
import Filtro from './Filtro';
import Lista from './Lista';
import Boton from "./Boton";
import Agregar from './Agregar';




function App() {
  const pasarAPrsedItems = localStorage.getItem("Items_v1");

  let resultadoItems;

  if (localStorage.getItem("Items_v1") === null || undefined) {
    resultadoItems = [];
    localStorage.setItem("Items_v1", JSON.stringify([]));
  } else{
    resultadoItems = JSON.parse(pasarAPrsedItems);
  }

  const [items, setItems] = React.useState(resultadoItems);

  const itemsCompletados = items.filter(element=>
    element.completado
  ).length;

  const [valorFiltro, setValorFiltro ] = React.useState("");

  const buscadorItems = items.filter((item) => {
    const itemText = item.texto.toLocaleLowerCase();
    const buscarFiltro = valorFiltro.toLocaleLowerCase();
    return itemText.includes(buscarFiltro);
  })


  const checkItems = (text) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(
      (item) => item.texto == text
    );
    switch (newItems[itemIndex].completado) {
      case false:
        newItems[itemIndex].completado = true;
      break;
      case true:
        newItems[itemIndex].completado = false;
      break;
    }
    const pasarAString = JSON.stringify(newItems);
    localStorage.setItem("Items_v1", pasarAString);
    setItems(newItems);
  };

  const deleteItem = (text) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(
      (item) => item.texto == text
    );
    newItems.splice(itemIndex, 1);
    const pasarAString = JSON.stringify(newItems);
    localStorage.setItem("Items_v1", pasarAString);
    setItems(newItems);
  };

  const [agregarP, setAgregarP] = React.useState(false);
  const [valorAgregar, setValorAgregar] = React.useState("");

  const pantallaAgregar = () => {
    if (agregarP) {
      setAgregarP(false);
      setValorAgregar("")
    } else {
      setAgregarP(true);
    }
  };

  const agregarItem = ()=>{
    
    const newItems = [...items];

    const intemAgregado = {texto: valorAgregar, completado: false};
    newItems.push(intemAgregado);

    const pasarAString = JSON.stringify(newItems);
    localStorage.setItem("Items_v1", pasarAString);
    setItems(newItems);
    setAgregarP(false);
    setValorAgregar("")
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
            onComplete={() => checkItems(item.texto)}
            onDelete={() => deleteItem(item.texto)}
          />
        ))}
       
      </Lista>
        
      <Boton 
        agregar = {() => pantallaAgregar()}
      />


      {agregarP && (
        <Agregar 
          valorAgregar={valorAgregar}
          setValorFiltro={setValorAgregar}
          agregarItem={()=> agregarItem()}
        />
      )}

    </React.Fragment>
  );
}



export default App;
