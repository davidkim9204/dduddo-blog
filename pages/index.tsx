import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/Layout';
import PostLink from 'components/layout/PostLink';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/Home.module.css';

interface allPostsData {
  allPostsData: post[];
}
interface post {
  date: string;
  id: string;
  title: string;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Home({ allPostsData }: allPostsData) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul className={utilStyles.list}>
        <div className={homeStyles.grid}>
          {allPostsData.map((data: post) => (
            <div className={homeStyles.column} key={data.id}>
              <div className={homeStyles.card}>
                <li className={utilStyles.listItem} key={data.id}>
                  <ul>
                    <PostLink id={data.id} title={data.title} />
                    {data.date}
                    <br />
                  </ul>
                </li>
              </div>
            </div>
          ))}
        </div>
      </ul>
      {/* <div>
        <span>카드 형식의 글 내용</span>
      </div> */}
    </Layout>
  );
}

export default Home;
