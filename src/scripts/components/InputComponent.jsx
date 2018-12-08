import PropTypes from 'prop-types';
import React from 'react';

const InputComponent = ({
  label,
  text,
  type,
  id,
  value,
  handleChange
}) => (
  <div className="form-group">
    <label htmlFor={ label }>{ text }</label>
    <input
      className="form-control"
      id={ id }
      onChange={ handleChange }
      required
      type={ type }
      value={ value } />
  </div>
);

InputComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
