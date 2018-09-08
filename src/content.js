import Grid from "./Grid";
import React from "react";
import ReactDOM from "react-dom";

const content = document.createElement('div');

document.body.appendChild(content);

window.chrome.runtime.onMessage.addListener((request) => {
    ReactDOM.render(
        <Grid
            maxWidth={request.maxWidth}
            fluid={request.fluid}
            columnNumber={request.columnNumber}
            columnWidth={request.columnWidth}
            gutterWidth={request.gutterWidth}
            columnColor={request.columnColor}
            gutterColor={request.gutterColor}
            opacity={request.opacity}
        />,
        content
    );
});
