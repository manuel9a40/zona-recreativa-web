import Layout from '../components/GeneralLayout';
import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error'

import data from '../data/infoPackage.json';

import Album from '../components/Album'

const album = props => {
    if (props.errorCode) {
      //return <Error statusCode={props.errorCode} />
    }
        return <div>
        <Navigation />
        <Layout>
            <h1 className="pt-4 text-center mb-4">{props.info.name}</h1>
            <div className="container mb-5 pt-sm-auto ">
                <Album />
            </div>
        </Layout>
    </div>
};

album.getInitialProps = async function(context) {
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

export default album;
