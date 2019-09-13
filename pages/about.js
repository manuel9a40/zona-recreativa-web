import Navigation from './components/Navigation'
import Layout from './components/GeneralLayout'

export default function About() {
  return (
    <div>
        <Navigation />
        <Layout>
                <h1 className="text-center mt-4">Acerca de</h1>

                <div className="mx-auto mt-5 col-8">
                    <h3 className=""> Misión </h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis quis erat venenatis molestie. Nunc fermentum nibh lacinia luctus rutrum. Sed in lacus pretium, vestibulum est sit amet, pulvinar odio. Nullam ornare orci nec neque iaculis, sed tristique magna blandit. Quisque vel turpis nec risus condimentum semper. In convallis fermentum massa, vel auctor sem sollicitudin quis. Maecenas augue lacus, feugiat sed scelerisque in, tempor eu dui. Cras dictum suscipit dui ut pretium. </p>
                </div>

                <div className="mx-auto mt-5 col-8">
                    <h3 className=""> Visión </h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis quis erat venenatis molestie. Nunc fermentum nibh lacinia luctus rutrum. Sed in lacus pretium, vestibulum est sit amet, pulvinar odio. Nullam ornare orci nec neque iaculis, sed tristique magna blandit. Quisque vel turpis nec risus condimentum semper. In convallis fermentum massa, vel auctor sem sollicitudin quis. Maecenas augue lacus, feugiat sed scelerisque in, tempor eu dui. Cras dictum suscipit dui ut pretium. </p>
                </div>

                <div className="mx-auto mt-5 pb-5 col-8">
                    <h3 className=""> Historia </h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis quis erat venenatis molestie. Nunc fermentum nibh lacinia luctus rutrum. Sed in lacus pretium, vestibulum est sit amet, pulvinar odio. Nullam ornare orci nec neque iaculis, sed tristique magna blandit. Quisque vel turpis nec risus condimentum semper. In convallis fermentum massa, vel auctor sem sollicitudin quis. Maecenas augue lacus, feugiat sed scelerisque in, tempor eu dui. Cras dictum suscipit dui ut pretium. </p>
                </div>

                <div className="my-5">
                    <p/>
                </div>
        </Layout>
    </div>
  );
}
