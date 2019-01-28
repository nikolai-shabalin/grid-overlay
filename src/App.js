import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';
import Grid from './Grid';
import presets from './presets';

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
    preset: '960',

    verticalRhythm: false,
    verticalRhythmNumber: 24,

    isShow: true,

    language: 'ru',

    isShowSettings: false,
  };

  handleClose = () => this.setState({isShow: false});

  handleChange = event => {
    if (event.target.type === 'checkbox') {
      this.setState({[event.target.id]: event.target.checked});
    } else if (event.target.name === 'presets') {
      this.setState({...this.state, ...presets[event.target.value]})
    } else {
      this.setState({[event.target.id]: event.target.value});
    }
  };

  handleChangeInputsFromDiv = prop => this.setState(prevState => ({[prop]: !prevState[prop]}));

  handleChangeLanguage = event => {
    this.setState({
      [event.target.id]: event.target.value,
      isShowSettings: !this.state.isShowSettings,
    });
  };

  handleChangeColor = (id, color) => {
    this.setState({[id]: color});
  };

  render() {
    const {gridNode} = this.props;
    const {isShow} = this.state;
    const settings = {
      ...this.state,
      onChange: this.handleChange,
      onChangeColor: this.handleChangeColor,
      onClose: this.handleClose,
      onChangeLanguage: this.handleChangeLanguage,
      onClick: this.handleChangeInputsFromDiv,
    };

    return isShow &&
      <React.Fragment>
        <Popup {...settings} />

        {ReactDOM.createPortal(
          <Grid {...settings}/>,
          gridNode,
        )}
      </React.Fragment>;
  }
}
