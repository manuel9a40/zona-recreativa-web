import Navigation from './components/Navigation'
import CardElement from './components/CardElement'
import Layout from './components/GeneralLayout'

function multPrint ()
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
                <div className="row col-12">
                    {multPrint()}

                </div>
            </Layout>
        </div>
    )
}
