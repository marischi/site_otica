import React from 'react';
import SecaoCapa from '../SecaoCapa';
import SecaoProdutos from '../SecaoProdutos';
import SecaoSobre from '../SecaoSobre';
import SecaoContato from '../SecaoContato';

const Conteudo = () => {
  return (
    <main>
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </main>
  );
};

export default Conteudo;
