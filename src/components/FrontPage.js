import React from 'react';

import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Counterizer from './Counterizer';
import {GoogleMap, Marker} from 'react-google-maps';

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

                <GoogleMap containerProps={{
                      style: {
                        height: "500px",
                      },
                    }}
                    defaultZoom={3}
                    defaultCenter={{lat: -25.363882, lng: 131.044922}}>
                </GoogleMap>
            </div>
        );
    },
});
