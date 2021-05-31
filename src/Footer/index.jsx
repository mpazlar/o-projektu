import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="https://www.czechitas.cz/cs/" target="_blank">
          <img
            className="footer__img"
            src="https://digikoalice.cz/wp-content/uploads/2018/08/Czechitas_logo_new.png"
            alt="Czechitas logo"
          />
        </a>
        <h5>Vytvořeno pro Czechitas©</h5>
      </div>
      <div className="footer__email">
        <h5>Napište nám!</h5>
        <h5>
          Majda:
          <a href="mailto:m.pazlarova@gmail.com">m.pazlarova@gmail.com</a>
        </h5>

        <h5>
          Verča:
          <a href="mailto:prokupkova.verca@gmail.com">
            prokupkova.verca@gmail.com
          </a>
        </h5>
      </div>
    </footer>
  );
};
