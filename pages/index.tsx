import React, { useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/Layout';

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트');

  setTimeout(() => {
    setText('타입스크립트');
  }, 1000);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <span>{text} 적용 완료</span>
        <span>카드 형식의 글 내용</span>
      </div>
    </Layout>
  );
}
