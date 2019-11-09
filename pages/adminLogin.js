import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Router from 'next/router'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Toast from 'react-bootstrap/Toast'
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarAlert from './components/SnackbarAlert'

import React, { Component } from 'react';

import { initFirebase } from '../lib/firebase'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as fb from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

var firebase;

class AdminLogin extends Component {

    constructor ()
    {
        super();

        //inicializa state
        this.state = {
            username: '',
            password: '',
            showModal: false,
            modalMsg: '',
            modalType: ''        };

        // Initialize firebase
        var prom =  new Promise((resolve, reject) =>
        {
            firebase = initFirebase()
            resolve()
        })

        //Se necesita hacer bind a todas la funciones que se usen dentro de la clase.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount()
    {
        var username;
        var uid;
        var providerData;

        firebase.auth().onAuthStateChanged(function(user)
        {
            // console.log("Por aqui si pasa")
            if (user)
            {
                // User is signed in.
                username = user.email;
                uid = user.uid;
                providerData = user.providerData;

                Router.push('/adminMain')
                // return {user: username, id: uid, provider: provider}
            }
        });
    }

    handleSubmit(e)
    {
        e.preventDefault();

        //Poner aqui lo que tiene que hacer el form cuando se envia la informacion
        var email = this.state.username;
        var password = this.state.password;
        var accessThis = this;

        firebase.auth().setPersistence(fb.auth.Auth.Persistence.LOCAL)
            .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                console.log("Ingrese")
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(error);

                var message = '';

                if (error.code == 'auth/wrong-password')
                    message = 'Contraseña incorrecta'
                else if (error.code == "auth/user-not-found")
                    message = 'No se encontró el usuario'
                else if (error.code == "auth/invalid-email")
                    message = 'Correo invalido'
                else if (error.code == 'auth/too-many-requests')
                    message = 'Demasiados intentos. Intentelo de nuevo despues de un rato'
                else
                    message = 'Ocurrio un error, intentelo mas tarde'

                accessThis.setState({
                    showModal: true,
                    modalMsg: message,
                    modalType: 'error'
                })
            });
        });

        // Router.push('/adminMain');

        //Reincia los inputs
        this.setState({
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

    closeModal()
    {
        this.setState({
            showModal: false
        })
    }

    render()
    {
        return(
            <div>
                <Navigation />
                <Layout>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.showModal}
                        autoHideDuration={5000}
                        onClose={this.closeModal}
                    >
                         <SnackbarAlert
                             onClose={this.closeModal}
                             variant={this.state.modalType}
                             message={this.state.modalMsg}
                         />
                    </Snackbar>
                    <div className="row justify-content-center">
                        <h1 className="mt-2 mb-4">
                            Iniciar Sesión
                        </h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4" style={{textAlign: 'center'}}>
                            <div className="row mt-2">
                                <div className="col">
                                    <TextField
                                        name="username"
                                        label="Usuario"
                                        fullWidth
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <TextField
                                        name="password"
                                        type="password"
                                        label="Contraseña"
                                        fullWidth
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <Button variant="dark" onClick={this.handleSubmit}>Iniciar sesión</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default AdminLogin;
