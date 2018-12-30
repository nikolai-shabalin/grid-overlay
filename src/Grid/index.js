import React from 'react';
import Column from './Column';
import Gutter from './Gutter';
import {isGutterExist} from '../utils';
import css from './Grid.module.css';

export default class Grid extends React.Component {

  getWidth() {
    const {columnNumber, columnWidth, gutterWidth} = this.props.settings;

    if (this.props.settings.fluid) {
      return null;
    } else {
      return `${(parseInt(columnWidth, 10) + parseInt(gutterWidth, 10)) * parseInt(columnNumber, 10)}px`;
    }    
  }

  getStyle() {
    const {gutterWidth, gutterColor} = this.props.settings;

    return {
      width: this.getWidth,
      ...(isGutterExist(gutterWidth) && {boxShadow: `-1px 0 0 ${gutterColor}`})
    }
  }

  generateColumns() {
    const {columnNumber} = this.props.settings;
    const columns = [];

    for(let i=1; i<=columnNumber; i++) {
      columns.push(this.createColumns(i));
    }

    return columns;
  }

  createColumns(i) {
    const {gutterWidth} = this.props.settings;


    console.log(gutterWidth)
    return isGutterExist(gutterWidth) ? (
      <Column key={i} number={i} settings={{...this.props.settings, number: i}} />
    ) :
      <React.Fragment key={i}>
        <Gutter settings={this.props.settings} />
        <Column number={i} settings={{...this.props.settings, number: i}} />
        <Gutter settings={this.props.settings} />
      </React.Fragment> 
  }

  createGrid = () => <div className={css.Grid} style={this.getStyle()}>{this.generateColumns()}</div>;

  render = () => this.createGrid();
}
