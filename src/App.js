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
//instalar react-icons: npm install react-icons --save
//instalar sweet alert para los mensajes: npm install sweetalert2

function App() {

  const[data, setData] = useState([])

  const [edad, setEdad] = useState(10);

  const agregar = (obj) => {
    setData([...data,obj])
  }

  const aumentar = (e) => {
    setEdad(edad+1);
    
  }

  const eliminar = (nombre, indice) => {

    Swal.fire({title:'Eliminar', //Aca colocamos el titulo del mensaje
              text:`Esta seguro de eliminar el elemento ${nombre} en la posicion ${indice}`, //acá colocamos el texto que va a decir en el mensaje
              icon:'question', //aca indicamos el icono del mensaje
              showCancelButton: true, //indicamos si vamos a mostrar el boton "Cancelar" en el mensaje
              confirmButtonText: 'Si, Eliminar' //Texto del boton confirmar la acción del mensaje
            })
            .then(resp => {
              if(resp.isConfirmed){
                setData(data.filter((d,i) => i != indice));            
              }
            })
    
  }

  return (
    <Container center>
      <h1>Formulario</h1>
      <hr></hr>
      <Formulario agregarFn={agregar}></Formulario> 
      <hr></hr>
      <Listado data={data} eliminarFn={eliminar} aumentarFn={aumentar} edadMod={setEdad.edad}></Listado>
    </Container>
  );
}

export default App;
