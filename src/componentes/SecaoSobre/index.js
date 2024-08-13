import React from 'react';
import './style.css';

const SecaoSobre = () => {
  return <section id='sobre'>
    <div className="sobre center">
      <h2>QUEM SOMOS NÓS?</h2>
      <p>Fundada em 2001, em Nova Iguaçu - Rio de janeiro, a ótica iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

      <div className="elementos-sobre">
        <picture><img src="./assets/imagens/loja.png" alt="Nossa Loja" /></picture>

        <div className="sobre-elementos primeiro-sobre">
          <h4>NOSSAS FILIAIS</h4>
          <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
        </div>

        <div className="sobre-elementos">
          <h4>ATENDIMENTO FLEXÍVEL</h4>
          <p>Nossa equipe é treinada para te atender</p>
        </div>

        <picture><img src="./assets/imagens/atendimento.png" alt="Atendimento" /></picture>
      </div>

      
    </div>
  </section>;
};

export default SecaoSobre;
