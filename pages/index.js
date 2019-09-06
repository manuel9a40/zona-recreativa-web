import Layout from './components/GeneralLayout';
import Navigation from './components/Navigation';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const PostLink = ({ post }) => (
    <li key={post.id}>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
            font-family: 'Arial';
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
    </li>
)

const Index = props => (
    <div>
        <Navigation />
        <Layout>
        <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
        </Layout>
    </div>
  );

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
