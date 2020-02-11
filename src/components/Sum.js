import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Sum = ({ items = [] }) => (
  <Fragment>
    {items.map(item => (
      <p key={item.id}>
Sum of
        {' '}
        {item.a}
        {' '}
and
        {' '}
        {item.b}
        {' '}
is
        {' '}
        {item.a + item.b}
      </p>
    ))}

  </Fragment>
);

Sum.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  })).isRequired,
};

export default Sum;
