import React, { Component } from 'react';
import InputComponent from './InputComponent.jsx';
import ReactDOM from 'react-dom';

class FormContainer extends Component {
  constructor() {
    super();

    this.state = { seoTitle: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seoTitle } = this.state;

    return (
      <form id='article-form'>
        <InputComponent
          handleChange={ this.handleChange }
          id='seoTitle'
          label='seoTitle'
          text='SEO title'
          type='text'
          value={ seoTitle } />
      </form>
    );
  }
}
export default FormContainer;
