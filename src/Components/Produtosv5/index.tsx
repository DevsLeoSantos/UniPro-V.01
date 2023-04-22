//Estilos
import { Link } from "react-router-dom";
import "./Produtosv5.css"

const Produtosv5 = () => {
    return (
        <>
            <div data-aos="zoom-in-down" className="Desk_Conteiner__main">
                <div className="Desk_Conteiner_BgImg">
                    <img src={'/imagens/BgProdutos/bg_paraf.svg'} alt={''} />
                </div>
                <div className="Desk_Conteiner__left">
                    <h1 className="Desk_Conteiner__left_line">LINHA PARAFUSOS</h1>
                    <h2>APLICAÇÃO</h2>
                    <p>Parafuso sextavado, chata, flangeada e panela. Diversas medidas, confira nossas Especificações ou entre em contato conosco.</p>
                    <div className="Desk_Conteiner__Logo">
                        <img src="/imagens/Logos/LogoTrasparente.svg" alt="Logo Trasparente"></img>
                    </div>
                </div>
                <div className="Desk_Conteiner__center">
                    <img src={'/imagens/Produtos/Parafuso.png'} alt={'Parafuso Brocante'}></img>
                </div>
                <div className="Desk_Conteiner__right">
                    <h1>Parafusos</h1>
                    <p className="Desk_Conteiner__right_description">{'Utilizados na fixação de estruturas metélicas, unão de chapas e perfis, fixação de madeira com aço, aluminio etc.'}</p>
                    <p className="Desk_Conteiner__right_color">Dados:</p>
                    

                    <div className="Desk_Conteiner__right_budget">
                        <a className="Desk_right_budget" href="https://wa.link/wgrzyz" target="_blank">Orçamento</a>
                        <div className="Desk_Conteiner__right_side">
                            <a className="Desk_right_budget Desk_side" href={'/imagens/Parafusos.pdf'} download>Medidas</a>
                            {/* <a className="Desk_right_budget Desk_side" href={''} download>Fispq</a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}

            <div className="Produtos__main">

                <div style={{ backgroundImage: `url(${''})` }} className="Produtos__Mobile">
                    <div >
                        <img src={'/imagens/Produtos/Parafuso.png'} alt={''}></img>
                    </div>
                </div>
                <div className="Produtos__text"> 
                    <h1 className="Produtos__text_name">Parafusos</h1>
                    <h1 className="Produtos__text_line">LINHA PARAFUSOS</h1>
                </div>
                <div className='ConteinerBotao'>
                    <Link className="Produtos__right_budget" to='/contato'>Orçamento</Link>
                </div>
                <div className="Produtos__img">
                    <img src={'/imagens/Produtos/Parafuso.png'} alt={''}></img>
                </div>
                <div className="Produtos__conteudo">
                    <h2>Aplicação</h2>
                    <p>Parafuso sextavado, chata, flangeada e panela. Diversas medidas, confira nossas Especificações ou entre em contato conosco.</p>
                    <h2>Descrição</h2>
                    <p className="Produtos__right_description">Utilizados na fixação de estruturas metélicas, unão de chapas e perfis, fixação de madeira com aço, aluminio etc.</p>
                    <h2 className="Produtos__right_color">Dados:</h2>
                    <div className='ConteinerBotao botaoside'>
                        <a href="/imagens/Parafusos.pdf" download>Medidas</a>
                        {/* <a href="/imagens/Catalogo_2022_Unipro_.pdf" download>Fispq</a> */}
                    </div>
                </div>
                <div className="Produtos__Logo">
                    <img src="/imagens/Logos/LogoTrasparente.svg" alt="Logo Trasparente"></img>
                </div>
            </div>
        </>
    )
}

export default Produtosv5;