import React from 'react';

export const InputNumber = (props) =>
    <input
        id={props.id}
        type="number"
        value={props.value}
        step={props.step}
        min="0"
        max={props.max}
        onChange={props.onChange}
        onWheel={props.onWheel}
    />;


export const InputColor = (props) =>
    <input
        id={props.id}
        type="color"
        value={props.value}
        onChange={props.onChange}
    />;

export const InputCheckbox = (props) =>
    <input
        id={props.id}
        type="checkbox"
        onChange={props.onChange}
    />;
