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
import ProdutosUnipro from "../../data/ProdutosDados";

//Estilos
import "./Home.css";
import "./Benefits.css";
import "./Newsletter.css";
import "./ConteinerProducts.css";
import { IProdutos } from "../Products";
import { api } from "../../api/api";
import { useTranslation } from "react-i18next";

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
    getProdutos().then((data) => {
      setProdutos(data);
    });
  }, []);

  return (
    <div className="Conteiner__Home">
      <Carrocel />
      <section className="Conteiner__Products">
        <div className="Box__Text">
          <h1> {t("home.melhores.produtos.titulo")}</h1>
          <p>{t("home.melhores.produtos.descricao")}</p>
          <a href="/produtos">{t("home.melhores.produtos.botao")}</a>
        </div>
        <div className="Box__Products">
          {ProdutosUnipro.map((produto) => {
            const {
              linha,
              imgbgproduto,
              imagemDoProduto,
              nome,
              imagemProductAlt,
            } = produto;

            return (
              <CardProducts
                key={nome}
                img={imagemDoProduto}
                imgBg={imgbgproduto}
                text={nome}
                line={linha}
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
