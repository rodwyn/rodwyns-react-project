import PropTypes from 'prop-types';
import React from 'react';

class NumberComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.settings.value };

    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    if (event.target.value && event.target.value <= this.props.settings.max
      && event.target.value >= this.props.settings.min) {
      this.setState({ value: event.target.value });
    }
  }

  onPlus() {
    if (this.state.value < this.props.settings.max) {
      this.setState({ value: this.state.value + 1 });
    }
  }

  onMinus() {
    if (this.state.value > this.props.settings.min) {
      this.setState({ value: this.state.value - 1 });
    }
  }

  render() {
    return (
      <div className="number-component">
        <p>Qty</p>
        <div className="quantity">
          <span className="minus" onClick={ this.onMinus }>
            <i aria-hidden="true" className="fa fa-caret-down">m</i>
          </span>
          <input
            max={ this.props.settings.max }
            min={ this.props.settings.min }
            onChange={ this.onChange }
            onInput={ this.onChange }
            step={ this.props.settings.step }
            type="number"
            value={ this.state.value } />
          <span className="plus" onClick={ this.onPlus }>
            <i aria-hidden="true" className="fa fa-caret-up">p</i>
          </span>
        </div>
      </div>
    );
  }
}

NumberComponent.propTypes = { settings: PropTypes.object };

NumberComponent.defaultProps = { settings: {
  max: 99,
  min: 1,
  step: 1,
  value: 1
}};

export default NumberComponent;
