import React from 'react';
import '../App.scss';
import PropTypes from 'prop-types';

const SumBlock = ({ a, b }) => (
  <div className="block">
    <div className="sum">
      <div className="result">
        {`Sum of ${a} and ${b} is ${a + b}`}
      </div>
    </div>
  </div>
);

SumBlock.defaultProps = {
  a: 0,
  b: 0,
};

SumBlock.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default SumBlock;
