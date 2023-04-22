//Estilos
import { Link } from "react-router-dom";
import "./Produtosv8.css"

const Produtosv8 = () => {
    return (
        <>
            <div data-aos="zoom-in-down" className="Desk_Conteiner__main">
                <div className="Desk_Conteiner_BgImg">
                    <img src={'/imagens/BgProdutos/bg_neutro.svg'} alt={''} />
                </div>
                <div className="Desk_Conteiner__left">
                    <h1 className="Desk_Conteiner__left_line">LINHA DE CONSTRUÇÃO</h1>
                    <h2>APLICAÇÃO</h2>
                    <p>PEGAR TEXTO DE DESCRRIÇÃO COM O DIEGO.PEGAR TEXTO DE DESCRIÇÃO COM O DIEGO.</p>
                    <div className="Desk_Conteiner__Logo">
                        <img src="/imagens/Logos/LogoTrasparente.svg" alt="Logo Trasparente"></img>
                    </div>
                </div>
                <div className="Desk_Conteiner__center">
                    <img src={'/imagens/Produtos/Desengripante.png'} alt={'Espuma'}></img>
                </div>
                <div className="Desk_Conteiner__right">
                    <h1>Desengripante</h1>
                    <p className="Desk_Conteiner__right_description">{'PEGAR TEXTO DE DESCRRIÇÃO COM O DIEGO.PEGAR TEXTO DE DESCRIÇÃO COM O DIEGO.'}</p>
                    <p className="Desk_Conteiner__right_color">Dados:</p>
                    

                    <div className="Desk_Conteiner__right_budget">
                        <a className="Desk_right_budget" href="https://wa.link/wgrzyz" target="_blank">Orçamento</a>
                        {/* <div className="Desk_Conteiner__right_side">
                            <a className="Desk_right_budget Desk_side" href={'/imagens/Brocas_Rebites.pdf'} download>Especificações</a>
                            <a className="Desk_right_budget Desk_side" href={''} download>Fispq</a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Mobile */}

            <div className="Produtos__main">

                <div style={{ backgroundImage: `url(${''})` }} className="Produtos__Mobile">
                    <div >
                        <img src={'/imagens/Produtos/Desengripante.png'} alt={''}></img>
                    </div>
                </div>
                <div className="Produtos__text"> 
                    <h1 className="Produtos__text_name">Desengripante</h1>
                    <h1 className="Produtos__text_line">LINHA DE CONSTRUÇÃO</h1>
                </div>
                <div className='ConteinerBotao'>
                    <Link className="Produtos__right_budget" to='/contato'>Orçamento</Link>
                </div>
                <div className="Produtos__img">
                    <img src={'/imagens/Produtos/Desengripante.png'} alt={'Espuma'}></img>
                </div>
                <div className="Produtos__conteudo">
                    <h2>Aplicação</h2>
                    <p>PEGAR TEXTO DE DESCRIÇÃO COM O DIEGO. PEGAR TEXTO DE DESCRIÇÃO COM O DIEGO.</p>
                    <h2>Descrição</h2>
                    <p className="Produtos__right_description">PEGAR TEXTO DE DESCRIÇÃO COM O DIEGO. PEGAR TEXTO DE DESCRIÇÃO COM O DIEGO.</p>
                    <h2 className="Produtos__right_color"></h2>
                    {/* <div className='ConteinerBotao botaoside'>
                        <a href="/imagens/Brocas_Rebites.pdf" download>Especificações</a>
                        <a href="/imagens/Catalogo_2022_Unipro_.pdf" download>Fispq</a>
                    </div> */}
                </div>
                <div className="Produtos__Logo">
                    <img src="/imagens/Logos/LogoTrasparente.svg" alt="Logo Trasparente"></img>
                </div>
            </div>
        </>
    )
}

export default Produtosv8;