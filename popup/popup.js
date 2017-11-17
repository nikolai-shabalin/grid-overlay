// function send(data) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, data);
//     });
// }


document.addEventListener('DOMContentLoaded', () => {
    numberInputInit();

    // let form = document.getElementById('form');

    // let options = {
    //     columnNumber: 12,
    //     columnWidth: 60,
    //     gutterWidth: 10,
    //     columnColor: '#ff00e9',
    //     gutterColor: '#003fff',
    //     opacity: 0.1
    // };

    // form.addEventListener('input', (event) => {
    //     event.preventDefault();
    //     let target = event.target.name;
    //     let value = event.target.value;
    //
    //     if (target === 'column-number') {
    //         options.columnNumber = value;
    //     } else if (target === 'column-width') {
    //         options.columnWidth = value;
    //     } else if (target === 'gutter-width') {
    //         options.gutterWidth = value;
    //     } else if (target === 'column-color') {
    //         options.columnColor = value;
    //     } else if (target === 'gutter-color') {
    //         options.gutterColor = value;
    //     } else if (target === 'opacity') {
    //         options.opacity = value;
    //     }
    //
        // send(options);
    // });

    // send(options);
});

function numberInputInit() {
    let number = document.querySelector('.form__number');

    let oldPosition = 0;
    let direction = '';

    function move(event) {
        if (event.pageX < oldPosition) {
            direction = "left"
        } else if (event.pageX > oldPosition) {
            direction = "right"
        }

        oldPosition = event.pageX;

        changeValue(direction, number);
    }

    number.addEventListener('mousedown', function() {
        let that = this;

        document.addEventListener('mousemove', move);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move);
        });
    });
}


function changeValue(direction, element) {
    let input = element.previousElementSibling;
    
    console.log(input);
}