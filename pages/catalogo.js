import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Package from './components/Package';

function multPrint ()
{
    var cards = ["card1", "card2", "Card 3", "Card 4", "Card 5"];
    return cards.map(card => (
        <Package key={card} title={card} msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus libero. Integer nibh ante, semper non lacus id, bibendum laoreet enim. Nulla libero ante, vestibulum non erat in, facilisis volutpat ligula." />
    ));
}

export default function catalogo ()
{
    return (
        <div>
            <Navigation />
            <Layout>
                <div className="row justify-content-center">
                    <h1 className="mt-2 mb-4">
                        Catálogo
                    </h1>
                </div>
                {multPrint()}
            </Layout>
        </div>
    )
}
