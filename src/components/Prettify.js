import React from 'react';

class Prettify extends React.Component {
    render() {
        let jsonParsed = JSON.stringify(JSON.parse(this.props.json), undefined, 4);
        alert(jsonParsed);

        return (
            <div>
                {jsonParsed}
            </div>
        )
    }
}

export default Prettify;