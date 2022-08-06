import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'reactstrap';
import { useState } from 'react';
import Formulario from './components/formulario';
import Listado from './components/listado';
import Swal from 'sweetalert2';

//Creacion de formulario para conectar distintos objetos y simular un CRUD.
//primero instalamos reacstrap para utilizar bootstrap en los objetos.
//comando para instalar reacstrap: npm install reactstrap react react-dom
//npm install --save bootstrap
//colocar siguiente import en archivo index.js: import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const[data, setData] = useState([])

  const agregar = (obj) => {
    setData([...data,obj])
  }

  const eliminar = (nombre, indice) => {

    Swal.fire({title:'Eliminar',
              text:`Esta seguro de eliminar el elemento ${nombre} en la posicion ${indice}`,
              icon:'question',
              showCancelButton: true,
              confirmButtonText: 'Si, Eliminar'
            })
            .then(resp => {
              if(resp.isConfirmed){
                setData(data.filter((d,i) => i != indice));            
              }
            })
    
  }

  return (
    <Container>
      <h1>Formulario</h1>
      <Formulario agregarFn={agregar}></Formulario> 
      <hr></hr>
      <Listado data={data} eliminarFn={eliminar}></Listado>
    </Container>
  );
}

export default App;
