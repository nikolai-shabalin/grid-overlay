import React from 'react';
import css from './style.module.css';
import Content from './Content';

export default class Popup extends React.Component {
  state = {
    isClose: false,
    isMinimize: false,

    columnNumber: 12,
    columnWidth: 60,
    columnColor: '#FF00E9',

    gutterWidth: 20,
    gutterColor: '#663399',

    opacity: 0.3,

    fluid: false,
    maxWidth: 0,
  };

  handleChange = event => {
    this.setState({
      [event.target.id] : event.target.value
    });
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
    const settings = {...this.state, onChange: this.handleChange};

    return isClose ? null : (
      <div className={css.Popup}>
        <button className={css.minimize} onClick={this.handleMinimize}>-</button>
        <button className={css.close} onClick={this.handleClose}>✕</button>

        {isMinimize ? null : <Content settings={settings} />}
      </div>
    )
  }
}
