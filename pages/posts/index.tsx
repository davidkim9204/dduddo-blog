import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import utilStyles from '../../styles/utils.module.css';

export default function Posts() {
  return (
    <Layout home={false}>
      <Head>
        <title>About Us</title>
      </Head>
      글들이 보일 곳
      <div className={utilStyles.backToHome}>
        <Link href="/posts">
          <a>← Back to posts</a>
        </Link>
      </div>
    </Layout>
  );
}
