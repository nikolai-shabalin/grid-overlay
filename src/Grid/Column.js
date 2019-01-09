import React from 'react';
import { hexToRgb, isGutterExist } from '../utils';
import css from './Column.module.css';

export default class Column extends React.Component {
  getStyle() {
    const {columnColor, columnWidth, opacity, gutterColor, gutterWidth, fluid} = this.props;

    if (fluid) {
      return {
        backgroundColor: `rgba(${ hexToRgb(columnColor) }, ${ opacity })`,
        flex: '1 0 auto',
        ...(isGutterExist(gutterWidth) && {boxShadow: `1px 0 0 ${ gutterColor }`})
      }
    } else {
      return {
        backgroundColor: `rgba(${ hexToRgb(columnColor) }, ${ opacity })`,
        width: `${ columnWidth }px`,
        ...(isGutterExist(gutterWidth) && {boxShadow: `1px 0 0 ${ gutterColor }`})
      }
    }
  }

  render() {
    const {number} = this.props;
    return <div style={ this.getStyle() } className={ css.Column }>{ number }</div>;
  }
}