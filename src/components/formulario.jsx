import React, { useState } from "react";
import {Form, Label, Input, Col, FormGroup, Row, Button} from 'reactstrap'

const estadoInicial = {
    nombre:'',
    codigo:'',
    cantidad:''
}

const Formulario = ({agregarFn}) => {

    const [formulario, setFormulario] = useState(estadoInicial);

    const actualizaFormulario = ({target: {name,value}}) => {
        setFormulario({
            ...formulario,
            [name]:value
        })
    }

    const guardar = e => {
        e.preventDefault();        
        agregarFn(formulario);
        setFormulario(estadoInicial);
    }

    return(
        <React.Fragment>
            <Form onSubmit={guardar}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="nombre">Nombre:</Label>
                            <Input id="nombre" name="nombre" placeholder="Nombre..."type="text" value={formulario.nombre} onChange={actualizaFormulario} required minLength={2}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="codigo">Código</Label>
                            <Input id="codigo" name="codigo" placeholder="Código..."type="text" value={formulario.codigo} onChange={actualizaFormulario} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="cantidad">Cantidad</Label>
                            <Input id="cantidad" name="cantidad" placeholder="Cantidad..."type="number" value={formulario.cantidad} onChange={actualizaFormulario} max={999999999999}/>
                        </FormGroup>
                    </Col>                    
                </Row>                
                <Button color="primary" type="submit">Crear</Button>
            </Form>
        </React.Fragment>
    )
}

export default Formulario;