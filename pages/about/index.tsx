import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import utilStyles from '../../styles/utils.module.css';

export default function About() {
  return (
    <Layout home={false}>
      <Head>
        <title>About Us</title>
      </Head>
      소개소개내용내용
      <div className={utilStyles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
