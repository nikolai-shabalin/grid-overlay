import React from 'react';
import {hexToRgb} from '../utils';

export default class Column extends React.Component {
    render = () => {
        const { color, number, opacity, columnWidth } = this.props;        
        const style = {
            backgroundColor: `rgba(${hexToRgb(color)}, ${opacity})`,
            width: `${columnWidth}px`,
        }

        return (
            <div style={style}>{number}</div>
        )
    }
}