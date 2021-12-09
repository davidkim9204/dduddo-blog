import { useRef, useState, createRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

// TOAST UI Editor Plugins
import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';

const ToastEditor = () => {
  const editorRef = createRef<Editor>();

  const btnClickListner = () => {
    console.log(editorRef);
    const eI =
      editorRef && editorRef.current && editorRef.current.getInstance();
    console.log(eI);
    const md = eI?.getMarkdown();
    console.log(md);
    const hm = eI?.getHtml();
    console.log(hm);
  };

  return (
    <>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        // plugins={[chart, codeSyntaxHighlight, colorSyntax, tableMergedCell, uml]}
        ref={editorRef}
      />
      <button onClick={btnClickListner}>콘솔에 찍히냐</button>
    </>
  );
};

export default ToastEditor;
