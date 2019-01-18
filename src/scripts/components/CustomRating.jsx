import PropTypes from 'prop-types';
import React from 'react';

const CustomRaiting = ({ rate }) => {
  const RATE_LENGHT = 5;

  function getStarts() {
    const stars = [];

    for (let i = 1; i <= RATE_LENGHT; i++) {
      stars.push(<i
        aria-hidden="true"
        className={ (i <= rate) ? 'fa-star-fill' : 'fa-star' }
        key={ i } />);
    }

    return stars;
  }

  return (
    <div className="ratings">
      { getStarts() }
    </div>
  );
};

CustomRaiting.propTypes = { rate: PropTypes.number.isRequired };

export default CustomRaiting;
