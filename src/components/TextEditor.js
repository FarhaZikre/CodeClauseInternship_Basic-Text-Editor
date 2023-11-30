import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
export default function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  return (
    <>
      <div id="editor-section" style={{ height: '100vh', width: '100%' }}>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onChange={newContent => setContent(newContent)}
      />
      </div>
    </>
  )
}
