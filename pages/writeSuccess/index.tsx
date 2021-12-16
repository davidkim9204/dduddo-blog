import { write } from 'fs';
import { GetStaticProps } from 'next';
import { writePostData } from '../../lib/posts';
import fs from 'fs';

export interface editorContents {
  editorContent: string | undefined;
}

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

export default function WriteSuccess(props: editorContents) {
  const content = props.editorContent ? props.editorContent : '';
  // fs.writeFile(`posts/'test'-post.md`, content, (err) => {
  //   if (err === null) {
  //     return console.log('success');
  //   } else {
  //     return console.log('fail');
  //   }
  // });
  return <div>글 작성 성공!!</div>;
}
