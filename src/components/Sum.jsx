import React from 'react';
import PropTypes from 'prop-types';
// import { number } from 'prop-types';

export function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

// <>
// <h1>{`Sum of ${a = 2} and ${b = 3} is ${a + b}`}</h1>
// <h1>{`Sum of ${a = -5} and ${b = 5} is ${a + b}`}</h1>
// <h1>{`Sum of ${a = 10} and ${b = 0} is ${a + b}`}</h1>
// <h1>{`Sum of ${a = 0} and ${b = 5} is ${a + b}`}</h1>
// <h1>{`Sum of ${a = 0} and ${b = 0} is ${a + b}`}</h1>
// </>
// export default Sum;
