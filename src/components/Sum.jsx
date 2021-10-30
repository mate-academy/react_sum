import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

const Sum = ({ a, b }) => (
  <p>
    Sum of
    <div className="number">
      {a}
    </div>
    and
    <div className="number">
      {b}
    </div>
    is
    <div className="number number__sum">
      {a + b}
    </div>
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
