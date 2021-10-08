import React from 'react';
import PropTypes from 'prop-types';

function Summ({ a, b }) {
  return (
    <div>
      <p>{`Sum of ${' '} ${a} and ${b} is ${' '} ${a + b}`}</p>
    </div>
  );
}

Summ.defaultProps = {
  a: 0,
  b: 0,
};

Summ.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Summ;
