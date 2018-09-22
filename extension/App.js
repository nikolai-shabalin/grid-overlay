import React, {Component} from 'react';
import './App.css';

import {InputNumber, InputCheckbox} from './inputs';
import ColorPicker from './ColorPicker';

class App extends Component {
    constructor(props) {
        super(props);

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

    setInStorage(data) {
        window.chrome.storage.local.set({'state': JSON.stringify(data)});
    }

    sendInContent(data) {
        window.chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            window.chrome.tabs.sendMessage(tabs[0].id, data);
        });
    }

    render() {
        this.setInStorage(this.state);
        this.sendInContent(this.state);

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
                        <ColorPicker
                            id='columnColor'
                            color={this.state.columnColor}
                            onChange={this.handleColorColumnChange}
                        />
                    </div>

                    <div className="popup__column">
                        <label htmlFor='gutterColor'>Цвет гаттера</label>
                        <ColorPicker
                            id='gutterColor'
                            color={this.state.gutterColor}
                            onChange={this.handleColorGutterChange}
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
            </div>
        );
    }
}

export default App;
