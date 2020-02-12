import React from 'react';
import PropTypes from 'prop-types';

const Sum = (props) => {
  const { data } = props;

  return (
    <p>{`Sum of ${data.a} and ${data.b} is ${data.a + data.b} `}</p>
  );
};

Sum.propTypes = {
  data: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }),
};

Sum.defaultProps = {
  data: PropTypes.shape({
    a: '0',
    b: '0',
  }),
};

export default Sum;
