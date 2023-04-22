//Bibliotecas
import { Link } from "react-router-dom";

//Imagens
import Logo from "/imagens/Logos/LogoUnipro.svg";
import Facebook from "/imagens/Logos/Facebook.svg";
import Instagram from "/imagens/Logos/Instagram.svg";
import Linkedin from "/imagens/Logos/Linkedin.svg";
import Whatsapp from "/imagens/Logos/Whatsapp.svg";

//Estilos
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className="Conteiner__main_Footer">
      <div className="Conteiner__left_Footer">
        <img src={Logo} alt="Logo Unipro"></img>
      </div>

      <section className="Conteiner__center_Footer">
        <div className="Conteiner__Logos_Footer">
          <a href="https://www.facebook.com/uniproselantes13/" target="_blank">
            <img src={Facebook} alt="Logo Facebook"></img>
          </a>
          <a href="https://www.instagram.com/uniproselantes/" target="_blank">
            <img src={Instagram} alt="Logo Instagram"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/unipro-selantes-52532723b/"
            target="_blank"
          >
            <img src={Linkedin} alt="Logo Linkedin"></img>
          </a>
          <a href="https://wa.link/wgrzyz" target="_blank">
            <img src={Whatsapp} alt="Logo Whatsapp"></img>
          </a>
        </div>

        <div className="Conteiner__text_item_Footer">
          <p>{t("footer.descricao")}</p>
        </div>
      </section>
      <div className="Conteiner__right_Footer">
        <a href="#">{t("footer.subir.topo")}</a>
      </div>
    </div>
  );
};
export default Footer;
