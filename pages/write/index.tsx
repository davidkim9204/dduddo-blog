import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Layout from '../../components/layout/Layout';
import utilStyles from '../../styles/utils.module.css';

const ToastEditor = dynamic(() => import('components/editor/ToastEditor'), {
  ssr: false,
});

export default function Write() {
  return (
    <Layout home={false}>
      <Head>
        <title>Write blog</title>
      </Head>
      <div className="save-post">
        <ToastEditor />
      </div>
      <div className={utilStyles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
