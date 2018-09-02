import React, { Component } from 'react';

class InputNumber extends Component {
    render() {
        return (
            <input
                id={this.props.id}
                type="checkbox"
                onChange={this.props.onChange}
            />
        )
    }

}

export default InputNumber;
