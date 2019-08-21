// npm install react-bootstrap bootstrap
import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

class Navigation extends Component {
    render() {
        return (<Navbar collapseOnSelect="collapseOnSelect" expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
                <Nav className="ml-md-5">
                    <Nav.Link className="mx-1 mx-md-4" href="#catalog">Catálogo</Nav.Link>
                    <Nav.Link className="mx-1 mx-md-4" href="#galery">Galería</Nav.Link>
                    <Nav.Link className="mx-1 mx-md-4" href="#info">Información</Nav.Link>
                </Nav>
                <Navbar.Brand className="hidden-sm col-xs-1 col-md-1" onCollapse="hide" href="#home">
                    <Image className="hidden-sm" src="../logo512.png" fluid/>
                </Navbar.Brand>
                <Nav className="mr-md-5">
                    <Nav.Link className="mx-1 mr-md-4" href="#proveerdores">Proveedores</Nav.Link>
                    <Nav.Link className="mx-1 mx-md-4" href="#contacto">Contacto</Nav.Link>
                    <Nav.Link className="mx-1 mx-md-4" href="#about">Acerca de</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default Navigation
