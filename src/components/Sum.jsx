import React from 'react';
import propTypes from 'prop-types';

import './Sum.scss'

const Sum = ({valueA, valueB}) => (
  <div className="Sum">
    <span className="Sum__first-digit">
      {valueA}
    </span>
    <span className="Sum__sign">
      &nbsp;
      +
      &nbsp;
    </span>
    <span className="Sum__second-digit">
      {valueB}
    </span>
    <span className="Sum__equal">
      &nbsp;
      =
      &nbsp;
    </span>
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
