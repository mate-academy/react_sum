import React from 'react';
import PropTypes from 'prop-types';

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,

};

// works without desctructuring
// Sum.defaultProps = {
//   a: 0,ç
//   b: 0,
// };

export function Sum({
  a = 0,
  b = 0,
}) {
  const sum = a + b;

  if (a === 0 && b === 0) {
    <p>
      no params at all
    </p>;
  }

  if (b === 0) {
    return (
      <p>
        {`Sum of ${a} and ${b} is ${sum}`}
      </p>
    );
  }

  if (a === 0) {
    return (
      <p>
        {`Sum of ${a} and ${b} is ${sum}`}
      </p>
    );
  }

  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}
