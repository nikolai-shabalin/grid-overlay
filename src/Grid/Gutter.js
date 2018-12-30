import React from 'react';
import {hexToRgb} from '../utils';

export default class Gutters extends React.Component {
    render = () => {
        const { color, opacity, width } = this.props;        
        const style = {
            backgroundColor: `rgba(${hexToRgb(color)}, ${opacity})`,
            width: `${width / 2}px`,
        }

        return (
            <div style={style} />
        )
    }
}