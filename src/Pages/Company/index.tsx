//Componentes
import AOS from "aos";
import BannerCentral from "../../Components/BannerCentral";

// Estilo
import "./Company.css";
import "./Banner.css";
import "./Video.css";
import "./Maps.css";
import "./Solucoes.css";
import "./Distribuição.css";
import "aos/dist/aos.css";

const Company = () => {
  const map =
    "https://maps.google.com/maps?q=unipro selantes&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="Conteiner__Company">
      <section data-aos="fade-in" className="Conteiner__Company_banner">
        <h1>Quem Somos</h1>
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
          <h1>Pensando em melhores soluções para área da construção civil?</h1>
          <p>
            a UNIPRO Selantes foi fundada com o objetivo de não só apresentar,
            mas também de disponibilizar essas soluções da melhor maneira
            possível, de forma rápida, prática e segura.
          </p>
        </div>
      </section>

      <section data-aos="fade-right" className="Conteiner__distribuição">
        <div className="distribuição_left">
          <div className="distribuição_decada">
            <h1>&#10027; Mais de uma Década</h1>
          </div>
          <div className="distribuição_text">
            <h1>
              Atuando na área de Distribuição e representação de selantes e
              fixadores a quase uma década.
            </h1>
            <p>
              UNIPRO vem se solidificando cada vez mais e aumentando sua área de
              atuação, trazendo também outros materiais do setor de Construção
              Civil.
            </p>
          </div>
          <div className="distribuição_bnt">
            <a href="https://api.whatsapp.com/send/?phone=5514997982640&text=Ol%C3%A1%2C+Gostaria+de+solicitar+um+or%C3%A7amento%21&type=phone_number&app_absent=0">
              Entrar em contato
            </a>
          </div>
        </div>
        <div className="distribuição_itens">
          <div className="items">
            <img src="/imagens/Logos/Imperbealizante.svg" alt="Pu" />
            <div className="item">
              <h3>Impermeabilizantes</h3>
              <p>
                Selante para uso profissional, adere em diferentes superfícies,
                resistente a agua e etc.
              </p>
            </div>
          </div>

          <div className="items">
            <img src="/imagens/Logos/Parafusos.svg" alt="Pu" />
            <div className="item">
              <h3>Parafusos e Rebites</h3>
              <p>
                Brocantes de diversas medidas, fixação de estrutura metálica,
                madeira, alumínio e etc.{" "}
              </p>
            </div>
          </div>
          <div className="items">
            <img src="/imagens/Logos/Construcao.svg" alt="Pu" />
            <div className="item">
              <h3>Construção</h3>
              <p>
                Diversos outros produtos voltados para o setor da construção
                civil e industrial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-left" className="Conteiner__Video">
        <div className="Text_Video">
          <h1>
            Produtos<span>UniPro</span>
          </h1>
          <h2>
            Agora, também atuando no setor <span>INDUSTRIAL</span>, fabricamos
            nossa própria linha de <span>selantes</span>,{" "}
            <span>fixadores e silicones</span>, trazendo cada vez mais
            qualidade, valor e segurança para nossos clientes e parceiros.
          </h2>
        </div>
        <div className="Video_main">
          <img src="/imagens/ProdutosVideo.gif" alt="Produção de Pu" />
        </div>
      </section>

      <BannerCentral
        text="Conheça a UNIPRO, a indústria mais completa do interior paulista, com compromisso total pelo cliente!"
        img={"/imagens/BgBanner/BgImg2.svg"}
      />

      <section data-aos="zoom-in" className="Conteiner__maps">
        <div className="maps">
          <iframe src={map} className="Map" aria-hidden="false"></iframe>
        </div>
        <div className="Conteiner__localização">
          <h1>Localização</h1>
          <div className="localização_descrição">
            <p>
              Localizada em Marília, interior do estado de São Paulo, entregamos
              em todo o Brasil, e temos por compromisso não só criar, mas também
              de manter uma parceria sólida e duradoura com nossos parceiros e
              clientes, com as melhores condições de venda e entrega do mercado.
            </p>
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
            Iniciar Rota
          </a>
        </div>
      </section>
    </div>
  );
};

export default Company;
