import Navigation from './components/Navigation'
import CardElement from './components/CardElement'
import Layout from './components/GeneralLayout'

function multPrint ()
{
    var cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
    return cards.map(card => (
        <CardElement key={card} title={card} msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus libero. Integer nibh ante, semper non lacus id, bibendum laoreet enim. Nulla libero ante, vestibulum non erat in, facilisis volutpat ligula." />
    ));
}

export default function catalogo ()
{
    return (
        <div>
            <Navigation />
            <Layout>
                <div className="row justify-content-center">
                    <h1 className="my-2">Catálogo</h1>
                </div>
                <div className="row justify-content-center">
                    {multPrint()}

                </div>
            </Layout>
        </div>
    )
}
