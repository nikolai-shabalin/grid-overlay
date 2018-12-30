import React from 'react';
import Column from './Column';
import css from './Grid.module.css';

export default class Grid extends React.Component {
  createColumns = () => {
    const {columnNumber, columnWidth, gutterWidth} = this.props.settings;
    const width = `${(parseInt(columnWidth, 10) + parseInt(gutterWidth, 10)) * parseInt(columnNumber, 10)}px`
    const columns = [];

    for(let i=1; i<=columnNumber; i++) {
      columns.push(<Column key={i} number={i} settings={{...this.props.settings, number:i}} />);
    }

    return <div className={css.Grid} style={{width}}>{columns}</div>;
  };

  render = () => this.createColumns();
}
