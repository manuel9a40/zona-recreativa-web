import Layout from '../components/GeneralLayout';
import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Timeline from '../components/Timeline'
import Map from '../components/Map'

const Post = props => (
    <div>
        <Navigation />
        <Layout>
            <h1 className="pt-4 text-center mb-4">{props.infoPkg}</h1>
            <div className="container mb-5 pt-sm-auto pt-4">
                <div className="row">
                    <div className="container col-md-6 col-sm-12 pr-4">
                        <h3 className="row mb-3">
                            Descripción
                        </h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu rhoncus libero. Integer nibh ante, semper non lacus id, bibendum laoreet enim. Nulla libero ante, vestibulum non erat in, facilisis volutpat ligula.
                        </p>
                        <h3 className="row mb-3 mt-sm-auto mt-3 ">
                            Mapa
                        </h3>
                        <img src={require('../resources/map.jpg')} className="col-12 p-0"/>
                    </div>
                    <div className="col-md-6 col-sm-12 pl-4">
                        <h3 className="mb-3">
                            Itinerario
                        </h3>
                        <Timeline />
                    </div>
                </div>
            </div>
        </Layout>
    </div>
);

Post.getInitialProps = async function(context) {
  const { infoPkg } = context.query;

  return { infoPkg };
};

export default Post;
