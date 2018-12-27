import React from 'react';
import css from './Number.module.css'

export default class InputNumber extends React.Component {
  render() {
    const {id, value, step, max, onChange} = this.props;

    return (
      <input
        id={ id }
        type="number"
        value={ value }
        step={ step }
        min="0"
        max={ max }
        onChange={ onChange }
        onWheel={ onChange }
        className={css.Number}
      />
    )
  }
}

InputNumber.defaultProps = {
  id: '',
  value: 0,
  step: 1,
  max: null,
  onChange: () => {},
};
