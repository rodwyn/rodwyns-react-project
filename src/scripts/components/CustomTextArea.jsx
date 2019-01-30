import PropTypes from 'prop-types';
import React from 'react';

class CustomTextArea extends React.Component {
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
    const {
      isRequired,
      maxLength,
      minLength
    } = this.props;

    return (!isRequired) || (value !== ''
      && value.length > minLength
      && value.length < maxLength);
  }

  render() {
    const { value } = this.state;

    const {
      isRequired,
      className,
      maxLength,
      minLength,
      placeholder
    } = this.props;

    return (
      <textarea
        className={ className }
        maxLength={ maxLength }
        minLength={ minLength }
        onChange={ this.onChange }
        placeholder={ placeholder }
        required={ isRequired }
        value={ value } />
    );
  }
}

CustomTextArea.propTypes = {
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

CustomTextArea.defaultProps = {
  className: 'form-control',
  isRequired: false,
  maxLength: 50,
  minLength: 10,
  placeholder: '',
  value: ''
};

export default CustomTextArea;
