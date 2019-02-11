import PropTypes from 'prop-types';
import React from 'react';

class CustomInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: this.validate(props.value),
      value: props.value
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;

    this.setState({
      isValid: this.validate(value),
      value: value
    });
  }

  validate(value) {
    const { isRequired } = this.props;

    return (!isRequired) || (isRequired && value !== '');
  }

  render() {
    const { value } = this.state;
    const {
      className,
      isRequired,
      placeholder,
      type
    } = this.props;

    return (
      <input
        className={ className }
        onChange={ this.onChange }
        placeholder={ placeholder }
        required={ isRequired }
        type={ type }
        value={ value } />
    );
  }
}

CustomInput.propTypes = {
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  value: PropTypes.string
};

CustomInput.defaultProps = {
  className: 'form-control',
  isRequired: false,
  placeholder: '',
  type: 'text',
  value: ''
};

export default CustomInput;
