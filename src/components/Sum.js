import React from 'react';
import PropTypes from 'prop-types';

const Sum = props => (
  <h1>
    Sum of &nbsp;
    {props.a}
    &nbsp; and &nbsp;
    {props.b}
    &nbsp; is &nbsp;
    {props.a + props.b}
  </h1>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
