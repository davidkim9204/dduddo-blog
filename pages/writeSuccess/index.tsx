import { GetStaticProps } from 'next';
import { writePostData } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  // store에서 받은 값 인자로 넘겨주기.
  const postData = await writePostData(`---
title: 'Jamsil matzip'
date: '2020-01-02'
---
`);
  return {
    props: {
      t: 't',
    },
  };
};

export default function WriteSuccess(props: any) {
  console.log(props);
  return <div>글 작성 성공!!</div>;
}
