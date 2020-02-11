import React from 'react';
import PropTypes from 'prop-types';

function Sum(props) {
  const { expression } = props;

  return (
    <div>
      {
        expression.map(elem => (
          <p>{`Sum of  ${elem[0]} and ${elem[1]} is ${elem[0] + elem[1]}`}</p>
        ))
      }
    </div>
  );
}

Sum.propTypes = {
  expression: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Sum;
