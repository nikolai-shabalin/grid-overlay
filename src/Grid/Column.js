import React from 'react';
import {hexToRgb, isGutterShow} from '../utils';
import css from './Column.module.css';
import Gutter from "./Gutter";

export default class Column extends React.Component {
  getStyle() {
    const {columnColor, columnWidth, opacity, gutterColor, gutterWidth, fluid} = this.props;

    if (fluid) {
      return {
        backgroundColor: `rgba(${hexToRgb(columnColor)}, ${opacity})`,
        flex: '1 0 auto',
        ...(!isGutterShow(gutterWidth) && {boxShadow: `1px 0 0 ${gutterColor}`})
      }
    } else {
      return {
        backgroundColor: `rgba(${hexToRgb(columnColor)}, ${opacity})`,
        width: `${columnWidth}px`,
        ...(!isGutterShow(gutterWidth) && {boxShadow: `1px 0 0 ${gutterColor}`})
      }
    }
  }

  isShowNumber = () => this.props.columnWidth > 20;

  render() {
    const {number, gutterWidth} = this.props;

    return (
      <React.Fragment>
        {isGutterShow(gutterWidth) && <Gutter {...this.props} />}
        <div style={this.getStyle()} className={css.Column}>
          {this.isShowNumber() && number}
        </div>
        {isGutterShow(gutterWidth) && <Gutter {...this.props} />}
      </React.Fragment>
    );
  }
}
