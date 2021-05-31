import React from 'react';
import './style.css';
export const Majda = () => {
  return (
    <main>
      <h1 className="nadpis">Majda</h1>
      <img className="photo" src="../assets/majda.png" alt="Majda" />
      <p className="perex">
        <span>Fulltime capybara enthusiast </span>
      </p>
      <p>
        Do světa IT jsem se dostala v rámci postátnicové prázdnoty. Nová zábava
        mě rychle pohltila a teď, necelý rok po otevření první facebookové
        reklamy na kurzy o programování, končím Digitální akademii a chystám se
        začít novou kariéru.
      </p>
      <p>
        Miluju kapybary, svýho psa, heřmánkovej krém na ruce, film Fantom opery
        (2004), guacamole a pálavský víno.
      </p>
      <div className="buttons__socials">
        <a href="https://www.facebook.com/magda.pazlarova/">
          <img
            className="button__img"
            src="../assets/FB-logo.png"
            alt="Facebook"
          />
        </a>
        <a href="https://www.linkedin.com/in/magdal%C3%A9na-pazlarov%C3%A1-3a1264175/">
          <img
            className="button__img"
            src="../assets/LI-logo.png"
            alt="Linked In"
          />
        </a>
        <a href="https://github.com/mpazlar">
          <img
            className="button__img"
            src="../assets/GH-logo.png"
            alt="Git Hub"
          />
        </a>
        <a href="mailto:m.pazlarova@gmail.com">
          <img
            className="button__img"
            src="../assets/mail-logo.png"
            alt="Email"
          />
        </a>
      </div>
    </main>
  );
};
