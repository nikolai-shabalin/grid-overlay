import React from 'react';
import css from "./content.module.css";
import InputNumber from '../Inputs/Number';
import InputColor from '../Inputs/Color';
import InputCheckbox from '../Inputs/Checkbox';
import Select from '../Inputs/Select';
import presets from '../../presets';

export default class Content extends React.Component {
  render() {
    const {
      columnNumber,
      columnWidth,
      gutterWidth,
      opacity,
      columnColor,
      gutterColor,
      maxWidth,
      fluid,
      verticalRhythm,
      verticalRhythmNumber,
      onChange,
      onChangeColor} = this.props;

    return (
      <div className={css.content}>
        <div className={css.cell}>
          <label htmlFor="columnNumber" className={css.label}>Количество колонок</label>
          <InputNumber id={"columnNumber"} value={columnNumber} onChange={onChange}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="columnWidth" className={css.label}>Ширина колонки</label>
          <InputNumber id={"columnWidth"} value={columnWidth} onChange={onChange} disabled={this.props.fluid}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="gutterWidth" className={css.label}>Ширина гаттеров</label>
          <InputNumber id={"gutterWidth"} value={gutterWidth} onChange={onChange} step={2}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="columnColor" className={css.label}>Цвет колонки</label>
          <InputColor id={"columnColor"} color={columnColor} onChangeColor={onChangeColor}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="gutterColor" className={css.label}>Цвет гаттера</label>
          <InputColor id={"gutterColor"} color={gutterColor} onChangeColor={onChangeColor}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="opacity" className={css.label}>Прозрачность</label>
          <InputNumber id={"opacity"} value={opacity} step={0.1} max={1} onChange={onChange}/>
        </div>

        <div className={css.line}/>

        <div className={css.fluid}>
          <InputCheckbox id={"fluid"} onChange={onChange} checked={fluid} />
          <label htmlFor="fluid" className={css.label}>Резиновый</label>
        </div>
        <div className={css.maxWidth}>
          <label htmlFor="maxWidth" className={css.label}>Макс. ширина</label>
          <InputNumber id={"maxWidth"} value={maxWidth} step={10} onChange={onChange}/>
        </div>

        <div className={css.preset}>
          <label htmlFor="presets" className={css.label}>Пресеты</label>
          <Select id={"presets"} onChange={onChange} options={presets} />
        </div>

        <div className={css.verticalRhythm}>
          <InputCheckbox id={"verticalRhythm"} onChange={onChange} checked={verticalRhythm} />
          <label htmlFor="verticalRhythm" className={css.label}>Верт.ритм</label> 
          <InputNumber id={"verticalRhythmNumber"} value={verticalRhythmNumber} step={1} onChange={onChange}/>
        </div>
      </div>
    )
  }
}
