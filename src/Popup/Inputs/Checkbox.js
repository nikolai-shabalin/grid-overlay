import React from 'react';
import css from './Checkbox.module.css';

export default class InputCheckbox extends React.Component{
  state = {
    isChecked: false,
  };

  handleClick = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const {id, onChange} = this.props;
    const {isChecked} = this.state;
    return (
      <div className={css.wrapper}>
        <input
          id={id}
          type="checkbox"
          className={css.checkbox}
          onChange={onChange}
          checked={isChecked}
        />
        <div className={css.label} onClick={this.handleClick} />
      </div>
    );
  }
}

InputCheckbox.defaultProps = {
  id: '',
  onChange: () => {},
};
