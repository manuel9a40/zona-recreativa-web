import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Link from 'next/link';
import Router from 'next/router'
import '../style/fullPage.css'

class AdminNavigation extends Component {

    constructor ()
    {
        super();

        //Se necesita hacer bind a todas la funciones que se usen dentro de la clase.
        this.endSession = this.endSession.bind(this);
    }

    endSession()
    {
        Router.push('/');
    }

    render() {
        return (<Navbar className="sticky-top " collapseOnSelect="collapseOnSelect" expand="md" style={{background: "#f5616f"}} /* bg="light" variant="light"*/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav">
                {/*

                Logotipo que va en el centro

                 */
                }
                <Navbar.Brand className="d-none d-md-block col-xs-1 col-md-1 ml-5">
                    <Link href="/adminMain">
                        <Image className="d-none d-md-block " src="https://firebasestorage.googleapis.com/v0/b/zona-recreativa-cr.appspot.com/o/res%2Flogo-1.png?alt=media&token=75578cc4-3f13-4a93-88ea-e84c6a2b8216"  style={{cursor:'pointer', height: "40px" }} fluid/>
                    </Link>
                </Navbar.Brand>
                {/*

                Primera seccion de la barra de navegacion. Incluye Catalogo, Galeria e Informacion

                 */
                }
                <Nav className="pl-xl-5 pl-lg-4 pl-md-2 pl-sm-3 pl-4 col-xs-2">
                    <Link href="/adminPackages">
                        <a className="nav-link px-xl-3 px-lg-2 px-sm-2 mx-md-2 text-light font-weight-bold">
                            Administrar paquetes
                        </a>
                    </Link>
                    <Link href="/adminSeguros">
                        <a className="nav-link px-xl-3 px-lg-2 px-sm-2 mx-md-2 text-light font-weight-bold">
                            Administrar seguros laborales
                        </a>
                    </Link>
                    <Link href="/adminPlanesA">
                        <a className="nav-link px-xl-3 px-lg-2 px-sm-2 mx-md-2 text-light font-weight-bold">
                            Administrar planes alimenticios
                        </a>
                    </Link>
                    <Link href="/adminPersonalM">
                        <a className="nav-link px-xl-3 px-lg-2 px-md-2 mx-sm-2 text-light font-weight-bold">
                            Administrar personal médico
                        </a>
                    </Link>
                    <Link href="/adminTran">
                        <a className="nav-link px-xl-3 px-lg-2 px-md-2 mx-sm-2 text-light font-weight-bold">
                            Administrar transporte
                        </a>
                    </Link>
                    <Link>
                        <Nav.Link onClick={this.endSession} className="nav-link px-xl-3 px-lg-2 px-md-2 mx-sm-2 text-light font-weight-bold">
                            Cerrar sesión
                        </Nav.Link>
                    </Link>
                </Nav>
        </Navbar.Collapse>


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
    </Navbar>);
    }
}

export default AdminNavigation;
