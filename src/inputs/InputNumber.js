import React, { Component } from 'react';

class InputNumber extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            value: this.props.value || '0',
            step: this.props.step || '1',
            max: this.props.max || null
        };

        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <input
                id={this.state.id}
                type="number"
                value={this.state.value}
                step={this.state.step}
                min="0"
                max={this.state.max}
                onChange={this.onChange}
            />
        )
    }

}

export default InputNumber;
