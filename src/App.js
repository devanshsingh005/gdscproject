import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';
import Toolbar from './Toolbar';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = () => {
    var rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  const handleButtonClick = (type) => {
    let newText = markdown;
    switch (type) {
      case 'heading':
        newText += '# ';
        break;
      case 'bold':
        newText += '**bold text**';
        break;
      case 'italic':
        newText += '*italic text*';
        break;
      case 'link':
        newText += '[link text](https://example.com)';
        break;
      case 'image':
        newText += '![alt text](https://example.com/image.jpg)';
        break;
      case 'code':
        newText += '\n// code block\n';
        break;
      default:
        break;
    }
    setMarkdown(newText);
  };


  return (
    <div className="App">
       <Toolbar onButtonClick={handleButtonClick} />
      <textarea id="editor" value={markdown}onChange={handleChange} placeholder="Enter Markdown text"/>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
}

export default App;