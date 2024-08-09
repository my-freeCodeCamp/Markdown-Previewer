import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import './App.css';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="main">
      <h1 className="title">Markdown Previewer</h1>
      <div className="div">
        <h3 className="subtitle">Editor</h3>
        <textarea
          id="editor"
          value={markdown}
          rows={20}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
      <div className="div" style={{ marginTop: '3rem' }}>
        <h3 className="subtitle">Previewer</h3>
        <div id="preview">
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
