import React, {Component} from 'react';
import Gutter from './Gutter';
import './Column.css';

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

function getStyle(props) {
    const width = props.fluid ? '100%': parseInt(props.columnWidth, 10);

    return {
        width,
        backgroundColor: `rgba(${hexToRgb(props.columnColor)}, ${props.opacity})`,
        flexGrow: 1
    }
}

function columnWithGutter(props) {
    return (
        <div className="column" style={{flexGrow: 1}}>
            <Gutter
                width={parseInt(props.gutterWidth, 10) / 2}
                backgroundColor={`rgba(${hexToRgb(props.gutterColor)}, ${props.opacity})`}
            />
            <div style={getStyle(props)} >{props.children}</div>
            <Gutter
                width={parseInt(props.gutterWidth, 10) / 2}
                backgroundColor={`rgba(${hexToRgb(props.gutterColor)}, ${props.opacity})`}
            />
        </div>
    );
}

function columnWidthoutGutter(props) {
    return (<div className="column shadow" style={getStyle(props)} > {props.children} </div>);
}

const Column = (props) => parseInt(props.gutterWidth) === 0 ? columnWidthoutGutter(props) : columnWithGutter(props);

export default Column;
