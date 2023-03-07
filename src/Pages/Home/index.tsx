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

const Home = () => {
  const [news, setNews] = useState("");
  const [produtos, setProdutos] = useState<IProdutos[]>([]);

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
          <h1> Confira nosso melhores Produtos</h1>
          <p>
            Selante de silicone Acético com fungicida de uso profissional,
            indicado para vedações de superfícies lisas e não ferrosas - vidros,
            alumínio, azulejos, peças sanitárias, cerâmicas vitrificadas,
            fibras, acrílicos, alguns tipos de plásticos, dentre outras
            Embalagem: Cartucho 280gr.
          </p>
          <a download href="/imagens/Catalogo_2022_Unipro_.pdf">
            Confira nossos Produtos
          </a>
        </div>
        <div className='Box__Products'>
          {ProdutosUnipro.map((produto) => {
            const { linha, imgbgproduto, imagemDoProduto, nome, imagemProductAlt } = produto;

            return (
              <CardProducts
                key={nome}
                img={imagemDoProduto}
                imgBg={imgbgproduto}
                text={nome}
                line={linha}
              />
            )
          })}
        </div>
      </section>

      <BannerCentral
        text="Nossa essência é a parceria sólida com nossos clientes e fornecedores"
        img={"/imagens/BgBanner/BgImg1.svg"}
      />

      <section data-aos="fade-right" className="conteiner__Beneficios">
        <h1>Benefícios</h1>
        <div className="logos__Beneficios">
          <div>
            <img src={LogoPagamento} alt="Logo Pagamento" />
            <h3>Forma de pagamento</h3>
            <p>Oferecemos pagamento flexível opções, para facilitar.</p>
          </div>

          <div>
            <img src={LogoDevolução} alt="Logo Devolução" />
            <h3>Política de devolução</h3>
            <p>Você pode devolver um produto dentro de 07 dias.</p>
          </div>

          <div>
            <img src={LogoAtendimento} alt="Logo Atendimento" />
            <h3>Suporte ao cliente</h3>
            <p>Nosso suporte ao cliente de Segunda a Sexta.</p>
          </div>
        </div>
      </section>

      <section data-aos="fade-top " className="conteiner__Newsletter">
        <h1>Receba Promoções</h1>
        <p>ASSINE NOSSO NEWSLETTER E RECEBA PROMOÇÕES!</p>

        <div className="email__Newsletter">
          <a href="https://wa.me/5514997982640?text=Ol%C3%A1%2C+Gostaria+de+solicitar+um+or%C3%A7amento%21" target="_blank">Contato</a>
        </div>

        <p id="text__Newsletter">
          Nós nunca enviaremos spam para você. Apenas informações úteis
        </p>
      </section>
    </div>
  );
};

export default Home;
