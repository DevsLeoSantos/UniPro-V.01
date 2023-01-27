//Bibliotecas
import React from 'react';


//Imagens
import Logo from "/imagens/Logos/LogoUnipro.svg"
import Facebook from "/imagens/Logos/Facebook.svg"
import Instagram from "/imagens/Logos/Instagram.svg"
import Linkedin from "/imagens/Logos/Linkedin.svg"
import Whatsapp from "/imagens/Logos/Whatsapp.svg"

//Estilos
import "./Footer.css"

const Footer = () => { 
    return (
        <div className="Conteiner__main_Footer">
            <div className="Conteiner__left_Footer">
                <img src={Logo} alt="Logo Unipro"></img>
            </div>

            <section className="Conteiner__center_Footer">

                <div className="Conteiner__Logos_Footer">
                    <a href="https://www.facebook.com/uniproselantes13/">
                        <img src={Facebook} alt="Logo Facebook"></img>
                    </a>
                    <a
                        href="https://www.instagram.com/uniproselantes/">
                        <img src={Instagram} alt="Logo Instagram"></img>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/unipro-selantes-52532723b/">
                        <img src={Linkedin} alt="Logo Linkedin"></img>
                    </a>
                    <a
                        href="https://wa.me/5514997982640?text=Ol%C3%A1%2C+Gostaria+de+solicitar+um+or%C3%A7amento%21">
                        <img src={Whatsapp} alt="Logo Whatsapp"></img>
                    </a>
                </div>

                <div className="Conteiner__menu_Footer">
                    <a href="/">Home</a>
                    <a href="/empresa">Empresa</a>
                    <a href="/produtos">Produtos</a>
                    <a href="/contato">Contato</a>
                </div>

                <div className="Conteiner__text_item_Footer">
                    <p>© 2020 All rights reserved Unipro</p>
                </div>

            </section>
            <div className="Conteiner__right_Footer">
                <a href="#">Subir ao topo</a>
            </div>

        </div>
    )
}
export default Footer;