import React from 'react';
import '../App.scss';

// eslint-disable-next-line react/prop-types
const SumBlock = ({ a, b }) => (
  <div className="block">
    <div className="sum">
      <div className="result">
        Sum of
        {' '}
        {a}
        {' '}
        and
        {' '}
        {b}
        {' '}
        is
        {' '}
        {a + b}
      </div>
    </div>
  </div>
);

export default SumBlock;
