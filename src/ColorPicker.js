import React, {Component} from 'react';
import { ChromePicker } from 'react-color';

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false,
        };
    }

    handleClick = () => {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

    render() {
        const div = {
            width: 24,
            height: 25,
            boxShadow: `0 5px 10px rgba(${hexToRgb(this.props.color)}, 0.2)`,
            backgroundColor: this.props.color,
            borderRadius: '50%',
            border: 'none',
            outline: 'none'
        };

        const popover = {
            position: 'absolute',
            zIndex: '2',
        };

        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        };

        return (
            <div>
                <button style={div} onClick={this.handleClick} />

                {this.state.displayColorPicker ?
                    <div style={popover}>
                        <div style={cover} onClick={this.handleClose}/>
                        <ChromePicker
                            color={this.props.color}
                            onChange={this.props.onChange}
                        />
                    </div> :
                    null}
            </div>
        )
    }
}
