//Componentes
import AOS from "aos";
import BannerCentral from "../../Components/BannerCentral";

// Estilo
import "./Company.css";
import "./Banner.css";
import "./SeuProduto.css";
import "./Video.css";
import "./Maps.css";
import "./Solucoes.css";
import "./Distribuição.css";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import imagem1 from "/imagens/ImagensCarrocel/Carrocel1.svg";
import imagem2 from "/imagens/ImagensCarrocel/Carrocel2.svg";
import imagem3 from "/imagens/ImagensCarrocel/Carrocel3.svg";
import imagem4 from "/imagens/ImagensCarrocel/Carrocel4.svg";
import ingles1 from "/imagens/ImagensCarrocel/Ingles1.png";
import ingles2 from "/imagens/ImagensCarrocel/Ingles2.png";
import espanhol1 from "/imagens/ImagensCarrocel/Espanhol1.svg";
import espanhol2 from "/imagens/ImagensCarrocel/Espanhol2.svg";
import espanhol3 from "/imagens/ImagensCarrocel/Espanhol3.svg";
import i18next from "i18next";

const images: { [index: string]: { [index2: string]: any } } = {
  imagem3: {
    pt_br: imagem3,
    en: ingles2,
    es: espanhol3,
  },
};
const Company = () => {
  const { t } = useTranslation("common");
  const map =
    "https://maps.google.com/maps?q=unipro selantes&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="Conteiner__Company">
      <section data-aos="fade-in" className="Conteiner__Company_banner">
        <h1>{t("empresa.titulo")}</h1>
      </section>

      <section data-aos="fade-down" className="Conteiner__Solucoes">
        <div className="solucoes_imagem">
          <div className="Conteiner___imagem">
            <img
              src="/imagens/Logos/LogoTrasparente.svg"
              alt="Logo Trasparente"
            ></img>
          </div>
        </div>
        <div data-aos="fade-in" className="solucoes_text">
          <h1>{t("empresa.secao1.titulo")}</h1>
          <p>{t("empresa.secao1.descricao")}</p>
        </div>
      </section>

      <section data-aos="fade-right" className="Conteiner__distribuição">
        <div className="distribuição_left">
          <div className="distribuição_decada">
            <h1>&#10027; {t("empresa.secao2.titulo")}</h1>
          </div>
          <div className="distribuição_text">
            <h1>{t("empresa.secao2.subtitulo")}</h1>
            <p>{t("empresa.secao2.descricao")}</p>
          </div>
          <div className="distribuição_bnt">
            <a download href="./imagens/Catalogo_2022_Unipro_.pdf">
              {t("empresa.baixar.catalogo")}
            </a>
          </div>
        </div>
        <div className="distribuição_itens">
          <div className="items">
            <img src="/imagens/Logos/Imperbealizante.svg" alt="Pu" />
            <div className="item">
              <h3>{t("empresa.secao2.produto1.titulo")}</h3>
              <p>{t("empresa.secao2.produto1.descricao")}</p>
            </div>
          </div>

          <div className="items">
            <img src="/imagens/Logos/Parafusos.svg" alt="Pu" />
            <div className="item">
              <h3> {t("empresa.secao2.produto2.titulo")}</h3>
              <p>{t("empresa.secao2.produto2.descricao")}</p>
            </div>
          </div>
          <div className="items">
            <img src="/imagens/Logos/Construcao.svg" alt="Pu" />
            <div className="item">
              <h3> {t("empresa.secao2.produto3.titulo")}</h3>
              <p>{t("empresa.secao2.produto3.descricao")}</p>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-left" className="Conteriner_SeuProduto">
        <img
          src={images.imagem3[i18next.language]}
          alt="Seu produto"
        ></img>
      </section>

      <section data-aos="fade-left" className="Conteiner__Video">
        <div className="Text_Video">
          <h1>{ReactHtmlParser(t("empresa.secao3.titulo"))}</h1>
          <h2>{ReactHtmlParser(t("empresa.secao3.descricao"))}</h2>
        </div>
        <div className="Video_main">
          <img src="/imagens/ProdutosVideo.gif" alt="Produção de Pu" />
        </div>
      </section>

      <BannerCentral
        text={t("empresa.secao4.descricao")}
        img={"/imagens/BgBanner/BgImg2.svg"}
      />

      <section data-aos="zoom-in" className="Conteiner__maps">
        <div className="maps">
          <iframe src={map} className="Map" aria-hidden="false"></iframe>
        </div>
        <div className="Conteiner__localização">
          <h1>{t("empresa.localizacao.titulo")}</h1>
          <div className="localização_descrição">
            <p>{t("empresa.localizacao.descricao")}</p>
          </div>
          <div className="localização">
            <img
              src="/imagens/Logos/PontoLocalização.svg"
              alt="Ponto de Localização"
            />
            <p>
              Av. Dr. José Guimarães Toni, 415 Jardim América, Marília - SP,
              17505-336
            </p>
          </div>
          <a
            className="bnt_rotas"
            target="_blank"
            href="https://www.google.com/maps/dir//unipro/@-22.2033473,-49.9656632,17.88z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94bfd129061e84ef:0x21ded18010838e55!2m2!1d-49.9645501!2d-22.203319"
          >
            {t("empresa.localizacao.botao")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Company;
