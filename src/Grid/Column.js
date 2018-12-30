import React from 'react';
import Gutter from './Gutter';
import {hexToRgb} from '../utils';
import css from './Column.module.css';

export default class Column extends React.Component {
    render = () => {
        const { columnColor, number, columnWidth, opacity, gutterColor, gutterWidth } = this.props.settings;
        const style = {
            backgroundColor: `rgba(${hexToRgb(columnColor)}, ${opacity})`,
            width: `${columnWidth}px`,
        }

        return (
            <React.Fragment> 
                <Gutter color={gutterColor} width={gutterWidth} opacity={opacity}/>  
                <div style={style} className={css.Column}>{number}</div>
                <Gutter color={gutterColor} width={gutterWidth} opacity={opacity}/>
            </React.Fragment>
        )
    }
}