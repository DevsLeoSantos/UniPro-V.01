//Estilos
import { Link } from "react-router-dom";
import "./Produtos.css";
import { useTranslation } from "react-i18next";

interface PropsProdutos {
  produtoBgImagem: any;
  produtoImagem: any;
  productAlt: string;
  Fispq: string;
  FichaTec: string;
  translateKey: string;
  especificacoes: string;
}

const Produtos = (props: PropsProdutos) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div data-aos="zoom-in-down" className="Desk_Conteiner__main">
        <div className="Desk_Conteiner_BgImg">
          <img src={props.produtoBgImagem} alt={props.productAlt} />
        </div>
        <div className="Desk_Conteiner__left">
          <h1 className="Desk_Conteiner__left_line">
            {t(`produtos.${props.translateKey}.linha`)}
          </h1>
          <h2> {t("produtos.aplicacao.titulo")}</h2>
          <p>{t(`produtos.${props.translateKey}.aplicacao`)} </p>
          <div className="Desk_Conteiner__Logo">
            <img
              src="/imagens/Logos/LogoTrasparente.svg"
              alt="Logo Trasparente"
            ></img>
          </div>
        </div>
        <div className="Desk_Conteiner__center">
          <img src={props.produtoImagem} alt={props.productAlt}></img>
        </div>
        <div className="Desk_Conteiner__right">
          <h1>{t(`produtos.${props.translateKey}.nome`)}</h1>
          <p className="Desk_Conteiner__right_description">
            {t(`produtos.${props.translateKey}.descricao`)}
          </p>
          <p className="Desk_Conteiner__right_color">
            {t("produtos.dados.titulo")}
          </p>

          <div className="Desk_Conteiner__right_budget">
            <a
              className="Desk_right_budget"
              href="https://wa.link/wgrzyz"
              target="_blank"
            >
              {t("produtos.orcamento.botao")}
            </a>
            <div className="Desk_Conteiner__right_side">
              {props.FichaTec && (
                <a
                  className="Desk_right_budget Desk_side"
                  href={props.FichaTec}
                  download
                >
                  {t("produtos.ficha.tecnica.botao")}
                </a>
              )}
              {props.Fispq && (
                <a
                  className="Desk_right_budget Desk_side"
                  href={props.Fispq}
                  download
                >
                  {t("produtos.fispq.botao")}
                </a>
              )}

              {props.especificacoes && (
                <a
                  className="Desk_right_budget Desk_side"
                  href={props.especificacoes}
                  download
                >
                  {t("produtos.medidas")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="Produtos__main">
        <div
          style={{ backgroundImage: `url('')` }}
          className="Produtos__Mobile"
        >
          <div>
            <img src={props.produtoImagem} alt={props.productAlt}></img>
          </div>
        </div>
        <div className="Produtos__text">
          <h1 className="Produtos__text_name">
            {t(`produtos.${props.translateKey}.nome`)}
          </h1>
          <h1 className="Produtos__text_line">
            {t(`produtos.${props.translateKey}.linha`)}
          </h1>
        </div>
        <div className="ConteinerBotao">
          <Link className="Produtos__right_budget" to="/contato">
            {t("produtos.orcamento.botao")}
          </Link>
        </div>
        <div className="Produtos__img">
          <img src={props.produtoImagem} alt={props.productAlt}></img>
        </div>
        <div className="Produtos__conteudo">
          <h2>{t("produtos.aplicacao.titulo")}</h2>
          <p>{t(`produtos.${props.translateKey}.aplicacao`)}</p>
          <h2>Descrição</h2>
          <p className="Produtos__right_description">
            {t(`produtos.${props.translateKey}.descricao`)}
          </p>
          <h2 className="Produtos__right_color">Dados:</h2>
          <div className="ConteinerBotao botaoside">
            <a
              className="Desk_right_budget Desk_side"
              href={props.FichaTec}
              download
            >
              {t("produtos.ficha.tecnica.botao")}
            </a>
            <a
              className="Desk_right_budget Desk_side"
              href={props.Fispq}
              download
            >
              {t("produtos.fispq.botao")}
            </a>
          </div>
        </div>
        <div className="Produtos__Logo">
          <img
            src="/imagens/Logos/LogoTrasparente.svg"
            alt="Logo Trasparente"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Produtos;
