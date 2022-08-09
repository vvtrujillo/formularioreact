import React from "react";
import {Table} from 'reactstrap'
import {AiFillEdit} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'

const Listado = ({data, eliminarFn, aumentarFn, edadMod}) => {
    return(
        <React.Fragment>
            {/*<Table>
                <thead>
                    <tr>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Fono</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((dato, i) => <tr key={i}>
                            <td><AiFillEdit /></td>
                            <td><MdDelete color='red' onClick={e => eliminarFn(dato.nombre, i)}/></td>
                            <td>{dato.nombre}</td>
                            <td>{dato.email}</td>
                            <td>{dato.fono}</td>
                        </tr>)
                    }
                </tbody>
                </Table>*/}
            {data && data.map((dato, i) => 
            <div key={i}>
                <h1>{dato.apellido}, {dato.nombre}</h1>
                <p>Email: {dato.email}</p>
                <p>Edad: {dato.edad}</p>
                <p>Fono: {dato.fono}</p>
                <button className="btn btn-danger" onClick={e => eliminarFn(dato.nombre, i)}>Remover</button>              
                <hr></hr>
            </div>)}
        </React.Fragment>
    )
}

export default Listado;