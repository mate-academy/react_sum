import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions, no-unused-vars
import { Sum } from './Sum';

function App() {
  return (
    <div className="App">
      <Sum a={2} b={3} />
      <Sum a={-5} b={5} />
      <Sum a={10} />
      <Sum b={5} />
      <Sum />
    </div>
  );
}

export default App;
