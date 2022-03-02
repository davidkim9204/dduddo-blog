export interface editorContents {
  editorContent: string | undefined;
}

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
