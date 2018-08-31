import React, { Component } from 'react';

class InputColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            value: this.props.value || '0',
            step: this.props.step || '1',
            max: this.props.max || null
        };
    }

    render() {
        return (
            <input
                id={this.state.id}
                type="color"
                value={this.state.value}
            />
        )
    }

}

export default InputColor;
