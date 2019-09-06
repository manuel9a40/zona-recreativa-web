import Container from 'react-bootstrap/Container'

// Layout general de las pantallas
const Layout = props => (
  <Container className="justify-content-center col-8">
    {props.children}
    </Container>
);

export default Layout;
