import React, { useState } from "react";
import {Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Accueil() {
  const img_carousel = [
    "/img/league_of_legends.jpg",
    "/img/valorant.jpg",
    "/img/rainbow_six.jpg",
    "/img/rocket_league.webp",
  ];
  const jeu_carousel = [
    "league_of_legends",
    "valorant",
    "raimbow_six_siege",
    "rocket_league",
  ];
  const [index, setIndex] = useState(0);

  function slide_up() {
    if (index == 3) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function slide_down() {
    if (index == 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <div>
        {" "}
        {/*  Navbar */}
        <Header />
      </div>

      {/* DESCRIPTION ALKYA - END */}
      <section>
        <div>
          <h2 className="h2_accueil">Alkya</h2>
          <p className="p_accueil">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ullam veritatis et amet cupiditate enim fuga ea mollitia, quae odio
            maxime error explicabo molestias nostrum asperiores ipsum cumque
            aliquam dicta. Nisi illum, repellat alias distinctio eligendi beatae
            porro architecto, harum laborum modi sit esse nostrum impedit magnam
            consectetur debitis eveniet id. Corrupti exercitationem minus
            cupiditate quaerat. Porro adipisci facilis voluptatibus, tempora
            impedit hic totam ratione voluptatum similique excepturi blanditiis
            aut eius asperiores. Ab odio pariatur recusandae aliquid, modi
            dolorem, magnam atque vitae impedit quod et animi temporibus
            deserunt vel, consequatur tempore tenetur earum repudiandae ipsum
            veritatis iure fugit officiis. Similique?
          </p>
        </div>
        <div className="div_accueil row">
          <img src="./img/random_guy.png" alt="CEO" className="img_accueil" />
          <img src="./img/random_guy.png" alt="CEO" className="img_accueil" />
          <img src="./img/random_guy.png" alt="CEO" className="img_accueil" />
          <img src="./img/random_guy.png" alt="CEO" className="img_accueil" />
        </div>
      </section>

      <h2 className="h2_accueil">NOS EQUIPES</h2>

      {/* CAROUSEL */}
      <div className="carousel_equipes_accueil">
        <div className="center-align valign-wrapper">
          <a onClick={slide_down}>
            <i class="material-icons carousel_equipes">chevron_left</i>
          </a>
          <div>
            <Link to={`/line_up/${jeu_carousel[index]}`}>
              <img
                src={img_carousel[index]}
                alt="img"
                className="img_carousel_equipes"
              ></img>
            </Link>
          </div>
          <a onClick={slide_up}>
            <i class="material-icons carousel_equipes">chevron_right</i>
          </a>
        </div>
      </div>

      <h5 className="h5_accueil">TOUTES NOS EQUIPES</h5>

      {/* DESCRIPTION ALKYA - END */}

      {/* NOS EQUIPES - START */}
      <section>
        <div>
          <h2 className="h2_accueil"> DERNIERES ACTUALITEES </h2>
          <div className="div_actus center-align">
            <figure>
              <Link to={"/article"}>
                <img
                  src="./img/images.jpg"
                  alt="Esport"
                  className="img_esport2"
                />
                <figcaption className="fig_article">
                  La rentabilité dans l'esport
                </figcaption>
              </Link>
            </figure>
            <figure>
              <Link to={"/article"}>
                <img
                  src="./img/esport.jpg"
                  alt="Esport"
                  className="img_esport3"
                />
                <figcaption className="fig_article">
                  La rentabilité dans l'esport
                </figcaption>
              </Link>
            </figure>
          </div>
        </div>
      </section>
      {/* NOS EQUIPES - END */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Accueil;
