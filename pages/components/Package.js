import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import '../../timeline-style.css'


function sayHello(msg) {
    console.log(msg);
  }

function cutMsg(msg) {
    if (typeof msg !== 'undefined')
        return (msg.length>6)? msg.substring(0, 512)+' [...]':(msg)
    else {
        return ""
    }
}

const Package = (props) => (
    <div className="card mb-3 col-lg-8 col-12 mx-auto" >
        <div className="row no-gutters">
            <div className="m-2 my-md-auto mx-auto mb-3 col-md-4 col-8">
                <Link href="/p/[infoPkg]" as={`/p/${props.title}`}>
                    <img src={require('../resources/logo.png')} className="card-img p-2 border border-secondary" alt="..." style={ {cursor:'pointer' }} />
                </Link>
            </div>
            <div className="col-md-8 col-10">
                <div className="card-body p-3">
                    <h5 className="card-title">
                        {props.title}
                    </h5>
                    <p className="card-text">
                        {cutMsg(props.msg)}
                    </p>
                    <Link href="/p/[infoPkg]" as={`/p/${props.title}`}>
                        <Button onClick={() => sayHello(props.title)} className="btn-sm float-right mb-3" variant="dark">
                            Ver más
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Package
