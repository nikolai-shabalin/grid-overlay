import React, {Component} from 'react';
import Grid from './Grid';
import './App.css';

import {InputNumber, InputCheckbox} from './inputs';
import ColorPicker from './ColorPicker';

class App extends Component {
    constructor(props) {
        super(props);

        console.log(props.state);
        if (props.state) {
            this.state = props.state;
        } else {
            this.state = {
                columnNumber: 12,
                columnWidth: 60,
                gutterWidth: 20,
                columnColor: '#ff00e9',
                gutterColor: '#663399',
                opacity: 0.3,
                fluid: false,
                maxWidth: 0
            };
        }

        this.onChange = this.onChange.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.handleColorColumnChange = this.handleColorColumnChange.bind(this);
        this.handleColorGutterChange = this.handleColorGutterChange.bind(this);
    }

    onChange(event) {
        this.changeState(event);
    }

    handleColorColumnChange(color) {
        this.setState({
            columnColor: color.hex
        })
    };

    handleColorGutterChange(color) {
        this.setState({
            gutterColor: color.hex
        })
    };


    onWheel(event) {
        this.changeState(event);
    }

    changeState(event) {
        if (event.target.type === 'checkbox') {
            this.setState({
                [event.target.id]: event.target.checked
            });
        } else {
            this.setState({
                [event.target.id]: event.target.value
            });
        }
    }

    render() {
        return (
            <div>
                <div className="popup">
                    <div className="popup__column">
                        <label htmlFor='columNumber' className={'label'}>Количество колонок</label>
                        <InputNumber
                            id='columnNumber'
                            value={this.state.columnNumber}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='columnWidth' className={'label'}>Ширина колонки</label>
                        <InputNumber
                            id='columnWidth'
                            value={this.state.columnWidth}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='gutterWidth' className={'label'}>Ширина гаттеров</label>
                        <InputNumber
                            id='gutterWidth'
                            value={this.state.gutterWidth}
                            step={2}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='columnColor' className={'label'}>Цвет колонки</label>
                        <ColorPicker
                            id='columnColor'
                            color={this.state.columnColor}
                            onChange={this.handleColorColumnChange}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='gutterColor' className={'label'}>Цвет гаттера</label>
                        <ColorPicker
                            id='gutterColor'
                            color={this.state.gutterColor}
                            onChange={this.handleColorGutterChange}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='opacity' className={'label'}>Прозрачность</label>
                        <InputNumber
                            id='opacity'
                            value={this.state.opacity}
                            step={0.1}
                            max={1}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column popup__column_line"/>

                    <div className="popup__column popup__column_fluid">
                        <InputCheckbox
                            id='fluid'
                            onChange={this.onChange}
                        />
                        <label htmlFor='fluid' className={'label'}>Резиновый</label>
                    </div>

                    <div className="popup__column popup__column_max_width">
                        <label htmlFor='maxWidth' className={'label'}>Макс. ширина</label>
                        <InputNumber
                            id='maxWidth'
                            value={this.state.maxWidth}
                            step={10}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>
                </div>
                <div>
                    <Grid
                        maxWidth={this.state.maxWidth}
                        fluid={this.state.fluid}
                        columnNumber={this.state.columnNumber}
                        columnWidth={this.state.columnWidth}
                        gutterWidth={this.state.gutterWidth}
                        columnColor={this.state.columnColor}
                        gutterColor={this.state.gutterColor}
                        opacity={this.state.opacity}
                    />
                </div>
            </div>
        );
    }
}

export default App;
