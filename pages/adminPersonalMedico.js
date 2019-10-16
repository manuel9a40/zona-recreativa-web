import Layout from './components/GeneralLayout';
import AdminNavigation from './components/AdminNavigation';
import AdminTable from './components/AdminTable';
import AdminTableItem from './components/AdminTableItem';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'
import { Formik, Field } from 'formik';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import React, { Component } from 'react';

class AdminPersonalMedico extends Component {

    constructor ()
    {
        super();

        //inicializa state
        this.state = {
            nombrePersona: '',
            nombrePaquete: '',
            showModal: false,
            showMessage: false,
            editId: -1,
            items: []
        };

        //Se necesita hacer bind a todas la funciones que se usen dentro de la clase.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addPersonalMedico = this.addPersonalMedico.bind(this);
        this.editPersonalMedico = this.editPersonalMedico.bind(this);
        this.deletePersonalMedico = this.deletePersonalMedico.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    InputField = ({
        field,
        form: _,
        ...props
        }) => {
        return (
            <div>
                <input style={{marginTop:5, marginBottom:15 , padding:10}} {...field} {...props} />
            </div>
        );
    };

    addPersonalMedico(e)
    {
        this.setState({
            showModal: true,
            editId: -1
        });
    }

    editPersonalMedico(id)
    {
        this.setState({
            nombrePersona: this.state.items[id][0],
            nombrePaquete: this.state.items[id][1],
            showModal: true,
            editId: id
        });
    }

    deletePersonalMedico(id)
    {
        this.state.items.pop(id);

        this.setState({
            showMessage: true,
            message: 'Personal medico eliminado'
        });
    }

    handleSubmit(e)
    {
        e.preventDefault();

        //Poner aqui lo que tiene que hacer el form cuando se envia la informacion
        let message = 'Personal medico agregado';
        if (this.state.editId === -1) {
            this.state.items.push([
                this.state.nombrePersona,
                this.state.nombrePaquete]);
        } else {
            this.state.items[this.state.editId] = [
                this.state.nombrePersona,
                this.state.nombrePaquete];
            message = 'Cambios guardados';
        }
        //console.log(this.state);

        //Reincia los inputs
        this.setState({
            nombrePersona: '',
            nombrePaquete: '',
            showModal: false,
            showMessage: true,
            message: message
        });
    }

    handleClose(e)
    {
        //Reincia los inputs
        this.setState({
            nombrePersona: '',
            nombrePaquete: '',
            showModal: false
        });
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
    }

    render()
    {
        return(
            <div>
                <AdminNavigation />
                <Layout>
                    <div className="row justify-content-center">
                        <h1 className="mt-2 mb-4">
                            Administración de personal médico
                        </h1>
                    </div>

                    <div className="package-admin-table">
                        <AdminTable headers={['Nombre de la persona','Nombre del paquete']}>
                            {this.state.items.map((item, index) => <AdminTableItem id={index} items={item} onEdit={this.editPersonalMedico} onDelete={this.deletePersonalMedico} />)}
                        </AdminTable>
                    </div>

                    <Modal show={this.state.showModal} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="" style={{textAlign: 'center'}}>
                                <Formik  onSubmit={(data)=>{console.log(data)}}
                                    initialValues = {{
                                    nombrePersona: "",
                                    nombrePaquete: "" }}>
                                    {({handleSubmit}) =>
                                        <Form onSubmit={handleSubmit}>
                                            <Field name="nombrePersona" placeholder="Nombre de la persona" component={this.InputField} className="form-control" value={this.state.nombrePersona}  onChange={this.handleInputChange} />
                                            <Field name="nombrePaquete" placeholder="Nombre del paquete" component={this.InputField} className="form-control" value={this.state.nombrePaquete}  onChange={this.handleInputChange} />
                                        </Form>
                                    }
                                </Formik>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={this.handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="dark" onClick={this.handleSubmit}>
                                Enviar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Layout>

                <Toast style={{
                        position: 'absolute',
                        top: 80,
                        right: 10,}}
                    onClose={() => this.setState({showMessage: false})} show={this.state.showMessage} delay={5000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto"></strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.message}</Toast.Body>
                </Toast>

                <Fab color="primary" aria-label="add" style={{
                        position: 'absolute',
                        bottom: 15,
                        right: 15,}} onClick={this.addPersonalMedico}>
                    <AddIcon />
                </Fab>

            </div>
        )
    }
}

export default AdminPersonalMedico;
