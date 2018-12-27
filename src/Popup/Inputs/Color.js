import React from 'react';
import {ChromePicker} from 'react-color';
import css from './Color.module.css';

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
};

const button = color => ({
  boxShadow: `0 5px 10px rgba(${hexToRgb(color)}, 0.2)`,
  backgroundColor: color,
});

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
    const {id, color, onChangeColor} = this.props;

    return (
      <div className="colorPicker">
        <button style={button(color)} className={css.button} onClick={this.handleClick}/>

        {displayColorPicker ?
          <div className={css.popover}>
            <div className={css.cover} onClick={this.handleClose}/>
            <ChromePicker
              color={color}
              onChange={({hex}) => onChangeColor(id, hex)}
            />
          </div> :
          null
        }
      </div>
    )
  }
}

ColorPicker.defaultProps = {
  color: '#000000',
  onChangeColor: () => {},
};
