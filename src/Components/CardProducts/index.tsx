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
                <a href="https://wa.me/5514997982640?text=Ol%C3%A1%2C+Gostaria+de+solicitar+um+or%C3%A7amento%21"target="_blank">Orçamento</a>
            </div>
        </div>
    )
}
export default CardProducts;