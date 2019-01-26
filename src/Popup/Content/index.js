import React from 'react';
import css from "./content.module.css";
import InputNumber from '../Inputs/Number';
import InputColor from '../Inputs/Color';
import InputCheckbox from '../Inputs/Checkbox';
import Select from '../Inputs/Select';
import presets from '../../presets';
import dictionary from '../../dictionary';

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
      language,
      onChange,
      onChangeColor
    } = this.props;

    return (
      <div className={css.content}>
        <div className={css.cell}>
          <label htmlFor="columnNumber" className={css.label}>{dictionary[language].columnNumber}</label>
          <InputNumber id={"columnNumber"} value={columnNumber} onChange={onChange}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="columnWidth" className={css.label}>{dictionary[language].columnWidth}</label>
          <InputNumber id={"columnWidth"} value={columnWidth} onChange={onChange} disabled={fluid}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="gutterWidth" className={css.label}>{dictionary[language].gutterWidth}</label>
          <InputNumber id={"gutterWidth"} value={gutterWidth} onChange={onChange} step={2}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="columnColor" className={css.label}>{dictionary[language].columnColor}</label>
          <InputColor id={"columnColor"} color={columnColor} onChangeColor={onChangeColor}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="gutterColor" className={css.label}>{dictionary[language].gutterColor}</label>
          <InputColor id={"gutterColor"} color={gutterColor} onChangeColor={onChangeColor}/>
        </div>
        <div className={css.cell}>
          <label htmlFor="opacity" className={css.label}>{dictionary[language].opacity}</label>
          <InputNumber id={"opacity"} value={opacity} step={0.1} max={1} onChange={onChange}/>
        </div>

        <div className={css.line}/>

        <div className={css.fluid}>
          <InputCheckbox id={"fluid"} onChange={onChange} checked={fluid}/>
          <label htmlFor="fluid" className={css.label}>{dictionary[language].fluid}</label>
        </div>
        <div className={css.maxWidth}>
          <label htmlFor="maxWidth" className={css.label}>{dictionary[language].maxWidth}</label>
          <InputNumber id={"maxWidth"} value={maxWidth} step={10} onChange={onChange}/>
        </div>

        <div className={css.preset}>
          <label htmlFor="presets" className={css.label}>{dictionary[language].presets}</label>
          <Select id={"presets"} onChange={onChange} options={presets}/>
        </div>

        <div className={css.verticalRhythm}>
          <InputCheckbox id={"verticalRhythm"} onChange={onChange} checked={verticalRhythm}/>
          <label htmlFor="verticalRhythm" className={css.label}>{dictionary[language].verticalRhythm}</label>

          {
            verticalRhythm &&
            <InputNumber id={"verticalRhythmNumber"} value={verticalRhythmNumber} step={1} onChange={onChange}/>
          }
        </div>
      </div>
    )
  }
}
