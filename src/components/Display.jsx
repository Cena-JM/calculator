import React from 'react';
import './styles/Display.css'
import PropTypes from 'prop-types';

const Display = ({result, next}) => (
  <div className='display'>
    {next || result || '0'}
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};
  
Display.defaultProps = {
  result: '0',
  next: null,
};

export default Display;