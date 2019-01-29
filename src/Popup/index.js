import React from 'react';
import css from './style.module.css';
import Content from './Content';
import Settings from './Settings';
import {settings} from './Icons';

export default class Popup extends React.Component {
  state = {
    isMinimize: false,
  };

  handleMinimize = () => this.setState(({isMinimize}) => ({isMinimize: !isMinimize}));

  render() {
    const {isMinimize} = this.state;
    const {isShowSettings, language, onChangeLanguage, onClose} = this.props;

    return (
      <div className={css.Popup}>
        <button className={css.minimize} onClick={this.handleMinimize} title="Свернуть">-</button>
        <button className={css.close} onClick={onClose} title="Закрыть">✕</button>
        <button className={css.settings} onClick={onChangeLanguage} title="Настройка">
          {settings()}
        </button>

        {!(isMinimize || isShowSettings) && <Content {...this.props}/>}

        {isShowSettings && <Settings language={language} onChangeLanguage={onChangeLanguage}/>}
      </div>
    )
  }
}
