document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form');
    let options = {
        columnNumber: 36,
        columnWidth: 38,
        gutterWidth: 0,
        maxWidth: 1920
    };

    form.addEventListener('input', (event) => {
        event.preventDefault();
        let target = event.target.name;
        let value = event.target.value;

        if (target === 'column-number') {
            options.columnNumber = value;
        } else if (target === 'column-width') {
            options.columnWidth = value;
        }  else if (target === 'gutter-width') {
            options.gutterWidth = value;
        }  else if (target === 'max-width') {
            options.maxWidth= value;
        }
    })
});
