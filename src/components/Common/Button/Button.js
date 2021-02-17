import React from 'react';
import { StyledButton } from './style';

export default props => {

  return (
    <StyledButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    />
  )
}
