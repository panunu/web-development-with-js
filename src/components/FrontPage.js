import React from 'react';

import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Counterizer from './Counterizer';

export default React.createClass({
    render: function() {
        const names = this.props.names;

        return (
            <div>
                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer {...this.props}/>

                <Counter count={this.props.count}/>
            </div>
        );
    },
});