import Layout from './components/MyLayout';
import Navigation from './components/Navigation';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <div>
        <Navigation />
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    </div>
  );
}
