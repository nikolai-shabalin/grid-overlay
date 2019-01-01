import React from 'react';
import css from './style.module.css';
import Content from './Content';

export default class Popup extends React.Component {
  state = {
    isMinimize: false,
  };

  handleMinimize = () => {
    this.setState({
      isMinimize: !this.state.isMinimize,
    })
  };

  render() {
    const { isMinimize } = this.state;
    const {onClose} = this.props;

    return (
      <div className={css.Popup}>
        <button className={css.minimize} onClick={this.handleMinimize}>-</button>
        <button className={css.close} onClick={onClose}>✕</button>

        {isMinimize ? null : <Content {...this.props} />}
      </div>
    )
  }
}
