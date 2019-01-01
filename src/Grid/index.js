import React from 'react';
import Column from './Column';
import Gutter from './Gutter';
import {isGutterExist} from '../utils';
import css from './Grid.module.css';

export default class Grid extends React.Component {

  getWidth() {
    const {columnNumber, columnWidth, gutterWidth, fluid, maxWidth} = this.props;

    if (fluid) {
      return maxWidth === 0 ? null : `${maxWidth}px`;
    } else {
      return `${(parseInt(columnWidth, 10) + parseInt(gutterWidth, 10)) * parseInt(columnNumber, 10)}px`;
    }    
  }

  getStyle() {
    const {gutterWidth, gutterColor} = this.props;

    return {
      maxWidth:  this.getWidth(),
      ...(isGutterExist(gutterWidth) && {boxShadow: `-1px 0 0 ${gutterColor}`})
    }
  }

  generateColumns() {
    const {columnNumber} = this.props;
    const columns = [];

    for(let i=1; i<=columnNumber; i++) {
      columns.push(this.createColumns(i));
    }

    return columns;
  }

  createColumns(i) {
    const {gutterWidth} = this.props;
    const settings = {...this.props, number: i}

    return isGutterExist(gutterWidth) ? (
      <Column key={i} number={i} {...settings} />
    ) :
      <React.Fragment key={i}>
        <Gutter {...this.props} />
        <Column number={i} {...settings} />
        <Gutter {...this.props} />
      </React.Fragment> 
  }

  createGrid = () => <div className={css.Grid} style={this.getStyle()}>{this.generateColumns()}</div>;

  render = () => this.createGrid();
}
