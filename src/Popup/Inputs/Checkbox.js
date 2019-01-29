import React from 'react';
import css from './Checkbox.module.css';
import {checkmark} from '../Icons';

export default class InputCheckbox extends React.Component {
  handleEnter = event => {
    if (event.key === 'Enter') {
      this.props.onClick(this.props.id);
    }
  };

  render() {
    const {id, onChange, onClick, checked} = this.props;
    return (
      <div className={css.wrapper}>
        <input
          id={id}
          type="checkbox"
          className={css.checkbox}
          onChange={onChange}
          checked={checked}
          onKeyPress={this.handleEnter}
        />
        <div className={css.label} onClick={() => {onClick(id)}}>
          {checked && checkmark()}
        </div>
      </div>
    );
  }
}

InputCheckbox.defaultProps = {
  id: '',
  onChange: () => {
  },
};
