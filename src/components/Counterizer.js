import React from 'react';

export default React.createClass({
    render: function() {
        const { count, onIncrementCounter } = this.props;

        return (
            <div className="tussi">
                {count}

                <button
                    onClick={onIncrementCounter}>
                    MOAR!
                </button>
            </div>
        );
    }
});
