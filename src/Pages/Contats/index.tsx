//imagens
import ImgContato from "/imagens/BgBanner/ContatoBanner.svg";
//Estilos
import "./Contats.css";
import Duvidas from "../../Components/Duvidas";


const Contats = () => {

  

  return (
    <div className="Conteiner__Contato">
      <div className="Conteiner__imgContato">
        <img src={ImgContato} alt="Imagem de Contato" />
      </div>
      <div className="container">
        <h1 className="heading">Duvidas Frequentes !</h1>


        <div className="accordion-container">

          <Duvidas
            nome="Qual o valor de frete ?"
            text="Varia por região de entrega, ao realizar o orçamento o frete é negociado de acordo com o valor do pedido."

          />
          <Duvidas
            nome="Quais as formas e prazos de pagamentos?"
            text="Temos 3 formas de pagamento, no pix a vista antecipado,
            cartão de crédito geramos um link para que você efetuar o pagamento
            e no boleto dependendo do valor em até 4x."
          />
          <Duvidas
            nome="Como funciona a entrega?"
            text="Nossa entrega é terceirizada pela transportadora Rodonaves."
          />
          <Duvidas
            nome="Qual a localização da empresa?"
            text="Somos de Marília, interior de São Paulo, mas entregamos para todo Brasil."
          />
          <Duvidas
            nome="Qual o tempo de entregar?"
            text="Varia da localização do cliente. Norte e Nordeste 15 dias úteis."
          />
        </div>

        <a id='Bnt__Msg' className="Bnt__Msg" href="https://wa.me/5514997982640?text=Ol%C3%A1%2C+Gostaria+de+solicitar+um+or%C3%A7amento%21" target="_blank" >Enviar mensagem</a>
      </div>
    </div>

  );
}
export default Contats;