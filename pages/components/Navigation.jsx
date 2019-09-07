// npm install react-bootstrap bootstrap


import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Link from 'next/link';

class Navigation extends Component {
    render() {
        return (<Navbar className="shadow sticky-top " collapseOnSelect="collapseOnSelect" expand="md" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
                {/*

                Primera seccion de la barra de navegacion. Incluye Catalogo, Galeria e Informacion

                 */
                }
                <Nav className="pl-xl-5 pl-lg-4 pl-md-2 pl-sm-3 pl-4 col-xs-2">
                    <Link href="">
                        <a className="nav-link px-lg-4 px-xl-4 px-sm-0 mx-md-2 d-sm-none">
                            Inicio
                        </a>
                    </Link>
                    <Link href="/catalogo">
                        <a className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2">
                            Catálogo
                        </a>
                    </Link>
                    <Link href="">
                        <a className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2">
                            Galería
                        </a>
                    </Link>
                    <Link href="">
                        <a className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2">
                            Información
                        </a>
                    </Link>
                </Nav>
                {/*

                Logotipo que va en el centro

                 */
                }
                <Navbar.Brand className="d-none d-md-block col-xs-1 col-md-1">
                    <Link href="/">
                        <Image className="d-none d-md-block" src={require('../resources/logo.png')} fluid/>
                    </Link>
                </Navbar.Brand>
                {/*

                Segunda seccion de la barra de navegacion. Incluye Proveedores, Contacto y Acerca de

                 */
                }
                <Nav className="pr-xl-5 pr-lg-4 pr-md-2 pr-sm-3 pr-2">
                    <Link href="">
                        <a className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2">
                            Proveedores
                        </a>
                    </Link>
                    <Link href="">
                        <a className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2">
                            Contacto
                        </a>
                    </Link>
                    <Link href="" href="/about">
                        <a className="nav-link px-lg-4 px-xl-4 px-sm-2 mx-md-2">
                            Acerca de
                        </a>
                    </Link>
                </Nav>
        </Navbar.Collapse>


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
    </Navbar>);
    }
}

export default Navigation
