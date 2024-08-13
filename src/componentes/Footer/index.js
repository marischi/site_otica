import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer center'>
        <p>
          © 2024 Óticas Vida - Todos os direitos reservados -{' '}
          <a href='https://github.com/marischi/oticas' target='_blank'>
            Mari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
