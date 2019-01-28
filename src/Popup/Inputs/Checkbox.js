import React from 'react';
import css from './Checkbox.module.css';

export default class InputCheckbox extends React.Component {
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
        />
        <div className={css.label} onClick={() => {onClick(id)}}/>
      </div>
    );
  }
}

InputCheckbox.defaultProps = {
  id: '',
  onChange: () => {
  },
};
