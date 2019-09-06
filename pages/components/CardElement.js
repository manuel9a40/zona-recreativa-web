import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

function sayHello(msg) {
    console.log(msg);
  }

const CardElement = (props) => (
    <Card className="m-3 m-lg-4 m-xl-2 col-xl-3 col-lg-4 col-md-5 col-sm-5 col-10">
        <Link href="/p/[id]" as={`/p/${props.title}`}>
            <Card.Img className="border border-secondary p-3 mt-3" variant="top" src={require('../resources/logo.png')} style={ {cursor:'pointer' }} />
        </Link>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {(props.msg.length>6)? props.msg.substring(0, 128)+' [...]':(props.msg)}
            </Card.Text>
                <Link href="/p/[id]" as={`/p/${props.title}`}>
                    <Button onClick={() => sayHello(props.title)} className="btn-sm float-right" variant="dark">
                        Ver más
                    </Button>
                </Link>
        </Card.Body>
    </Card>
)

export default CardElement
