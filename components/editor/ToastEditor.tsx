import { useRef, useState, createRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import WriteSuccess from 'pages/writeSuccess';

import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

// TOAST UI Editor Plugins
import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';

const ToastEditor = () => {
  const editorRef = createRef<Editor>();
  const [editorContent, setEditorContent] = useState<string>('');

  const date = new Date();
  const filterDate =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  const initalValue = `\n title:' '\n date:${filterDate}\n`;

  const btnClickListner = () => {
    const eI =
      editorRef && editorRef.current && editorRef.current.getInstance();
    const md = eI?.getMarkdown();
    md && setEditorContent(md);
  };

  return (
    <>
      <Editor
        initialValue={initalValue}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        plugins={[
          chart,
          codeSyntaxHighlight,
          colorSyntax,
          tableMergedCell,
          uml,
        ]}
        ref={editorRef}
      />
      {editorContent ? (
        <WriteSuccess editorContent={editorContent} />
      ) : (
        <button onClick={btnClickListner}>저장</button>
      )}
    </>
  );
};

export default ToastEditor;
