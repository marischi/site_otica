import React from 'react';
import './style.css';

const SecaoContato = () => {
  return (
    <section id='contato'>
      <div className="contato center">
        <h2>FALE CONOSCO</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className='central-redes'>
          <div className="bloco-contato">
            <h4>Contato</h4>
            <ul>
              <li><picture><img src="./assets/imagens/local.png" alt="" /></picture> Nova Iguaçu, RJ</li>
              <li><picture><img src="./assets/imagens/telefone.png" alt="" /></picture> (21) 99999-9999</li>
              <li><picture><img src="./assets/imagens/email.png" alt="" /></picture> contato@oticavida.com</li>
            </ul>
          </div>

          <div className="bloco-contato">
            <h4>Nossas redes Sociais</h4>
            <ul>
              <li><picture><img src="./assets/imagens/fb.png" alt="" /></picture> /OticaVida</li>
              <li><picture><img src="./assets/imagens/ig.png" alt="" /></picture> @oticavidarj</li>
              <li><picture><img src="./assets/imagens/tt.png" alt="" /></picture> @oticavidarj</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoContato;