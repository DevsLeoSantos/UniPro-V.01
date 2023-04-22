//Bibliotecas
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hamb from "../Hamb";

//Imagens
import Logo from "/imagens/Logos/LogoUnipro.svg";

//Pages
import Home from "../../Pages/Home";
import Company from "../../Pages/Company";
import Products from "../../Pages/Products";
import Contats from "../../Pages/Contats";

//Estilos
import "./NavBar.css";
import { useRef } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

enum languages {
  pt_br = "pt_br",
  en = "en",
  es = "es",
}

const NavBar = () => {
  var selectRef = useRef<HTMLSelectElement>(null);
  const { t } = useTranslation("common");

  async function changeLanguage() {
    console.log(selectRef.current?.value);
    await i18next.changeLanguage(selectRef.current?.value);
  }

  return (
    <Router>
      <div className="conteiner_NavBar">
        <div className="conteiner_Logo">
          <a href="/">
            <img src={Logo} alt="Logo Unipro" className="logo_NavBar" />
          </a>
        </div>
        <Hamb />
        <div className="conteiner_Routers">
          <ul className="conteiner_itens">
            <li>
              <Link to="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link to="/empresa">{t("navbar.empresa")}</Link>
            </li>
            <li>
              <Link to="/produtos">{t("navbar.produtos")}</Link>
            </li>
            <li>
              <Link to="/contato">{t("navbar.contato")}</Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www63.bb.com.br/portalbb/boleto/boletos/hc21e,802,3322,10343.bbx?pk_vid=3dafaf5722a42376161822667092c42a&pk_vid=3dafaf5722a42376161822667092c42a&pk_vid=3dafaf5722a42376161822667092c42a"
              >
                {t("navbar.atualiza.boleto")}
              </a>
            </li>
          </ul>
        </div>
        <div className="languages-box">
          <select name="" id="" ref={selectRef} onChange={changeLanguage}>
            <option value={languages.pt_br}>PTBR</option>
            <option value={languages.en}>INGLES</option>
            <option value={languages.es}>ESPANHOL</option>
          </select>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Company />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/contato" element={<Contats />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
