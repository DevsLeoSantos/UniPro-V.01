//imagem
import ImgContato from "/imagens/BgBanner/ContatoBanner.svg";

//Estilos
import "./Contats.css";

//Biblioteca
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Contats = () => {
  const { t } = useTranslation("common");

  function ToggleAccordion(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    var target = e.currentTarget;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }

  // useEffect(() => {
  //   console.log("foidase");
  //   let accordions = document.querySelectorAll(
  //     ".accordion-container .accordion"
  //   );
  //   console.log(accordions);
  //   accordions.forEach((acco) => {
  //     acco.addEventListener("click", () => {
  //       if (acco?.classList.contains("active")) {
  //         acco?.classList.remove("active");
  //       } else {
  //         acco?.classList.add("active");
  //       }

  //       // accordions.forEach(subAcco => { subAcco.classList.remove('active') });
  //       //acco.classList.add('active');
  //     });
  //   });
  // }, []);

  return (
    <div className="Conteiner__Contato">
      <div className="Conteiner__imgContato">
        <img src={ImgContato} alt="Imagem de Contato" />
      </div>
      <div className="container">
        <h1 className="heading">{t("main.contato.titulo")}</h1>
        <div className="accordion-container">
          <div className="accordion" onClick={(e) => ToggleAccordion(e)}>
            <div className="accordion-heading">
              <h3>{t("main.contato.valor.frete.titulo")}</h3>
              <i>⬇</i>
            </div>
            <p className="accordion-content">
              {t("main.contato.valor.frete.resposta")}
            </p>
          </div>

          <div className="accordion" onClick={(e) => ToggleAccordion(e)}>
            <div className="accordion-heading">
              <h3>{t("main.contato.forma.pagamento.titulo")}</h3>
              <i>⬇</i>
            </div>
            <p className="accordion-content">
              {t("main.contato.forma.pagamento.resposta")}
            </p>
          </div>

          <div className="accordion" onClick={(e) => ToggleAccordion(e)}>
            <div className="accordion-heading">
              <h3>{t("main.contato.entrega.titulo")}</h3>
              <i>⬇</i>
            </div>
            <p className="accordion-content">
              {t("main.contato.entrega.resposta")}
            </p>
          </div>

          <div className="accordion" onClick={(e) => ToggleAccordion(e)}>
            <div className="accordion-heading">
              <h3>{t("main.contato.localizacao.titulo")}</h3>
              <i>⬇</i>
            </div>
            <p className="accordion-content">
              {t("main.contato.localizacao.resposta")}
            </p>
          </div>

          <div className="accordion" onClick={(e) => ToggleAccordion(e)}>
            <div className="accordion-heading">
              <h3>{t("main.contato.tempo.entrega.titulo")}</h3>
              <i>⬇</i>
            </div>
            <p className="accordion-content">
              {t("main.contato.tempo.entrega.resposta")}
            </p>
          </div>
        </div>
        <a className="Bnt__Msg" href="https://wa.link/wgrzyz" target="_blank">
          {t("main.contato.botao.entrar.contato")}
        </a>
      </div>
    </div>
  );
};

export default Contats;
