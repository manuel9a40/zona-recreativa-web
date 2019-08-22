// npm install react-bootstrap bootstrap
import React, {Component} from 'react';
import logoBrand from '../logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'

class Navigation extends Component {
    render() {
        return (<Navbar className="shadow" collapseOnSelect="collapseOnSelect" expand="md" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
                <Nav className="pl-md-5 pl-sm-0 col-xs-2">
                    <Nav.Link className=" px-lg-4 px-xl-4 px-sm-2 mx-md-2" href="#catalog">Catálogo </Nav.Link>
                    <Nav.Link className=" px-lg-4 px-xl-4 px-sm-2 mx-md-2" href="#galery"> Galería </Nav.Link>
                    <Nav.Link className=" px-lg-4 px-xl-4 pl-sm-2 mx-md-2" href="#info"> Información </Nav.Link>
                </Nav>
                <Navbar.Brand className="d-none d-md-block col-xs-1 col-md-1" onCollapse="hide" href="#home">
                    <Image className="d-none d-md-block" src={logoBrand} fluid/>
                </Navbar.Brand>
                <Nav className="pr-md-5 pr-sm-0 col-xs-2">
                    <Nav.Link className="pr-lg-4 pr-xl-4 pr-md-2 mx-md-2 mx-sm-1" href="#proveerdores">Proveedores</Nav.Link>
                    <Nav.Link className="px-lg-4 px-xl-4 px-md-2 mx-md-2 mx-sm-1" href="#contacto">Contacto</Nav.Link>
                    <Nav.Link className="px-lg-4 px-xl-4 px-md-2 mx-md-2 mx-sm-1" href="#about">Acerca de</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default Navigation
