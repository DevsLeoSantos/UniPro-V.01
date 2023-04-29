//Bibliotecas
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hamb from "../Hamb";

//Imagens
import Logo from "/imagens/Logos/LogoUnipro.svg";

import Es from "/imagens/Navbar/Traducao/ESPANHOL.svg";
import En from "/imagens/Navbar/Traducao/INGLES.svg";
import PtBr from "/imagens/Navbar/Traducao/PORTUGUES.svg";

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
import { languages } from "../../enums/languages";

const NavBar = () => {
  var selectRef = useRef<HTMLSelectElement>(null);
  const { t } = useTranslation("common");

  async function changeLanguage(language: languages) {
    await i18next.changeLanguage(language);
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
          <button
            onClick={() => changeLanguage(languages.pt_br)}
            style={{
              border: 0,
              outline: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img src={PtBr} />
          </button>
          <button
            onClick={() => changeLanguage(languages.en)}
            style={{
              border: 0,
              outline: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img src={En} />
          </button>
          <button
            onClick={() => changeLanguage(languages.es)}
            style={{
              border: 0,
              outline: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img src={Es} />
          </button>
          {/* <select name="" id="" ref={selectRef} onChange={changeLanguage}>
            <option value={languages.pt_br}>
              <PtBr />
            </option>
            <option value={languages.en}>INGLES</option>
            <option value={languages.es}>ESPANHOL</option>
          </select> */}
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
