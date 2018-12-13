import React, { Component } from 'react';

class AutoComplete extends Component {
  constructor() {
    super();

    this.onKeyUp = this.onKeyUp.bind(this);
    this.autocompleteSuggestions = React.createRef();
  }

  componentDidMount() {
    const autocompleteSuggestions = this.autocompleteSuggestions.current;
  }

  onKeyUp(event) {
    // console.log(event);
  }

  render() {
    return (
      <div className='autocomplete'>
        <label htmlFor='autocomplete-countries'>Country Name</label>
        <input
          className='text-field'
          placeholder='Start typing the country name'
          type='text' />
        <ul
          className='autocomplete-suggestions'
          ref={ this.autocompleteSuggestions }>
          <li className='autocomplete-suggestion' data-index='0'>
            Ar<strong>me</strong>nia
          </li>
          <li className='autocomplete-suggestion' data-index='1'>
            A<strong>me</strong>rican Samoa
          </li>
          <li className='autocomplete-suggestion' data-index='2'>
            Ca<strong>me</strong>roon
          </li>
          <li className='autocomplete-suggestion' data-index='3'>
            <strong>Me</strong>tropolitan France
          </li>
          <li className='autocomplete-suggestion' data-index='4'>
            <strong>Me</strong>xico
          </li>
          <li className='autocomplete-suggestion' data-index='5'>
            Surina<strong>me</strong>
          </li>
          <li className='autocomplete-suggestion' data-index='6'>
            Turk<strong>me</strong>nistan
          </li>
          <li className='autocomplete-suggestion' data-index='7'>
            Peoples Democratic Republic of Ye<strong>me</strong>n
          </li>
          <li className='autocomplete-suggestion' data-index='8'>
            Ye<strong>me</strong>n
          </li>
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
