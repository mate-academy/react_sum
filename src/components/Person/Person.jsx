import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, wife, husband } = person;

  // eslint-disable-next-line no-nested-ternary
  const partner = isMarried ? (sex === 'm' ? wife : husband) : null;

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>

      {age && <p className="Person__age">{`Age: ${age}`}</p>}

      {isMarried ? (
        <p className="Person__partner">{`My partner's name is ${partner}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};
