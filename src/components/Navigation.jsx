// npm install react-bootstrap bootstrap
import React, {Component} from 'react';
import logoBrand from '../logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (<Navbar className="shadow" collapseOnSelect="collapseOnSelect" expand="md" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
                {/*

                Primera seccion de la barra de navegacion. Incluye Catalogo, Galeria e Informacion

                 */}
                <Nav className="pl-md-5 pl-sm-0 col-xs-2">
                    <NavLink className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2" to="/pages/catalog">Catálogo </NavLink>
                    <NavLink className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2" to="/">Galería</NavLink>
                    <NavLink className="nav-link px-lg-4 px-xl-4 pl-sm-2 mx-md-2" to="#info">Información</NavLink>
                </Nav>
                {/*

                Logotipo que va en el centro

                 */}
                <Navbar.Brand className="d-none d-md-block col-xs-1 col-md-1" to="#home">
                    <Image className="d-none d-md-block" src={logoBrand} fluid/>
                </Navbar.Brand>
                {/*

                Segunda seccion de la barra de navegacion. Incluye Proveedores, Contacto y Acerca de

                 */}
                <Nav className="pr-md-5 pr-sm-0 col-xs-2">
                    <NavLink className="nav-link pr-lg-4 pr-xl-4 pr-md-2 mx-md-2 mx-sm-1" to="#proveerdores">Proveedores</NavLink>
                    <NavLink className="nav-link px-lg-4 px-xl-4 px-md-2 mx-md-2 mx-sm-1" to="#contacto">Contacto</NavLink>
                    <NavLink className="nav-link px-lg-4 px-xl-4 px-md-2 mx-md-2 mx-sm-1" to="#about">Acerca de</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default Navigation
