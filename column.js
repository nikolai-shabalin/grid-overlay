import {hexToRgb} from './utils.js';

export function column({columnColor, gutterNumber, gutterColor, opacity, isLast, currentColumnNumvbrer}) {
    const columnColorRgb = hexToRgb(columnColor);
    const gutterColorRgb = hexToRgb(gutterColor);
    const column = document.createElement('div');

    column.textContent = currentColumnNumvbrer;
    column.style.textAlign = 'center';
    column.style.backgroundColor = `rgba(${columnColorRgb.r}, ${columnColorRgb.g}, ${columnColorRgb.b}, ${opacity})`;
    column.style.height = '100%';

    if (gutterNumber > 1) {
        const borderColor = `rgba(${gutterColorRgb.r}, ${gutterColorRgb.g}, ${gutterColorRgb.b}, ${opacity})`;
        const gutterWidth = gutterNumber / 2;

        column.style.borderLeft = `${gutterWidth}px solid ${borderColor}`;
        column.style.borderRight = `${gutterWidth}px solid ${borderColor}`;
    } else {
        column.style.borderRight = isLast ? 'none' : '1px solid black';
    }
    return column;
}