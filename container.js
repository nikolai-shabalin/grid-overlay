export function container({columnNumber, columnWidth, verticalRhythmNumber, isFluid, maxWidth}) {
    const container = document.createElement('div');
    let currentColumnWidthFluid = '';

    if(isFluid && maxWidth) {
        currentColumnWidthFluid = `${maxWidth / columnNumber}px`;
    } else if (isFluid) {
        currentColumnWidthFluid = '1fr';
    } else {
        currentColumnWidthFluid = `${columnWidth}px`
    }

    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.zIndex = '9999';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${columnNumber}, ${currentColumnWidthFluid})`;
    container.style.justifyContent = 'center';
    container.style.backgroundImage =
        verticalRhythmNumber ?
            `repeating-linear-gradient(
                transparent 0px, 
                transparent ${verticalRhythmNumber}px, 
                black ${verticalRhythmNumber}px, 
                black ${verticalRhythmNumber + 1}px)` :
            'none';

    return container;
}