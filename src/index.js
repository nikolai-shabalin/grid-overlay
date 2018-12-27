import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';

const body = document.querySelector('body');

const app = document.createElement('div');
const popup = document.createElement('div');
const grid = document.createElement('div');

app.classList.add('grid-overlay');
popup.classList.add('grid-overlay__popup');
grid.classList.add('grid-overlay__grid');

app.append(popup);
app.append(grid);
body.append(app);

ReactDOM.render(<Popup />, popup);