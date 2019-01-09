import React from 'react';
import css from './style.module.css';
import Content from './Content';
import Settings from '../Settings';

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
    const {isMinimize} = this.state;
    const {onClose, isShowSettings, onChangeLanguage} = this.props;

    return (
      <div className={ css.Popup }>
        <button className={ css.minimize } onClick={ this.handleMinimize }>-</button>
        <button className={ css.close } onClick={ onClose }>✕</button>
        <button className={ css.settings } onClick={ onChangeLanguage }>
          <img className={ css.settingsIcon } src="/images/settings.svg" alt='Настройка'/>
        </button>

        { isMinimize || isShowSettings ? null : <Content { ...this.props } /> }

        {
          isShowSettings ?
            <Settings { ...this.props } /> :
            null
        }
      </div>
    )
  }
}
