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
      <ToastEditor />
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
