import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Router from 'next/router'

const closeSession = () => Router.push('/Index')


//
export default function adminPackages ()
{


    return (
        <div>
            <Navigation />
            <Layout>
                <div className="row justify-content-center">
                    <h1 className="mt-2 mb-4">
                        Administración paquetes
                    </h1>
                </div>
            </Layout>
            <div className="package-admin-group" style={{textAlign: 'center'}}>
                <form>
                    <input type="text" ref="nombrePaquete" placeholder="Nombre del paquete"/>
                    <input type="text" ref="precioPaquetes" placeholder="Precio del paquete"/>
                </form>
                <input name="nombrePaquete" type="text" placeholder="Nombre del paquete" />


                <button onClick={null}>Crear paquete</button>
                <button onClick={null}>Actualizar paquete</button>
                <button onClick={null}>Eliminar paquete</button>

                <style jsx>{`

                .package-admin-group button {
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

                .package-admin-group button:hover {
                    color: #000000;
                    background-color: #42c8f5;
                }
                `}</style>
            </div>
        </div>
    )
}