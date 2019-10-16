import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Router from 'next/router'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import { Formik, Field } from 'formik';

import React, { Component } from 'react';

class AdminLogin extends Component {

    constructor ()
    {
        super();

        //inicializa state
        this.state = {
            username: '',
            password: '',
            showMessage: false
        };

        //Se necesita hacer bind a todas la funciones que se usen dentro de la clase.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e)
    {
        e.preventDefault();

        //Poner aqui lo que tiene que hacer el form cuando se envia la informacion
        if(this.state.username === "admin" && this.state.password === "admin") {
            Router.push('/adminMain')
        } else {
            this.setState({
                message: 'Credenciales inválidos',
                showMessage: true
            });
        }

        //Reincia los inputs
        this.setState({
            username: '',
            password: ''
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
                <Navigation />
                <Layout>
                    <div className="row justify-content-center">
                        <h1 className="mt-2 mb-4">
                            Iniciar Sesión
                        </h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4" style={{textAlign: 'center'}}>
                            <Formik onSubmit={(data)=>{console.log(data)}}
                                initialValues = {{
                                    username: "",
                                    password: ""
                                }}>
                                {({handleSubmit}) =>
                                    <Form onSubmit={handleSubmit}>
                                        <Field name="username" placeholder="Usuario" component={this.InputField} className="form-control" value={this.state.username}  onChange={this.handleInputChange}/>
                                        <Field name="password" type="password" placeholder="Contraseña" component={this.InputField} className="form-control" value={this.state.password}  onChange={this.handleInputChange}/>
                                        <Button variant="dark" onClick={this.handleSubmit}>Iniciar sesión</Button>
                                    </Form>
                                }

                            </Formik>

                        </div>
                    </div>
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

            </div>
        )
    }
}

export default AdminLogin;
