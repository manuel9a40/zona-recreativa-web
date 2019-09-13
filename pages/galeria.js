import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Album from './components/Album';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

import data from './data/viajes.json';


function multPrint ()
{
    var cards = ["viaje1", "viaje2", "viaje3", "viaje4", "viaje5"];
    return data.map(item => (
        <div key={item.id} className="card mb-3 col-lg-3 col-12 mx-2" >
            <div className="card-body text-center p-3">
                <h5 className="card-title">
                    {item.name}
                </h5>
                <p className="card-text">
                    {item.date}
                </p>
                <Link href="/pAlbum/[album]" as={`/pAlbum/${item.id}`}>
                    <Button className="btn-sm mb-3" variant="dark">
                        Ver más
                    </Button>
                </Link>
            </div>
        </div>
    ));
}

export default function galeria ()
{
    return (
        <div>
            <Navigation />
            <Layout>
                <div className="row justify-content-center">
                    <h1 className="mt-2 mb-4">
                        Galería
                    </h1>
                </div>
                <div className="row col-9 mx-auto">
                    {multPrint()}
                </div>
            </Layout>
        </div>
    )
}
