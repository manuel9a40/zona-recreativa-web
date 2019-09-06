import Container from 'react-bootstrap/Container'

// Layout general de las pantallas
const Layout = props => (
  <Container className="justify-content-center pt-4 col-9 col-md-10 col-lg-11 col-xl-10">
    {props.children}
    </Container>
);

export default Layout;
