import React from 'react';
import PropTypes from 'prop-types';

function Sum(props) {
  return (
    <p>
      Sum
      {' '}
      {props.a}
      {' '}
      and
      {' '}
      {props.b}
      {' '}
      is
      {' '}
      {props.a + props.b}
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
