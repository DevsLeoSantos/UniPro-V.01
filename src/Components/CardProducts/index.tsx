//Bibliotecas
import React from 'react';

//Estilos
import "./CardProducts.css"

interface PropsCardProducts {
    img: any;
    imgBg: any;
    text: string;
    line: string;
}

const CardProducts = (props: PropsCardProducts) => {
    return (
        <div className="ConteinerMain__CardProducts">
            <div className=" swing Conteiner__CardProducts">
                <div className="CardProducts" style={{backgroundImage: `url(${props.imgBg})`}}>
                    <img className='CardProducts_Produto'src={props.img} alt="Unipro Produtos"/>
                </div>
                <h1>{props.text}</h1>
                <p>{props.line}</p>
                <a href="https://wa.link/wgrzyz"target="_blank">Orçamento</a>
            </div>
        </div>
    )
}
export default CardProducts;