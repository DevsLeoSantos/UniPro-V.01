//Estilos
import { Link } from "react-router-dom";
import "./Produtos.css"

interface PropsProdutos {
    produtoLinha: string;
    produtoBgImagem: any;
    produtoAplicacao: string;
    produtoImagem: any;
    productAlt: string;
    produtoNome: string;
    produtoDescricao: string;
    Fispq: string;
    FichaTec: string;
}

const Produtos = (props: PropsProdutos) => {
    return (
        <>
            <div id={props.produtoNome} data-aos="zoom-in-down" className="Desk_Conteiner__main">
                <div className="Desk_Conteiner_BgImg">
                    <img src={props.produtoBgImagem} alt={props.productAlt} />
                </div>
                <div className="Desk_Conteiner__left">
                    <h1 className="Desk_Conteiner__left_line">{props.produtoLinha}</h1>
                    <h2>APLICAÇÃO</h2>
                    <p>{props.produtoAplicacao}</p>
                    <div className="Desk_Conteiner__Logo">
                        <img src="/imagens/Logos/LogoTrasparente.svg" alt="Logo Trasparente"></img>
                    </div>
                </div>
                <div className="Desk_Conteiner__center">
                    <img src={props.produtoImagem} alt={props.productAlt}></img>
                </div>
                <div className="Desk_Conteiner__right">
                    <h1>{props.produtoNome}</h1>
                    <p className="Desk_Conteiner__right_description">{props.produtoDescricao}</p>
                    <p className="Desk_Conteiner__right_color">Dados:</p>

                    <div className="Desk_Conteiner__right_budget">
                        <a className="Desk_right_budget" href="https://wa.link/wgrzyz" target="_blank">Orçamento</a>
                        <div className="Desk_Conteiner__right_side">
                            <a className="Desk_right_budget Desk_side" href={props.FichaTec} download>Ficha Técnica</a>
                            <a className="Desk_right_budget Desk_side" href={props.Fispq} download>Fispq</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}

            <div className="Produtos__main">

                <div style={{ backgroundImage: `url('')` }} className="Produtos__Mobile">
                    <div >
                        <img src={props.produtoImagem} alt={props.productAlt}></img>
                    </div>
                </div>
                <div className="Produtos__text">
                    <h1 className="Produtos__text_name">{props.produtoNome}</h1>
                    <h1 className="Produtos__text_line">{props.produtoLinha}</h1>
                </div>
                <div className='ConteinerBotao'>
                    <Link className="Produtos__right_budget" to='/contato'>Orçamento</Link>
                </div>
                <div className="Produtos__img">
                    <img src={props.produtoImagem} alt={props.productAlt}></img>
                </div>
                <div className="Produtos__conteudo">
                    <h2>Aplicação</h2>
                    <p>{props.produtoAplicacao}</p>
                    <h2>Descrição</h2>
                    <p className="Produtos__right_description">{props.produtoDescricao}</p>
                    <h2 className="Produtos__right_color">Dados:</h2>
                    <div className='ConteinerBotao botaoside'>
                        <a className="Desk_right_budget Desk_side" href={props.FichaTec} download>Ficha Técnica</a>
                        <a className="Desk_right_budget Desk_side" href={props.Fispq} download>Fispq</a>
                    </div>
                </div>
                <div className="Produtos__Logo">
                    <img src="/imagens/Logos/LogoTrasparente.svg" alt="Logo Trasparente"></img>
                </div>
            </div>
        </>
    )
}

export default Produtos;