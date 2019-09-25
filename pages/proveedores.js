import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import Navigation from './components/Navigation'
import Layout from './components/GeneralLayout'
import './style/dropFile.css'

import React, { Component } from 'react';

class Proveedores extends Component {
    constructor ()
    {
        super();

        //inicializa state
        this.state = {
            name: '',
            lastName: '',
            email: '',
            address: '',
            descrip: '',
            phone: '',
            type: '',
            comment: '',
            showAlert: false
        };

        //Se necesita hacer bind a todas la funciones que se usen dentro de la clase.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    //Se activa cuando se presiona enviar
    handleSubmit(e)
    {
        //No se que hace pero debe ir al inicio
        e.preventDefault();

        //Poner aqui lo que tiene que hacer el form cuando se envia la informacion
        this.setState({showAlert: true});
        //console.log(this.state);

        //Reincia los inputs
        this.setState({
            name: '',
            lastName: '',
            email: '',
            address: '',
            descrip: '',
            phone: '',
            type: '',
            comment: ''
        });
    }

    handleClose(e)
    {
        this.setState({showAlert: false});
    }

    //Actualiza los valores cada vez que se hace un cambio en el input
    handleInputChange(e)
    {
        //obtiene el valor y el nombre del componente que cambio
        const {value, name} = e.target;
        // console.log(value, name);

        // Actualiza el campo que se modifico
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Navigation />
                <Layout>
                    <h1 className="text-center pb-3">Proveedores</h1>

                    <Alert variant="success" show={this.state.showAlert} onClose={this.handleClose} dismissible>
                        Datos enviados
                    </Alert>
                    <div className="col-6 pt-4 mx-auto mb-5">
                        { /*
                            Formulario de proveedores (Izquierda)
                        */ }
                        <Form className="" onSubmit={this.handleSubmit}>
                            <div className="row">
                                {/*
                                    El form control tiene que tener un nombre igual a un atributo de la variable state. Cambiar el value={this.state.email} al atributo correspondiente. Hacerlo para cada input.
                                */}
                                <div className="col">
                                    <label htmlFor="name">Nombre</label>
                                    <Form.Control name="name" type="text" placeholder="Nombre" value={this.state.name} onChange={this.handleInputChange}/>
                                </div>

                                <div className="col">
                                    <label htmlFor="lastName">Apellidos</label>
                                    <Form.Control name="lastName" type="text" placeholder="Apellidos" value={this.state.lastName} onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="email">E-mail</label>
                                    <Form.Control name="email" type="email" placeholder="e-mail" value={this.state.email} onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="address">Dirección</label>
                                    <Form.Control name="address" type="text" placeholder="Dirección" value={this.state.address} onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="descrip">Descripción de las actividades que su empresa realiza</label>
                                    <Form.Control name="descrip" type="text" placeholder="" value={this.state.descrip} onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="tel">Teléfono</label>
                                    <Form.Control name="phone" type="phone" placeholder="(+506) 1234 5678" value={this.state.phone} onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="type">Tipo servicio</label>
                                    <select name="type" className="form-control" value={this.state.type} onChange={this.handleInputChange}>
                                        <option value="Alimentación" data-index="1">Alimentación</option>
                                        <option value="Transporte" data-index="2">Transporte</option>
                                        <option value="Recreación y entretenimiento" data-index="3">Recreación y entretenimiento</option>
                                        <option value="Eventos" data-index="4">Eventos</option>
                                        <option value="Organización de evento" data-index="5">Organización de evento</option>
                                        <option value="Limpieza" data-index="6">Limpieza</option>
                                        <option value="Maintenance" data-index="7">Maintenance</option>
                                        <option value="Repairs" data-index="8">Repairs</option>
                                        <option value="Public Safety" data-index="9">Public Safety</option>
                                        <option value="Special Projects" data-index="10">Special Projects</option>
                                        <option value="Event Set up" data-index="11">Event Set up</option>
                                        <option value="Housekeeping" data-index="12">Housekeeping</option>
                                  </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="comment">Comentarios</label>
                                    <Form.Control name="comment" as="textarea" rows="5" placeholder="" value={this.state.comment} onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col form-group files color">
                                    <label>Subir archivo (informacion adicional) </label>
                                    <input type="file" className="form-control" multiple=""/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="Pay">Método de pago</label>
                                    <div className="custom-control custom-radio mt-2">
                                        <input type="radio" id="cash" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="cash">Efectivo</label>
                                    </div>
                                    <div className="custom-control custom-radio mt-2">
                                        <input type="radio" id="card" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="card">Tarjeta</label>
                                    </div>
                                    <div className="custom-control custom-radio mt-2">
                                        <input type="radio" id="check" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="check">Cheque</label>
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-4" variant="dark" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Proveedores;
