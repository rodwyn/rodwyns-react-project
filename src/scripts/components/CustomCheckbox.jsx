import PropTypes from 'prop-types';
import React from 'react';

class CustomCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.onToggle = this.onToggle.bind(this);
    this.validate = this.validate.bind(this);
    this.id = new Date().valueOf().toString();

    this.state = {
      isChecked: props.isChecked,
      isValid: this.validate(props.isChecked),
      value: props.isChecked
    };
  }

  onToggle(event) {
    const isChecked = event.target.checked;

    this.setState({
      isChecked: isChecked,
      isValid: this.validate(isChecked),
      value: isChecked
    });
  }

  validate(checked) {
    const { isRequired } = this.props;

    return !isRequired || (isRequired && checked);
  }

  render() {
    const { isChecked } = this.state;
    const {
      label,
      isDisabled,
      isRequired
    } = this.props;

    return (
      <div className="custom-checkbox">
        <input
          checked={ isChecked }
          disabled={ isDisabled }
          id={ this.id }
          onChange={ this.onToggle }
          required={ isRequired }
          type='checkbox' />
        <label htmlFor={ this.id }>
          { label }
        </label>
      </div>
    );
  }
}

CustomCheckbox.propTypes = {
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string
};

CustomCheckbox.defaultProps = {
  isChecked: false,
  isDisabled: false,
  isRequired: false,
  label: ''
};

export default CustomCheckbox;
