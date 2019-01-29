import React from 'react';
import Column from './Column';
import {isGutterShow} from '../utils';
import css from './Grid.module.css';

export default class Grid extends React.Component {

  getMaxWidth() {
    const {columnNumber, columnWidth, gutterWidth, fluid, maxWidth} = this.props;

    if (fluid || parseInt(columnNumber, 10) === 0) {
      return parseInt(maxWidth, 10) === 0 ? null : `${maxWidth}px`;
    } else {
      return `${(parseInt(columnWidth, 10) + parseInt(gutterWidth, 10)) * parseInt(columnNumber, 10)}px`;
    }
  }

  getStyle() {
    const {gutterWidth, gutterColor, verticalRhythm, verticalRhythmNumber} = this.props;

    return {
      maxWidth: this.getMaxWidth(),
      ...(!isGutterShow(gutterWidth) && {boxShadow: `-1px 0 0 ${gutterColor}`}),
      ...(verticalRhythm && this.createVerticalRhythm(gutterColor, verticalRhythmNumber))
    }
  }

  getInfinityColumns() {
    const {columnWidth, gutterWidth} = this.props;
    return Math.ceil(window.outerWidth / ((parseInt(columnWidth, 10) + parseInt(gutterWidth, 10))));
  }

  generateColumns() {
    const {columnNumber} = this.props;
    const columns = [];
    const number = parseInt(columnNumber) === 0 ? this.getInfinityColumns() : columnNumber;

    for (let i = 1; i <= number; i++) {
      columns.push(this.createColumns(i));
    }

    return columns;
  }

  createVerticalRhythm(color, rhythm) {
    const number = parseInt(rhythm, 10);

    return ({
      background: `repeating-linear-gradient( 
        180deg,
        rgba(0,0,0,0),
        rgba(0,0,0,0) ${number - 1}px,
        ${color} ${number - 1}px,
        ${color} ${number}px`
    })
  }

  createColumns(i) {
    const settings = {...this.props, number: i};

    return <Column key={i} number={i} {...settings} />;
  }

  createGrid = () => <div className={css.Grid} style={this.getStyle()}>{this.generateColumns()}</div>;

  render = () => this.createGrid();
}
