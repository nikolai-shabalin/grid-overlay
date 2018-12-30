import React from 'react';
import {hexToRgb, isGutterExist} from '../utils';
import css from './Column.module.css';

export default class Column extends React.Component {
    getStyle() {
        const { columnColor, columnWidth, opacity, gutterColor, gutterWidth } = this.props.settings;

        return {
            backgroundColor: `rgba(${hexToRgb(columnColor)}, ${opacity})`,
            width: `${columnWidth}px`,
            ...(isGutterExist(gutterWidth) && {boxShadow: `1px 0 0 ${gutterColor}`})
        }
    }

    render() {
        const { number } = this.props.settings;
        return <div style={this.getStyle()} className={css.Column}>{number}</div>;
    }
}