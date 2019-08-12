import React from 'react';
import './styles/Display.css'
import PropTypes from 'prop-types';

const Display = ({result, next, error}) => (
  <div className='display'>
    {next || result || error || '0'}
  </div>
);

Display.propTypes = {
  error: PropTypes.string,
  result: PropTypes.string,
  next: PropTypes.string,
};
  
Display.defaultProps = {
  result: '0',
  next: null,
  error: null,
};

export default Display;