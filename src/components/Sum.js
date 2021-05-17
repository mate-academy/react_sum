import React from 'react';
import PropTypes from 'prop-types';

const Sum = (props) => {
  const data = props.text.split(' + ');

  return (
    <p>
      Sum of
      {data[0]}
      {' '}
      and
      {data[1]}
      {' '}
      is
      {+data[0] + +data[1]}
    </p>
  );
};

Sum.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Sum;
