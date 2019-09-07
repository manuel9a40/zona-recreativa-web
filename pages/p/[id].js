import Layout from '../components/GeneralLayout';
import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const Post = props => (
    <div>
        <Navigation />
        <Layout>
            <h1 className="pt-4">{props.id}</h1>
            <p>asfasf</p>
        </Layout>
    </div>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;

  return { id };
};

export default Post;
