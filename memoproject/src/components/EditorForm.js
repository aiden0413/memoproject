import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function EditorForm({ 
  match,
  data,
  setMemoContent,
 }) {
  const [state, setState] = useState(data.memolist.find(memo => memo.id === match.params.memoid));

  const [editorState, setEditorState] = useState(state.content);

  const today = new Date();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setState({...state, content: editorState, date: today.toLocaleString()});
  };

  useEffect(() => {
    setMemoContent(state);
  }, [state]);

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value, date: today.toLocaleString()});
  }

  return (
    <div className="m-3"> 
      <input
        className="outline-none"
        name="title"
        placeholder="제목"
        value={state.title}
        onChange={handleChange}
      />
      <div className="border-b border-gray-300 m-3"/>
      <Editor
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }} 
        placeholder="내용을 작성해주세요."
        localization={{
          locale: 'ko',
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default EditorForm;