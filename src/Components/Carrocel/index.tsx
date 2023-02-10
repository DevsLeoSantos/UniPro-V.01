//Bibliotecas
import React from 'react';

//Estilos
import "./Carrocel.css"

//Imagens
import imagem1 from "/imagens/ImagensCarrocel/Carrocel1.svg";
import imagem2 from "/imagens/ImagensCarrocel/Carrocel2.svg";
import imagem3 from "/imagens/ImagensCarrocel/Carrocel3.svg";
import imagem4 from "/imagens/ImagensCarrocel/Carrocel4.svg";


const Carrocel = () => {
  return (
    <div data-aos="fade-in" id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-flex w-100 " src={imagem1} alt="Primeiro Slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-flex  w-100" src={imagem2} alt="Segundo Slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-flex w-100" src={imagem3} alt="Terceiro Slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-flex w-100" src={imagem4} alt="Quarto Slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Próximo</span>
      </a>
    </div>
  )
}
export default Carrocel;