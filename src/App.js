import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Conteudo from './componentes/Conteudo';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
