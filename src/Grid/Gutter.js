import React from 'react';
import {hexToRgb} from '../utils';

export default class Gutters extends React.Component {
    getStyle() {
        const { gutterColor, gutterWidth, opacity } = this.props.settings;        
        
        return ({
            backgroundColor: `rgba(${hexToRgb(gutterColor)}, ${opacity})`,
            width: `${gutterWidth / 2}px`,
        });
    }

    render = () => <div style={this.getStyle()} />;
}