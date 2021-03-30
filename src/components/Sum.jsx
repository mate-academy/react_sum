import React from 'react';
import ProtoTypes from 'prop-types';

const Sum = ({ first, second }) => (
  <p>
    Sum of
    {' '}
    {first}
    {' '}
    and
    {' '}
    {second}
    {' '}
    is
    {' '}
    {first + second}
  </p>
);

Sum.ProtoTypes = {
  first: ProtoTypes.number.isRequired,
  second: ProtoTypes.number.isRequired,
};

export default Sum;
