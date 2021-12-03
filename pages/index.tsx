import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/Layout';
import PostLink from 'components/layout/PostLink';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/Home.module.css';
import { AllPostsData, PostContent } from '../model/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Home({ allPostsData }: AllPostsData) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul className={utilStyles.list}>
        <div className={homeStyles.grid}>
          {allPostsData.map((data: PostContent) => (
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
