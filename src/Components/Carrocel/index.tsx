//Bibliotecas
import React from "react";

//Estilos
import "./Carrocel.css";

//Imagens
import imagem1 from "/imagens/ImagensCarrocel/Carrocel1.png";
import imagem2 from "/imagens/ImagensCarrocel/Carrocel2.png";
import imagem3 from "/imagens/ImagensCarrocel/Carrocel3.svg";
import imagem4 from "/imagens/ImagensCarrocel/Carrocel4.png";
import ingles1 from "/imagens/ImagensCarrocel/Ingles1.png";
import ingles2 from "/imagens/ImagensCarrocel/Ingles2.png";
import ingles3 from "/imagens/ImagensCarrocel/Ingles3.svg";
import espanhol1 from "/imagens/ImagensCarrocel/Espanhol1.png";
import espanhol2 from "/imagens/ImagensCarrocel/Espanhol2.png";
import espanhol3 from "/imagens/ImagensCarrocel/Espanhol3.svg";
import i18next from "i18next";

const images: { [index: string]: { [index2: string]: any } } = {
  imagem1: {
    pt_br: imagem1,
    en: ingles1,
    es: espanhol1,
  },
  imagem2: {
    pt_br: imagem2,
    en: ingles2,
    es: espanhol2,
  },
  imagem3: {
    pt_br: imagem3,
    en: ingles3,
    es: espanhol3,
  },
};

const Carrocel = () => {
  return (
    <div
      data-aos="fade-in"
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-flex w-100 "
            src={images.imagem1[i18next.language]}
            alt="Primeiro Slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-flex  w-100"
            src={images.imagem2[i18next.language]}
            alt="Segundo Slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-flex w-100"
            src={images.imagem3[i18next.language]}
            alt="Terceiro Slide"
          />
        </div>
        <div className="carousel-item">
          <img className="d-flex w-100" src={imagem4} alt="Quarto Slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Próximo</span>
      </a>
    </div>
  );
};
export default Carrocel;
