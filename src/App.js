import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';
import Grid from './Grid';

export default class App extends React.Component {
  state = {
    columnNumber: 12,
    columnWidth: 60,
    columnColor: '#FF00E9',

    gutterWidth: 20,
    gutterColor: '#663399',

    opacity: 0.3,

    fluid: false,
    maxWidth: 0,
  };

  handleChange = event => {
    if (event.target.type === 'checkbox') {
      this.setState({
          [event.target.id]: event.target.checked
      });
    } else {
      this.setState({
        [event.target.id] : event.target.value
      });
    }
  };

  handleChangeColor = (id, color) => {
    this.setState({
      [id] : color
    });
  };

  render() {
    const {gridNode} = this.props;
    const settings = {...this.state, onChange: this.handleChange, onChangeColor: this.handleChangeColor};
    return (
      <div>
        <Popup {...settings} />

        {ReactDOM.createPortal(
          <Grid {...settings}/>,
          gridNode,
        )}
      </div>
    )
  }
}
