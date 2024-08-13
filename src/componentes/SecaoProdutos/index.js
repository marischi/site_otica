import React from 'react';
import './style.css';

const SecaoProdutos = () => {
  return (
    <section id="produtos">
      <div className="secao-produtos center">
        <h2 className='titulos'>NOSSOS PRODUTOS</h2>
        <p>
          Trabalhamos com óoculos de grau, óculos de sol, lentes transition nos
          modelos masculino, feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>
        <div className="oculos-imgs">
          <div className="card-oculos">
            <h3>Óculos de grau</h3>
            <picture>
              <img src="./assets/imagens/oculos01.png" alt="Óculos de grau" />
            </picture>
            <p>R$ 500,00</p>
          </div>

          <div className="card-oculos">
            <h3>Óculos transition</h3>
            <picture>
              <img
                src="./assets/imagens/oculos02.png"
                alt="Óculos transition"
              />
            </picture>
            <p>R$ 750,00</p>
          </div>

          <div className="card-oculos">
            <h3>Óculos de sol</h3>
            <picture>
              <img src="./assets/imagens/oculos03.png" alt="Óculos de sol" />
            </picture>
            <p>R$ 700,00</p>
          </div>

          <div className="card-oculos">
            <h3>Óculos Infantil</h3>
            <picture>
              <img src="./assets/imagens/oculos04.png" alt="Óculos Infantil" />
            </picture>
            <p>R$ 500,00</p>
          </div>
        </div>
      </div>

      <div className="lista-oculos center">
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano.</li>
          <li>Manutenção preventiva.</li>
          <li>Descontos especiais na compra da segunda unidade.</li>
          <li>Flexibilidade de pagamento.</li>
        </ul>
      </div>
    </section>
  );
};

export default SecaoProdutos;
