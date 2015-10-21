import React from 'react';
import api from '../api';

export default React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            name: 'Pekkis',
            names: []
        };
    },

    componentDidMount: function() {
        api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    },

    render: function() {
        const children = React.cloneElement(
            this.props.children,
            {
                count: this.state.count,
                names: this.state.names,
                onIncrementCounter: this.incrementCounter
            }
        );

        return (
            <div>
                <h1>Lusso grande</h1>

                {children}
            </div>
        );
    }
});
