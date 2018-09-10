import React from 'react';
import Gutter from './Gutter';

const columnStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    flexGrow: 1
};
const hasGutter = (props) => parseInt(props.gutterWidth) === 0;

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

function getStyle(props) {
    const width = props.fluid ? '100%': parseInt(props.columnWidth, 10);

    return {
        width,
        backgroundColor: `rgba(${hexToRgb(props.columnColor)}, ${props.opacity})`,
        flexGrow: 1,
        display: 'flex',
        flexFlow: 'row nowrap',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: hasGutter(props) ? '-1px 0 0 black inset' : null
    }
}

function columnWithGutter(props) {
    return (
        <div style={columnStyle}>
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
    return (<div style={getStyle(props)} > {props.children} </div>);
}

const Column = (props) => hasGutter(props) ? columnWidthoutGutter(props) : columnWithGutter(props);

export default Column;
