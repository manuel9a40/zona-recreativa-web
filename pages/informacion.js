import Navigation from './components/Navigation'
import Layout from './components/GeneralLayout'

export default function About() {
  return (
    <div>
        <Navigation />
        <Layout>
                <h1 className="text-center mt-4">Información</h1>

                <div className="mx-auto mt-5 col-8">
                    <h3 className=""> Servicios </h3>

                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        <li>Sed et felis quis erat venenatis molestie. </li>
                        <li>Nunc fermentum nibh lacinia luctus rutrum. </li>
                        <li>Sed in lacus pretium, vestibulum est sit amet, pulvinar odio. </li>
                        <li>Nullam ornare orci nec neque iaculis, sed tristique magna blandit. </li>
                        <li>Quisque vel turpis nec risus condimentum semper. </li>
                        <li>In convallis fermentum massa, vel auctor sem sollicitudin quis. </li>
                        <li>Maecenas augue lacus, feugiat sed scelerisque in, tempor eu dui. </li>
                        <li>Cras dictum suscipit dui ut pretium.</li>
                    </ul>
                </div>

                <div className="mx-auto mt-5 col-8">
                    <h3 className=""> Requisitos </h3>

                    <p> Para poder utilizar nuestros servicios es necesario que cumpla ciertos requisitos:</p>

                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        <li>Sed et felis quis erat venenatis molestie. </li>
                        <li>Nunc fermentum nibh lacinia luctus rutrum. </li>
                        <li>Sed in lacus pretium, vestibulum est sit amet, pulvinar odio. </li>
                        <li>Nullam ornare orci nec neque iaculis, sed tristique magna blandit. </li>
                        <li>Quisque vel turpis nec risus condimentum semper. </li>
                    </ul>
                </div>

                <div className="my-5">
                    <p/>
                </div>
        </Layout>
    </div>
  );
}
