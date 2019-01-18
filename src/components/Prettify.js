import React from 'react';
import { syntaxHighlight } from '../helpers/json-parse.js';
import parse from 'html-react-parser';

// Output of prettified JSON
const Prettify = (props) => {
  const jsonParsed = parse(syntaxHighlight(JSON.stringify(JSON.parse(props.json), undefined, 4)));

  return (
    <div className='prettify-output'>
      <pre><code>{jsonParsed}</code></pre>
    </div>
  );
}

export default Prettify;