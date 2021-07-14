import React from 'react';
import propTypes from 'prop-types';

import './Sum.scss'
//Sum of {valueA} and {valueB} is {valueA + valueB}

const Sum = ({valueA, valueB}) => (
  <div className="Sum">
    Sum of&nbsp;
    <span className="Sum__first-digit">
      {valueA}
    </span>
    &nbsp;and&nbsp;
    <span className="Sum__second-digit">
      {valueB}
    </span>
    &nbsp;is&nbsp;
    <span className="Sum__result">
      {valueA + valueB}
    </span>
  </div>
);

Sum.defaultProps = {
  valueA: 0,
  valueB: 0,
};

Sum.propTypes = {
  valueA: propTypes.number,
  valueB: propTypes.number,
};

export default Sum;
