//Bibliotecas
import { useEffect, useState } from "react";

//Components
import BannerCentral from "../../Components/BannerCentral";
import CardProducts from "../../Components/CardProducts";
import Carrocel from "../../Components/Carrocel";

//Imagens
import LogoPagamento from "/imagens/Logos/IconPagamento.svg";
import LogoDevolução from "/imagens/Logos/IconDevolução.svg";
import LogoAtendimento from "/imagens/Logos/IconAtendimento.svg";

//Dados
import ProdutosUnipro from "../../data/ProdutosDados2";

//Estilos
import "./Home.css";
import "./Benefits.css";
import "./Newsletter.css";
import "./ConteinerProducts.css";
import { IProdutos } from "../Products";
import { api } from "../../api/api";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { languages } from "../../enums/languages";

const Home = () => {
  const [news, setNews] = useState("");
  const [produtos, setProdutos] = useState<IProdutos[]>([]);

  const { t } = useTranslation("common");

  const aoDigitar = (e: any) => {
    setNews(e.target.value);
  };
  const aoSalvar = (e: any) => {
    e.preventDefault();
    setNews("");
  };
  async function getProdutos() {
    var produtos = await api.get("/produto");
    return produtos.data as IProdutos[];
  }

  useEffect(() => {
    debugger;
    console.log("teste", i18next.language);
  }, [i18next.language]);

  return (
    <div className="Conteiner__Home">
      <Carrocel />

      <section className="Conteiner__Products">
        <div className="Box__Text">
          <h1> {t("home.melhores.produtos.titulo")}</h1>
          <p>{t("home.melhores.produtos.descricao")}</p>
          <a download href="./imagens/Catalogo_2022_Unipro_.pdf">{t("home.melhores.produtos.botao")}</a>
        </div>
        <div className="Box__Products">
          {ProdutosUnipro.map((produto) => {
            const {
              linha,
              imgbgproduto,
              imagemDoProduto,
              nome,
              translateKey
            } = produto;

            return (
              <CardProducts
                translateKey={translateKey}
                key={nome}
                img={imagemDoProduto}
                imgBg={imgbgproduto}
                text={nome!}
                line={linha!}
                
              />
            );
          })}
        </div>
      </section>

      <BannerCentral
        text={t("home.banner.descricao")}
        img={"/imagens/BgBanner/BgImg1.svg"}
      />

      <section data-aos="fade-right" className="conteiner__Beneficios">
        <h1>{t("home.beneficios.titulo")}</h1>
        <div className="logos__Beneficios">
          <div>
            <img src={LogoPagamento} alt="Logo Pagamento" />
            <h3>{t("home.beneficios.formapagamento.titulo")}</h3>
            <p>{t("home.beneficios.formapagamento.descricao")}</p>
          </div>

          <div>
            <img src={LogoDevolução} alt="Logo Devolução" />
            <h3>{t("home.beneficios.politica.titulo")}</h3>
            <p>{t("home.beneficios.politica.descricao")}</p>
          </div>

          <div>
            <img src={LogoAtendimento} alt="Logo Atendimento" />
            <h3>{t("home.beneficios.suporte.titulo")}</h3>
            <p>{t("home.beneficios.suporte.descricao")}</p>
          </div>
        </div>
      </section>

      <section data-aos="fade-top " className="conteiner__Newsletter">
        <h1>{t("home.newsletter.titulo")}</h1>
        <p>{t("home.newsletter.descricao")}</p>

        <div className="email__Newsletter">
          <a href="https://wa.link/wgrzyz" target="_blank">
            {t("home.newsletter.botao")}
          </a>
        </div>

        <p id="text__Newsletter">{t("home.newsletter.aviso")}</p>
      </section>
    </div>
  );
};

export default Home;
