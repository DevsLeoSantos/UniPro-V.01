//imagem
import ImgDistribuidor from "/imagens/BgBanner/Distribuidor.svg";
import ImgPrazoPagamento from "/imagens/BgBanner/PrazoPagamento.svg";
import ImgOfertas from "/imagens/BgBanner/Ofertas.svg";
import ImgDivulgacao from "/imagens/BgBanner/Divulgacao.svg";
import ImgDinheiro from "/imagens/BgBanner/Dinheiro.svg";
import ImgMarca from "/imagens/BgBanner/Marca.svg";

//Estilos
import "./Distribuidor.css";

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
import i18next from "i18next";
import RetornarLink from "../../utils/RetornaLinkWhatsapp";


const Distribuidor = () => {
  const { t } = useTranslation("common");


  const [language , setLanguage] = useState(i18next.language);


   useEffect(() => {
      setLanguage(i18next.language)
   } ,[i18next.language])
   
  function ToggleAccordion(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    var target = e.currentTarget;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }


  return (
    <div className="Conteiner__Distribuidor">
      <div className="container-card">
        <h1 className="heading_titulo">{t("main.distribuidor.titulo")}</h1>
        <div className="container_apresentacao">
            <h2 className="heading_vantagens">{t("main.distribuidor.vantagens")}</h2>
            <div className="cards-quadrados">
                <div className="quadrado">
                    <img src={ImgPrazoPagamento} alt="Imagem Pagamento" />
                    <p>{t("main.distribuidor.pagamento.descricao")}</p>
                </div>
                <div className="quadrado">
                    <img src={ImgOfertas} alt="Imagem Ofertas" />
                    <p>{t("main.distribuidor.ofertaso.descricao")}</p>
                </div>
                <div className="quadrado">
                    <img src={ImgDivulgacao} alt="Imagem Divulgacao" />
                    <p>{t("main.distribuidor.divulgacao.descricao")}</p>
                </div>
            </div>
        </div>
        <div className="container_apresentacao">
            <h2 className="heading_requisitos">{t("main.distribuidor.requisitos")}</h2>
            <div className="cards-quadrados">
                <div className="quadrado">
                    <img src={ImgDinheiro} alt="Imagem Dinheiro" />
                    <p>{t("main.distribuidor.dinheiro.descricao")}</p>
                </div>
                <div className="quadrado">
                    <img src={ImgMarca} alt="Imagem Marca" />
                    <p>{t("main.distribuidor.marca.descricao")}</p>
                </div>
            </div>
            
        </div>
      </div>
      <div className="Conteiner__imgDistribuidor">
        <img src={ImgDistribuidor} alt="Imagem de Distribuidor"/>
        <a className="Bnt__Msg_Dist" href={RetornarLink(language, true)} target="_blank">
          {t("main.contato.botao.entrar.contato")}
        </a>
      </div>
    </div>
  );
};

export default Distribuidor;
