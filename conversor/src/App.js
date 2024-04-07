import React from 'react';
import Convertidor from './componentes/Convertidor'; 
import './App.css'; // Archivo de estilos CSS

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="convertidor-titulo">Convertidor Universal</h1>
      </header>
      <main>
        <Convertidor />
        <h2 className="convertidor-creditos">Creado por Albeiro Burbano :)</h2>
      </main>
    </div>
  );
}

export default App;