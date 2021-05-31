import React from 'react';
import './style.css';
export const Verca = () => {
  return (
    <>
      <main>
        <h1 className="nadpis">Verča</h1>
        <img className="photo" src="../assets/Verca.png" alt="Verča" />
        <p className="perex">
          <span>Jack of all trades</span>
        </p>
        <p>
          V osmé třídě na základce se mně a mým spolužačkám vysmál náš učitel
          informatiky, když nás měl učit HTML. Protože jsme holky. Myslím, že
          panu učiteli by dnes poněkud spadla brada. Vzhledem k tomu, že na té
          škole stále učí, myslím si, že přes HTML4 se nedostal. A evidentně ani
          přes své středověké smýšlení.
        </p>
        <p>
          "Technické" věci mi vždy tak nějak šly. Častokrát mi stačí na něco
          dostatečně dlouho koukat a začne mi to dávat smysl. Kdeco si opravím
          nebo vyrobím. Strojů ani excelu se nebojím. Jen mě nikdy nenapadlo se
          v tomto směru rozvíjet.
        </p>
        <p>
          Vyzkoušela jsem si studium biologie, finanční poradenství a neziskový
          sektor. Teď hledám štěstí v IT. Hrozně ráda se učím. Mám nevšední
          koníčky, které vyžadují učení - ráda hraju deskovky, maluju, šiju.
          Dělám "občanskou vědu" jako členka České společnosti ornitologické.
        </p>

        <p>
          Miluju život ve všech jeho podobách, jsem zastánkyní svobody a bezpečí
          pro všechny. Ideálně strávený čas je pro mě ve společnosti mých dvou
          králíků, s šálkem kvalitního čaje a v okruhu nejbližších přátel a
          přítelkyň.
        </p>

        <div className="buttons__socials">
          <a href="https://www.facebook.com/veronika.prokupkova/">
            <img
              className="button__img"
              src="../assets/FB-logo.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com/in/vprokupkova-cz/">
            <img
              className="button__img"
              src="../assets/LI-logo.png"
              alt="Linked In"
            />
          </a>
          <a href="https://github.com/VerPro">
            <img
              className="button__img"
              src="../assets/GH-logo.png"
              alt="Git Hub"
            />
          </a>
          <a href="mailto:prokupkova.verca@gmail.com">
            <img
              className="button__img"
              src="../assets/mail-logo.png"
              alt="Email"
            />
          </a>
        </div>
      </main>
    </>
  );
};
