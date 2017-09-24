function send(data) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, data);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('popupOpen');
    let form = document.getElementById('form');

    let options = {
        columnNumber: 12,
        columnWidth: 60,
        gutterWidth: 10,
        columnColor: '#ff00e9',
        gutterColor: '#003fff',
        opacity: 0.1
    };

    form.addEventListener('input', (event) => {
        event.preventDefault();
        let target = event.target.name;
        let value = event.target.value;

        if (target === 'column-number') {
            options.columnNumber = value;
        } else if (target === 'column-width') {
            options.columnWidth = value;
        } else if (target === 'gutter-width') {
            options.gutterWidth = value;
        } else if (target === 'column-color') {
            options.columnColor = value;
        } else if (target === 'gutter-color') {
            options.gutterColor = value;
        } else if (target === 'opacity') {
            options.opacity = value;
        }

        send(options)
    });

    send(options)
});
