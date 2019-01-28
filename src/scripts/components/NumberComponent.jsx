import PropTypes from 'prop-types';
import React from 'react';

class NumberComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.value };

    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    if (event.target.value && event.target.value <= this.props.max
      && event.target.value >= this.props.min) {
      this.setState({ value: event.target.value });
    }
  }

  onPlus() {
    if (this.state.value < this.props.max) {
      this.setState({ value: this.state.value + 1 });
    }
  }

  onMinus() {
    if (this.state.value > this.props.min) {
      this.setState({ value: this.state.value - 1 });
    }
  }

  render() {
    return (
      <div className="number-component">
        <p>Qty</p>
        <div className="quantity">
          <span className="minus" onClick={ this.onMinus }>
            <i aria-hidden="true" className="fa-arrow-down" />
          </span>
          <input
            max={ this.props.max }
            min={ this.props.min }
            onChange={ this.onChange }
            onInput={ this.onChange }
            step={ this.props.step }
            type="number"
            value={ this.state.value } />
          <span className="plus" onClick={ this.onPlus }>
            <i aria-hidden="true" className="fa-arrow-up" />
          </span>
        </div>
      </div>
    );
  }
}

NumberComponent.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number
};

NumberComponent.defaultProps = {
  max: 99,
  min: 1,
  step: 1,
  value: 1
};

export default NumberComponent;
