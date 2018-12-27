import React from 'react';
import { ChromePicker } from 'react-color';
import css from './Color.module.css';

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${ parseInt(result[1], 16) }, ${ parseInt(result[2], 16) }, ${ parseInt(result[3], 16) }` : null;
}

export default class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker})
  };

  handleClose = () => {
    this.setState({displayColorPicker: false})
  };

  render() {
    const {displayColorPicker} = this.state;

    const button = {
      width: '24px',
      height: '25px',
      boxShadow: `0 5px 10px rgba(${ hexToRgb(this.props.color) }, 0.2)`,
      backgroundColor: this.props.color,
      borderRadius: '50%',
      border: 'none',
      outline: 'none'
    };
    return (
      <div className="colorPicker">
        <button style={ button } onClick={ this.handleClick }/>

        { displayColorPicker ?
          <div style={ css.popover }>
            <div style={ css.cover } onClick={ this.handleClose }/>
            <ChromePicker
              color={ this.props.color }
              onChange={ this.props.onChange }
            />
          </div> :
          null
        }
      </div>
    )
  }
}