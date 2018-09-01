import React, {Component} from 'react';
import './App.css';
import InputNumber from './inputs/InputNumber'
import InputColor from './inputs/InputColor'

class App extends Component {
    render() {
        return (
            <div>
                <label htmlFor="column-number">Количество колонок</label>
                <InputNumber
                    id="column-number"
                    value="12"
                />

                <label htmlFor="column-width">Ширина колонки</label>
                <InputNumber
                    id="column-width"
                    value="60"
                />

                <label htmlFor="gutter-width">Ширина гаттеров</label>
                <InputNumber
                    id="gutter-width"
                    value="20"
                />

                <label htmlFor="column-color">Цвет колонки</label>
                <InputColor
                    id="column-color"
                    value="#ff00e9"
                />

                <label htmlFor="gutter-color">Цвет гаттера</label>
                <InputColor
                    id="gutter-color"
                    value="#663399"
                />

                <label htmlFor="gutter-width">Прозрачность</label>
                <InputNumber
                    id="opacity"
                    value="0.3"
                    step="0.1"
                    max="1"
                />
            </div>
        );
    }
}

export default App;
