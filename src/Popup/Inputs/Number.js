import React from 'react';
import css from './Number.module.css'

const InputNumber = ({id, value, step, max, onChange, onWheel}) =>
  <input
    id={ id }
    type="number"
    value={ value }
    step={ step }
    min="0"
    max={ max }
    onChange={ onChange }
    onWheel={ onWheel }
    className={css.Number}
  />;

export default InputNumber;