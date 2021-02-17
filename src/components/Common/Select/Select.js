import React from 'react';
import { Container } from './style';

export default ({
  options = [
    {
      display: '',
      value: '',
    }
  ],
  onChange = () => {},
  id = 'select-id',
  ...props
}) => {

  const handleChange = e => onChange(e.target.value);
  
  return (
    <Container>
      <select
        onChange={handleChange}
        {...props}
      >
        {
          options.map(({ display, value }, i) => (
            <option
              value={value}
              key={`${id}-${i}`}
            >
              {display}
            </option>
          ))
        }
      </select>
    </Container>
  )
}
