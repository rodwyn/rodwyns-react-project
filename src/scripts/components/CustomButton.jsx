import PropTypes from 'prop-types';
import React from 'react';

class CustomButton extends React.Component {
  render() {
    const {
      className,
      isDisabled,
      onClick,
      text,
      type
    } = this.props;

    return (
      <button
        className={ className }
        disabled={ isDisabled }
        onClick={ onClick }
        type={ type } >
        { text }
      </button>
    );
  }
}

CustomButton.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
};

CustomButton.defaultProps = {
  className: 'btn-default',
  isDisabled: false,
  onClick: () => null,
  text: 'submit',
  type: 'button'
};

export default CustomButton;
