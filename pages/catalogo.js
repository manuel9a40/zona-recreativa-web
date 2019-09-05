import Navigation from './components/Navigation'
import CardElement from './components/CardElement'
import Layout from './components/GeneralLayout'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function multPrint (times)
{
    var cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
    return cards.map(card => (
        <CardElement title={card} />
    ));
}

export default function catalogo ()
{
    return (
        <div>
            <Navigation />
            <Layout>
                <div className="row col-10 mx-5">
                    {cards}

                </div>
            </Layout>
        </div>
    )
}
