/*
* инжектится непосредсвенно на страницу
* может общаться с бэкграунд скриптом
* chrome.runtime.onMessage.sendMessage(function(chrome.runtime.id, data)) {}
* chrome.runtime.onMessage.addListener(function(request, sender)) {}
* */
let body = document.body;
let wrapper = document.createElement('div');

wrapper.style.width = '480px';
wrapper.style.height = '100%';
wrapper.style.position = 'fixed';
wrapper.style.top = '0';
wrapper.style.left = '50%';
wrapper.style.marginLeft = '-240px';
wrapper.style.pointerEvents = 'none';
wrapper.style.opacity = '.1';


for (let i = 0; i < 2; i++) {
    column = document.createElement('div');
    column.style.width = "240px";
    column.style.height = "100%";
    column.style.backgroundColor = "rgb(255, 0, 233)";
    column.style.float = "left";
    column.style.display = "flex";
    column.style.justifyContent = "space-between";

    let leftGutter = document.createElement('div');
    leftGutter.style.width = "10px";
    leftGutter.style.backgroundColor = "blue";


    let rightGutter = document.createElement('div');
    rightGutter.style.width = "10px";
    rightGutter.style.backgroundColor = "blue";

    column.appendChild(leftGutter);
    column.appendChild(rightGutter);

    wrapper.appendChild(column);
}
// body.appendChild(wrapper);

// chrome.runtime.sendMessage({
//     from:    'content',
//     subject: 'showPageAction'
// });

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
    });
