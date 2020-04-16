import {column} from './column.js';
import {container} from './container.js';

const body = document.body;
const settings = {
    columnNumber: 12,
    columnWidth: 60,
    gutterNumber: 0,
    columnColor: '#FFB2F7',
    gutterColor: '#D2BDDF',
    opacity: 0.7,
    verticalRhythmNumber: 24,
    isFluid: false,
    maxWidth: 0,
}

const containerElement = container(settings);

for (let i = 0; i < settings.columnNumber; i++) {
    const isLast = i === settings.columnNumber - 1;
    containerElement.appendChild(column({...settings, isLast, currentColumnNumvbrer: i}));
}

body.appendChild(containerElement);