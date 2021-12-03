import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/Layout';
import PostLink from 'components/layout/PostLink';

interface post {
  title: string;
}

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PostLink id="hi1" title="Hello1" />
      <PostLink id="hi2" title="Hello2" />
      <PostLink id="hi3" title="Hello3" />
      {/* <div>
        <span>카드 형식의 글 내용</span>
      </div> */}
    </Layout>
  );
}

export default Home;
