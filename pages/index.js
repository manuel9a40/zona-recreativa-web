import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Index = props => (
    <div>
        <Navigation />
        <Layout>
            <img src={require('./resources/logo.png')} className="col-4 mx-auto d-block" alt="..." />
        </Layout>
    </div>
  );

export default Index;
