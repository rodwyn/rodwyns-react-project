import React from 'react';
const SCROLL_LIMIT = 350;

class ScrollUp extends React.Component {
  constructor() {
    super();

    this.state = { visibility: '' };

    this.onScroll = this.onScroll.bind(this);
    this.element = document.getElementById('scrollUp');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const visibility = (document.body.scrollTop > SCROLL_LIMIT
      || document.documentElement.scrollTop > SCROLL_LIMIT)
      ? 'visible' : 'hidden';

    this.setState({ visibility: visibility });
  }

  onClick() {
    const transition = 'all 0.4s cubic-bezier(0.77, 0, 0.175, 1)';

    document.body.style.transition = transition;

    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.style.transition = 'none';
    }, 400);
  }

  render() {
    return (
      <a
        id="scrollUp"
        onClick={ this.onClick }
        style={{visibility: this.state.visibility}}>
        <i aria-hidden="true" className="fa fa-angle-up" />
        X
      </a>
    );
  }
}

export default ScrollUp;
