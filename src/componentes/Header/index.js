import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="header center">
        <picture>
          <img src="./assets/imagens/logo.png" alt="Óticas Vida" />
        </picture>
        <nav>
          <ul>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
