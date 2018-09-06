import React, {Component} from 'react';
import './App.css';
import {InputNumber, InputColor, InputCheckbox} from './inputs';
import Grid from './Grid';

class App extends Component {
    constructor(props) {
        super(props);

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

        this.onChange = this.onChange.bind(this);
        this.onWheel = this.onWheel.bind(this);
    }

    onChange(event) {
        this.changeState(event);
    }

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
                        <label htmlFor='columNumber'>Количество колонок</label>
                        <InputNumber
                            id='columnNumber'
                            value={this.state.columnNumber}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='columnWidth'>Ширина колонки</label>
                        <InputNumber
                            id='columnWidth'
                            value={this.state.columnWidth}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='gutterWidth'>Ширина гаттеров</label>
                        <InputNumber
                            id='gutterWidth'
                            value={this.state.gutterWidth}
                            step={2}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='columnColor'>Цвет колонки</label>
                        <InputColor
                            id='columnColor'
                            value={this.state.columnColor}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='gutterColor'>Цвет гаттера</label>
                        <InputColor
                            id='gutterColor'
                            value={this.state.gutterColor}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='opacity'>Прозрачность</label>
                        <InputNumber
                            id='opacity'
                            value={this.state.opacity}
                            step={0.1}
                            max={1}
                            onChange={this.onChange}
                            onWheel={this.onWheel}
                        />
                    </div>

                    <div className="popup__column popup__column_line" />

                    <div className="popup__column popup__column_fluid">
                        <label htmlFor='fluid'>Резиновый</label>
                        <InputCheckbox
                            id='fluid'
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="popup__column popup__column_max_width">
                        <label htmlFor='maxWidth'>Макс. ширина</label>
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
