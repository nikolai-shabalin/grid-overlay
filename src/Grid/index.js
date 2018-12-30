import React from 'react';
import Column from './Column';

export default class Grid extends React.Component {
  createColumns = ({columnColor, columnNumber, opacity, columnWidth}) => {
    const columns = [];

    for(let i=1; i<=columnNumber; i++) {
      columns.push(<Column key={i} color={columnColor} number={i} opacity={opacity} columnWidth={columnWidth} />);
    }

    return <React.Fragment>{columns}</React.Fragment>;
  };

  render = () => this.createColumns(this.props.settings);
}
