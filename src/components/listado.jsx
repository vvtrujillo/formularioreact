import React from "react";
import {Table} from 'reactstrap'
import {AiFillEdit} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'

const Listado = ({data, eliminarFn}) => {
    return(
        <React.Fragment>
            <Table>
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
            </Table>
        </React.Fragment>
    )
}

export default Listado;