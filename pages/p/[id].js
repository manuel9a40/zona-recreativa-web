import Layout from '../components/GeneralLayout';
import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const Post = props => (
    <div>
        <Navigation />
        <Layout>
            <h1 className="pt-4">Viaje A</h1>
        </Layout>
    </div>
);

export default Post;
