import React from 'react';
import css from './Settings.module.css';
import dictionary from '../../dictionary';
import contentCSS from "../../Popup/Content/content.module.css";
import Select from '../../Popup/Inputs/Select';

export default class Settings extends React.Component {
  render() {
    const {language, onChangeLanguage} = this.props;

    return (
      <div className={ css.Settings }>
        <label htmlFor="language" className={ contentCSS.label }>{ dictionary[language].changeLanguage }</label>
        <Select id={ "language" } onChange={ onChangeLanguage } options={ dictionary } />
      </div>
    )
  }
}
