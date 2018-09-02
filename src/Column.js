import React, {Component} from 'react';
import Gutter from './Gutter';
import './Column.css';

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}
function getStyle(props) {
    return {
        width: props.fluid ? null: parseInt(props.columnWidth, 10),
        backgroundColor: `rgba(${hexToRgb(props.columnColor)}, ${props.opacity})`
    }
}

function columnWithGutter(props) {
    return (
        <div className="column">
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


const Column = (props) => props.gutterWidth ? columnWithGutter(props) : columnWidthoutGutter(props);

export default Column;
