export const InputCheckbox = (props) =>
  <div className={'inputNumberWrapper'}>
    <input
      id={props.id}
      type="checkbox"
      onChange={props.onChange}
    />
    <label htmlFor={props.id} className={'inputNumber'} />
  </div>;