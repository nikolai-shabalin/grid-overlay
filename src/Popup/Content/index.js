import React from 'react';
import css from "./content.module.css";
import InputNumber from '../Inputs/Number';
import InputColor from '../Inputs/Color';

export default class Index extends React.Component {
  state = {
    color: '#000000'
  };

  handleColorColumnChange = color => {
    this.setState({
      columnColor: color.hex
    })
  };

  render = () => (
    <div className={ css.content }>
      <div className={ css.cell }>
        <label htmlFor="columnNumber" className={ css.label }>Количество колонок</label>
        <InputNumber id={ "columnNumber" }/>
      </div>
      <div className={ css.cell }>
        <label htmlFor="columnWidth" className={ css.label }>Ширина колонки</label>
        <InputNumber id={ "columnWidth" }/>
      </div>
      <div className={ css.cell }>
        <label htmlFor="gutterWidth" className={ css.label }>Ширина гаттеров</label>
        <InputNumber id={ "gutterWidth" }/>
      </div>
      <div className={ css.cell }>
        <label htmlFor="columnColor" className={ css.label }>Цвет колонки</label>
        <InputColor id={ "columnColor" } onChange={this.handleColorColumnChange} />
      </div>
      <div className={ css.cell }>
        <label htmlFor="gutterColor" className={ css.label }>Цвет гаттера</label>
        <InputColor id={"gutterColor"} onChange={this.handleColorColumnChange}/>
      </div>
      <div className={ css.cell }>
        <label htmlFor="opacity" className={ css.label }>Прозрачность</label>
        <InputNumber id={ "opacity" }/>
      </div>

      <div className={ css.line }/>

      <div className={ css.fluid }>
        <label htmlFor="fluid" className={ css.label }>Резиновый</label>
      </div>
      <div className={ css.maxWidth }>
        <label htmlFor="maxWidth" className={ css.label }>Макс. ширина</label>
        <InputNumber id={ "maxWidth" }/>
      </div>
    </div>
  );
}