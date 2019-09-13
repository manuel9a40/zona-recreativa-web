import Layout from '../components/GeneralLayout';
import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error'

import data from '../data/infoPackage.json';

import Timeline from '../components/Timeline'

const Post = props => {
    if (props.errorCode) {
      return <Error statusCode={props.errorCode} />
    }
    else
        return <div>
        <Navigation />
        <Layout>
            <h1 className="pt-4 text-center mb-4">{props.info.name}</h1>
            <div className="container mb-5 pt-sm-auto ">
                <div className="row">
                    <div className="container col-md-6 col-sm-12 pr-4 mt-md-3 mt-1">
                        <h3 className="row mb-3">
                            Descripción
                        </h3>
                        <p className="mb-4">
                            { props.info.description }
                        </p>
                        <h3 className="row mb-3 mt-sm-auto mt-3 ">
                            Mapa
                        </h3>
                        <img src={require('../resources' + props.info.map)} className="col-12 p-0"/>
                    </div>
                    <div className="col-md-6 col-sm-12 pl-sm-4 pl-0 mt-3">
                        <h3 className="mb-3">
                            Itinerario
                        </h3>
                        <Timeline info={props.info.schedule}/>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
};

Post.getInitialProps = async function(context) {
    const { infoPkg } = context.query;
  //
  // return { infoPkg };

    var errorCode = false;

    for (var i = 0; i < data.length; i++) {
        if (typeof data[i].id !== 'undefined' && data[i].id == infoPkg)
        {
            var result = data[i];
            // console.log(result)
            return { errorCode, info: result };
        }
    }

    errorCode = 204;
    return { errorCode, info: {} }
};

export default Post;
