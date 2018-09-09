import React from 'react';
import './Inputs.css';

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

export const InputCheckbox = (props) =>
    <input
        id={props.id}
        type="checkbox"
        onChange={props.onChange}
    />;
