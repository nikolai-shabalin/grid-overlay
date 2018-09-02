import React, { Component } from 'react';

class InputColor extends Component {
    render() {
        return (
            <input
                id={this.props.id}
                type="color"
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}

export default InputColor;
