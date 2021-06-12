import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw } from 'draft-js';

function EditorForm({ 
  match,
  data,
  setMemoContent,
 }) {
  const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
  const [contentState, setContentState] = useState(convertFromRaw(content));
  
  const today = new Date();

  const [state, setState] = useState(data.memolist.find(memo => memo.id === match.params.memoid));

  useEffect(() => {
    setMemoContent(state);
  }, [state]);

  const onContentStateChange = (contentState) => {
    setContentState(contentState);
    setState({...state, content: contentState.blocks[0].text, date: today.toLocaleString()});
  }

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
        onContentStateChange={onContentStateChange}
      />
    </div>
  );
};

export default EditorForm;