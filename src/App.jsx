import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

function App() {
  return (
    <main className="app">
      <section>
        <h2>Componentes de Soma</h2>

        {/* a = 2 e b = 3 */}
        <Sum a={2} b={3} />

        {/* a = -5 e b = 5 */}
        <Sum a={-5} b={5} />

        {/* apenas a = 10 */}
        <Sum a={10} />

        {/* apenas b = 5 */}
        <Sum b={5} />

        {/* nenhum parâmetro */}
        <Sum />
      </section>
    </main>
  );
}

export default App;
