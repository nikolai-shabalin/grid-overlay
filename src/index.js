import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


window.chrome.storage.local.get('state', (state) => {
    if (state) {
        ReactDOM.render(
            <App
                state={JSON.parse(state.state)}
            />,
            document.getElementById('root'));
    } else {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
});

