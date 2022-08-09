import React, { useState } from "react";
import {Form, Label, Input, Col, FormGroup, Row, Button} from 'reactstrap'

const estadoInicial = {
    nombre:'',
    apellido:'',
    edad: '',
    email:'',
    fono:''
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
                            <Label for="nombre">Apellido:</Label>
                            <Input id="apellido" name="apellido" placeholder="Apellido..."type="text" value={formulario.apellido} onChange={actualizaFormulario} required minLength={2}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nombre">Edad:</Label>
                            <Input id="edad" name="edad" placeholder="Edad..."type="number" value={formulario.edad} onChange={actualizaFormulario} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email:</Label>
                            <Input id="exampleEmail" name="email" placeholder="Email..."type="email" value={formulario.email} onChange={actualizaFormulario} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="fono">Fono</Label>
                            <Input id="fono" name="fono" placeholder="Fono..."type="number" value={formulario.fono} onChange={actualizaFormulario} max={999999999999}/>
                        </FormGroup>
                    </Col>                    
                </Row>                
                <Button color="primary" type="submit">Crear</Button>
            </Form>
        </React.Fragment>
    )
}

export default Formulario;