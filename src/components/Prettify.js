import React from 'react';

// Output of prettified JSON
class Prettify extends React.Component {
  render() {
    let jsonParsed = JSON.stringify(JSON.parse(this.props.json), undefined, 4);

    return (
      <div>
        {jsonParsed}
      </div>
    )
  }
}

export default Prettify;