import React from 'react';

export default class Select extends React.Component {
  render() {
    const {id, options, onChange} = this.props;

    return (
      <select id={id} name={id} onChange={onChange}>
        <option key={'empty'} value={''}/>
        {Object.keys(options).map(optionName =>
          <option key={optionName} value={optionName}>{optionName}</option>)
        }
      </select>
    )
  }
}
