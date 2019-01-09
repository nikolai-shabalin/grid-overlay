import React from 'react';
import css from './Number.module.css'

export default class InputNumber extends React.Component {
  // handleMouseDown = eventInput => {
  //   this.mx = eventInput.pageX;

  //   document.addEventListener('mousemove', this.handleMouseMove.bind(event, eventInput));
  //   document.addEventListener('mouseup', this.handleMouseUp);
  // }

  // handleMouseMove = (event, eventInput) => {
  //   console.log(event);
  //   console.log(eventInput);
  //   if (event.pageX > this.mx){
  //     console.log("Moved Right");
  //   } else {
  //     console.log("Moved Left")
  //   }
  // }

  // handleMouseUp = () => {
  //   document.removeEventListener('mousemove', this.handleMouseMove);
  // }

  render() {
    const {id, value, step, max, onChange, disabled} = this.props;

    return (
      <input
        id={ id }
        type="number"
        value={ value }
        step={ step }
        min="0"
        max={ max }
        className={ css.Number }
        disabled={ disabled }
        onChange={ onChange }
        onWheel={ onChange }
        // onMouseDown={this.handleMouseDown}
      />
    )
  }
}

InputNumber.defaultProps = {
  id: '',
  value: 0,
  step: 1,
  max: null,
  disabled: false,
  onChange: () => {
  },
};
