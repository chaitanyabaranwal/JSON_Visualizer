import React from 'react';

// Output of prettified JSON
const Prettify = (props) => {
  let jsonParsed = JSON.stringify(JSON.parse(props.json), undefined, 4);

  return (
    <div>
      <pre><code>{jsonParsed}</code></pre>
    </div>
  );
}

export default Prettify;