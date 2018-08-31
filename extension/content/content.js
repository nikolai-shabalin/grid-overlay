let body = document.body;
let wrapper = document.createElement('div');

function createWrapper(data) {
    wrapper.style.width = (data.columnWidth * data.columnNumber) + (data.gutterWidth * 2 * data.columnNumber) + 'px';
    wrapper.style.height = '100%';
    wrapper.style.position = 'fixed';
    wrapper.style.zIndex= '9999';
    wrapper.style.top = '0';
    wrapper.style.left = '50%';
    wrapper.style.marginLeft = -(data.columnWidth * data.columnNumber / 2) + 'px';
// wrapper.style.pointerEvents = 'none';
    wrapper.style.opacity = data.opacity;
}

function clearColumns() {
    wrapper.innerHTML = '';
}

function createColumns(data) {
    clearColumns();
    
    for (let i = 0; i < data.columnNumber; i++) {
        let column = document.createElement('div');
        column.style.width = data.columnWidth + 'px';
        column.style.height = '100%';
        column.style.backgroundColor = data.columnColor;
        column.style.float = 'left';
        column.style.paddingLeft  = data.gutterWidth + 'px';
        column.style.paddingRight  = data.gutterWidth + 'px';
        column.style.position = 'relative';

        let leftGutter = document.createElement('div');
        leftGutter.style.width = data.gutterWidth + 'px';
        leftGutter.style.height = '100%';
        leftGutter.style.backgroundColor = data.gutterColor;
        leftGutter.style.position = 'absolute';
        leftGutter.style.top = 0;
        leftGutter.style.left = 0;


        let rightGutter = document.createElement('div');
        rightGutter.style.width = data.gutterWidth + 'px';
        rightGutter.style.height = '100%';
        rightGutter.style.backgroundColor = data.gutterColor;
        rightGutter.style.position = 'absolute';
        rightGutter.style.top = 0;
        rightGutter.style.right = 0;

        column.appendChild(leftGutter);
        column.appendChild(rightGutter);

        wrapper.appendChild(column);
    }
}

function updateColumns() {

}

chrome.runtime.onMessage.addListener(function(request) {
    createWrapper(request);
    createColumns(request);
    body.appendChild(wrapper);
});
