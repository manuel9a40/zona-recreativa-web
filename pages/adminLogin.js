import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import { InputField } from './components/Fields/InputField';
import Router from 'next/router'
import { Formik, Field } from 'formik';

function login(data) { 
    if(data.username === "admin" && data.password === "admin") {
        Router.push('/adminMain')
    } else {
        alert("Credenciales inválidos")
    }
}

export default function adminPackages ()
{       return(
        <div>
            <Navigation />
            <Layout>
                <div className="row justify-content-center">
                    <h1 className="mt-2 mb-4">
                        Iniciar Sesión
                    </h1>
                </div>
            </Layout>
            <div className="login-admin-group" style={{textAlign: 'center'}}>
                <Formik  onSubmit={(data)=>{login(data)}}
                    initialValues = {{
                        username: "",
                        password: ""
                    }}>
                        {({handleSubmit}) =>  
                        <form onSubmit={handleSubmit}>
                            <Field name="username" placeholder="Usuario" component={InputField}/>
                            <Field name="password" type="password" placeholder="Contraseña" component={InputField}/>
                            <div className="form-buttns" style={{textAlign: 'center'}}>
                                <button type="submit">Iniciar sesión</button>
                            </div>
                        </form>  }
    
                </Formik>

                <style jsx>{`

                .login-admin-group button {
                    position: relative;
                    border:0.1em solid #42c8f5;
                    font-size: 15px;
                    background-color: black;
                    color: white;
                    padding: 1em 2em;
                    box-sizing: border-box;
                    text-decoration:none;
                    margin-top: 25px;
                    text-align: center;
                    transition: all 0.2s;
                }

                .login-admin-group button:hover {
                    color: #000000;
                    background-color: #42c8f5;
                }
                `}</style>
            </div>
        </div>
    )
}