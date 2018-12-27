import React from 'react';
import css from './style.module.css';
import Content from './Content';

export default class Popup extends React.Component {
  state = {
    isClose: false,
    isMinimize: false,
  };

  handleMinimize = () => {
    this.setState({
      isMinimize: !this.state.isMinimize,
    })
  };

  handleClose = () => {
    this.setState({
      isClose: true,
    });
  };

  render() {
    const { isClose, isMinimize } = this.state;

    return isClose ? null : (
      <div className={css.Popup}>
        <button className={css.minimize} onClick={this.handleMinimize}>-</button>
        <button className={css.close} onClick={this.handleClose}>✕</button>

        {isMinimize ? null : <Content settings={{...this.props.settings}} />}
      </div>
    )
  }
}
