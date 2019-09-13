import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Router from 'next/router'

const closeSession = () => Router.push('/')

const packagesOnClick = () => Router.push('/adminPackages')

const slOnClick = () => Router.push('/adminSeguros')

const mpOnClick = () => Router.push('/adminPlanesA')

const msOnClick = () => Router.push('/adminPersonalM')

const tOnClick = () => Router.push('/adminTrans')


//
export default function adminMain ()
{
    return (
        <div>
            <Navigation />
            <Layout>
                <div className="row justify-content-center">
                    <h1 className="mt-2 mb-4">
                        Administrador
                    </h1>
                </div>
            </Layout>
            <div className="btn-group-admin" style={{textAlign: 'center'}}>
                <button onClick={packagesOnClick}>Administrar paquetes</button>
                <button onClick={slOnClick}>Administrar seguros laborales</button>
                <button onClick={mpOnClick}>Administrar planes alimenticios</button>
                <button onClick={msOnClick}>Administrar personal médico</button>
                <button onClick={tOnClick}>Administrar transporte</button>
                <button onClick={closeSession}>Cerrar sesión</button>

                <style jsx>{`

                .btn-group-admin button {
                    width: 50%;
                    table-layout: fixed;
                    border-collapse: collapse;
                    position: relative;
                    border:0.1em solid #FFFFFF;
                    font-size: 15px;
                    background-color: black;
                    color: white;
                    padding: 1em 2em;
                    box-sizing: border-box;
                    text-decoration:none;
                    margin-top: 50px;
                    text-align: center;
                    transition: all 0.2s;
                    display: inline;
                    align-items:center;
                }

                .btn-group-admin button:hover {
                    color: #000000;
                    background-color: #42c8f5;
                }
                `}</style>
            </div>
        </div>
    )
}