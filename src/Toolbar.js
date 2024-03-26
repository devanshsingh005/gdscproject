// Toolbar.js
import React from 'react';

function Toolbar({ onButtonClick }) {
  return (
    <div className="toolbar">
      <button onClick={() => onButtonClick('heading')}>Heading</button>
      <button onClick={() => onButtonClick('bold')}>Bold</button>
      <button onClick={() => onButtonClick('italic')}>Italic</button>
      <button onClick={() => onButtonClick('link')}>Link</button>
      <button onClick={() => onButtonClick('image')}>Image</button>
      <button onClick={() => onButtonClick('code')}>Code Block</button>
    </div>
  );
}

export default Toolbar;