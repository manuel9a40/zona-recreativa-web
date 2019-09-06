import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function sayHello(msg) {
    alert(msg);
  }

const CardElement = (props) => (
    <Card className="m-3 col-5">
        <Card.Img className="border border-secondary mt-3" variant="top" src={require('../resources/logo.png')} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus libero. Integer nibh ante, semper non lacus id, bibendum laoreet enim. Nulla libero ante, vestibulum non erat in, facilisis volutpat ligula.
            </Card.Text>
            <Button onClick={() => sayHello(props.title)} className="btn-sm float-right" variant="dark">Ver más</Button>
        </Card.Body>
    </Card>
)

export default CardElement
