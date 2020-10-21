import React from 'react';
import PropTypes from 'prop-types';

Sum.defaultProps = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

function Sum(props) {
  // const { a, b } = props;

  return (
    <p>
      {`Sum of ${props.a} 
      and ${props.b} 
      is ${Number(props.a) + Number(props.b)}`}
    </p>
  );
}

export default Sum;
