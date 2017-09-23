console.log('openPopup');
let body = document.body;
let wrapper = document.createElement('div');

function createWrapper(data) {
    wrapper.style.width = data.columnWidth * data.columnNumber + 'px';
    wrapper.style.height = '100%';
    wrapper.style.position = 'fixed';
    wrapper.style.zIndex= '9999';
    wrapper.style.top = '0';
    wrapper.style.left = '50%';
    wrapper.style.marginLeft = -(data.columnWidth * data.columnNumber / 2) + 'px';
// wrapper.style.pointerEvents = 'none';
    wrapper.style.opacity = '.1';
}

function clearColumns() {
    wrapper.innerHTML = '';
}

function createColumns(data) {
    clearColumns();
    
    for (let i = 0; i < data.columnNumber; i++) {
        let column = document.createElement('div');
        column.style.width = data.columnWidth + 'px';
        column.style.height = "100%";
        column.style.backgroundColor = "rgb(255, 0, 233)";
        column.style.float = "left";
        column.style.display = "flex";
        column.style.justifyContent = "space-between";

        let leftGutter = document.createElement('div');
        leftGutter.style.width = data.gutterWidth + 'px';
        leftGutter.style.backgroundColor = "blue";


        let rightGutter = document.createElement('div');
        rightGutter.style.width = data.gutterWidth + 'px';
        rightGutter.style.backgroundColor = "blue";

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
