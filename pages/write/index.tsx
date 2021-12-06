import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import utilStyles from '../../styles/utils.module.css';

export default function About() {
  return (
    <Layout home={false}>
      <Head>
        <title>Write blog</title>
      </Head>
      toast ui editor 들어갈 곳
      <div className="save-post">
        <Link href="/post/save">
          <a>저장하기</a>
        </Link>
      </div>
      <div className={utilStyles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
