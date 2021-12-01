import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function About() {
  return (
    <Layout home={false}>
      <Head>
        <title>About Us</title>
      </Head>
      소개소개내용내용
    </Layout>
  );
}
