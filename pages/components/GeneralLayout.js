import Container from 'react-bootstrap/Container'

// Layout general de las pantallas
const Layout = props => (
    <div style={{background: "#00aeef99"}}>
        <Container className="justify-content-center pt-4 col-8 col-md-10 col-lg-11 col-xl-9 bg-light" >
        {props.children}
        </Container>
    </div>
);

export default Layout;
