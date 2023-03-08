//imagem
import ImgContato from "/imagens/BgBanner/ContatoBanner.svg";

//Estilos
import "./Contats.css";

//Biblioteca
import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';

import { useEffect } from "react";

const Contats = () => {



  useEffect(() =>{
    let accordions = document.querySelectorAll('.accordion-container .accordion');
    console.log(accordions)
    accordions.forEach(acco =>{
      acco.addEventListener("click", () =>{
      
        if(acco?.classList.contains("active")){           
          acco.classList.remove("active")
        }else{
          acco.classList.add("active")
        }
        
        // accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        //acco.classList.add('active');
      })
    }
    )
  },[])
 
return (
    <div className="Conteiner__Contato">
      <div className="Conteiner__imgContato">
        <img src={ImgContato} alt="Imagem de Contato" />
      </div>
    <div className="container">
    <h1 className="heading">Duvidas Frequentes !</h1>
      <div className="accordion-container">
          <div className="accordion">
            <div className="accordion-heading">
                <h3>Qual o valor de frete ?</h3>
                <i>⬇</i>
            </div>
            <p className="accordion-content">
                Varia por região de entrega, ao realizar o orçamento o frete é negociado de acordo com o valor do pedido.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-heading">
                <h3>Quais as formas e prazos de pagamentos?</h3>
                <i>⬇</i>
            </div>
            <p className="accordion-content">
                Temos 3 formas de pagamento, no pix a vista antecipado,
                cartão de crédito geramos um link para que você efetuar o pagamento 
                e no boleto dependendo do valor em até 4x.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-heading">
                <h3>Como funciona a entrega?</h3>
                <i>⬇</i>
            </div>
            <p className="accordion-content">
                Nossa entrega é terceirizada pela transportadora Rodonaves.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-heading">
                <h3>Qual a localização da empresa?</h3>
                <i>⬇</i>
            </div>
            <p className="accordion-content">
                  Somos de Marília, interior de São Paulo, mas entregamos para todo Brasil.
            </p>
          </div>

          <div className="accordion">
            <div className="accordion-heading">
                <h3>Qual o tempo de entregar?</h3>
                <i>⬇</i>
            </div>
            <p className="accordion-content">
                Varia da localização do cliente. Norte e Nordeste 15 dias úteis.
            </p>
          </div>
      </div>
      <a className="Bnt__Msg" href="https://wa.link/wgrzyz"target="_blank">Entrar em Contato</a>
    </div>
    </div>
  
);
}

export default Contats;
