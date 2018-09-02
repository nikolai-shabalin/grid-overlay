import React, { Component } from 'react';

class InputNumber extends Component {
    render() {
        return (
            <input
                id={this.props.id}
                type="number"
                value={this.props.value}
                step={this.props.step}
                min="0"
                max={this.props.max}
                onChange={this.props.onChange}
                onWheel={this.props.onWheel}
            />
        )
    }

}

export default InputNumber;
